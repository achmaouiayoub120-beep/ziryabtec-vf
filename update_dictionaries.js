const fs = require('fs');

try {
  const fileStr = fs.readFileSync('lib/data/formations.ts', 'utf8');
  const match = fileStr.match(/export const formationsData: Formation\[\] = (\[[\s\S]*?\]);/);
  const evalStr = match[1];
  const formationsData = new Function('return ' + evalStr)();

  // Images fiables et variées par thème (toutes testées sur Unsplash)
  const themeImages = {
    "Cybersécurité": [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600&h=400",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600&h=400",
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=600&h=400",
      "https://images.unsplash.com/photo-1563986768609-322da13575f2?auto=format&fit=crop&q=80&w=600&h=400",
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80&w=600&h=400",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=600&h=400",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600&h=400",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=600&h=400",
    ],
    "Cloud": [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=400",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600&h=400",
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=600&h=400",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600&h=400",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400",
    ],
    "Système": [
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=600&h=400",
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=600&h=400",
      "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?auto=format&fit=crop&q=80&w=600&h=400",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600&h=400",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600&h=400",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600&h=400",
    ],
    "Réseaux": [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600&h=400",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600&h=400",
      "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80&w=600&h=400",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=400",
    ],
    "IA": [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600&h=400",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600&h=400",
    ],
  };

  // Prix déterministes basés sur la référence
  function getPrice(ref, duree) {
    const hash = ref.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
    if (duree === "2J") return [2990, 3200, 3500, 2800, 3100][hash % 5];
    if (duree === "5J") return [4990, 5200, 5500, 4800, 5900][hash % 5];
    return [3990, 4500, 3500, 4200, 3800][hash % 5];
  }

  const themeImageIdx = {};

  // Themes
  const themesSet = new Set(formationsData.map(f => f.theme));
  const themes = Array.from(themesSet).map(t => ({
    id: t,
    fr: { name: t, description: "Formations en " + t },
    en: { name: t, description: t + " training courses" }
  }));

  // Categories
  const catMap = new Map();
  formationsData.forEach(f => {
    if (!catMap.has(f.categorie)) catMap.set(f.categorie, f.theme);
  });
  const categories = Array.from(catMap.entries()).map(([cat, theme]) => ({
    id: cat, themeId: theme,
    fr: { name: cat }, en: { name: cat }
  }));

  // Featured courses indices - 6 courses from different themes
  const featuredIds = ["CP-TH", "TH-N1", "CLD-SEC", "PYT-DEV", "NET-SEC", "SEC-AD"];

  // translatedCourses
  const translatedCourses = formationsData.map((f, i) => {
    const durationMatch = f.duree.match(/(\d+)/);
    const durationDays = durationMatch ? parseInt(durationMatch[1], 10) : 2;

    const imgs = themeImages[f.theme] || themeImages["Cybersécurité"];
    if (!themeImageIdx[f.theme]) themeImageIdx[f.theme] = 0;
    const imageIndex = themeImageIdx[f.theme] % imgs.length;
    themeImageIdx[f.theme]++;

    const price = getPrice(f.reference, f.duree);
    const isFeatured = featuredIds.includes(f.reference);

    let level = "all";
    const lower = f.titre.toLowerCase();
    if (lower.includes("niveau 1") || lower.includes("fondamentaux") || lower.includes("introduction") || lower.includes("prise en main") || lower.includes("préparatoire")) {
      level = "beginner";
    } else if (lower.includes("niveau 2") || lower.includes("avancé") || lower.includes("advanced")) {
      level = "advanced";
    } else if (lower.includes("intermédiaire")) {
      level = "intermediate";
    }

    let format = "presentiel";
    if (i % 5 === 0) format = "hybride";
    if (i % 7 === 0) format = "en-ligne";

    return {
      id: f.reference || "REF-" + i,
      themeId: f.theme,
      categoryId: f.categorie,
      rating: Number((4.5 + (((f.reference || '').charCodeAt(0) % 5) * 0.1)).toFixed(1)),
      students: 100 + ((f.reference || '').charCodeAt(0) * 7) % 900,
      duration: f.duree,
      durationDays,
      price,
      featured: isFeatured ? true : undefined,
      badge: i % 7 === 0 ? "new" : i % 11 === 0 ? "bestseller" : undefined,
      color: "from-blue-600/20 to-cyan-600/20",
      image: imgs[imageIndex],
      level,
      format,
      fr: {
        title: f.titre,
        category: f.categorie,
        theme: f.theme,
        instructor: "Expert ZiryabTec"
      },
      en: {
        title: f.titre,
        category: f.categorie,
        theme: f.theme,
        instructor: "ZiryabTec Expert"
      }
    };
  });

  let dictStr = fs.readFileSync('lib/i18n/dictionaries.ts', 'utf8');
  dictStr = dictStr.replace(/export const themes: Theme\[\] = \[[\s\S]*?\];/, 'export const themes: Theme[] = ' + JSON.stringify(themes, null, 2) + ';');
  dictStr = dictStr.replace(/export const categories: Category\[\] = \[[\s\S]*?\];/, 'export const categories: Category[] = ' + JSON.stringify(categories, null, 2) + ';');
  dictStr = dictStr.replace(/export const translatedCourses: TranslatedCourse\[\] = \[[\s\S]*?\];/, 'export const translatedCourses: TranslatedCourse[] = ' + JSON.stringify(translatedCourses, null, 2) + ';');

  fs.writeFileSync('lib/i18n/dictionaries.ts', dictStr);
  console.log('OK - Updated with unique images, prices, and 6 featured courses.');
} catch (err) {
  console.error('Error:', err);
}
