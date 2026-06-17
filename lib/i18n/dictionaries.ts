import type { TranslatedCourse, Theme, Category } from "@/lib/data/types";

/* ══════════════════════════════════════════════════════════
   THEMES — Top-level classification
   ══════════════════════════════════════════════════════════ */
export const themes: Theme[] = [
  {
    "id": "Cybersécurité",
    "fr": {
      "name": "Cybersécurité",
      "description": "Formations en Cybersécurité"
    },
    "en": {
      "name": "Cybersécurité",
      "description": "Cybersécurité training courses"
    }
  },
  {
    "id": "Cloud",
    "fr": {
      "name": "Cloud",
      "description": "Formations en Cloud"
    },
    "en": {
      "name": "Cloud",
      "description": "Cloud training courses"
    }
  },
  {
    "id": "Système",
    "fr": {
      "name": "Système",
      "description": "Formations en Système"
    },
    "en": {
      "name": "Système",
      "description": "Système training courses"
    }
  },
  {
    "id": "Réseaux",
    "fr": {
      "name": "Réseaux",
      "description": "Formations en Réseaux"
    },
    "en": {
      "name": "Réseaux",
      "description": "Réseaux training courses"
    }
  },
  {
    "id": "IA",
    "fr": {
      "name": "IA",
      "description": "Formations en IA"
    },
    "en": {
      "name": "IA",
      "description": "IA training courses"
    }
  }
];

/* ══════════════════════════════════════════════════════════
   CATEGORIES — Belong to a Theme
   ══════════════════════════════════════════════════════════ */
export const categories: Category[] = [
  {
    "id": "Sécurité offensive",
    "themeId": "Cybersécurité",
    "fr": {
      "name": "Sécurité offensive"
    },
    "en": {
      "name": "Sécurité offensive"
    }
  },
  {
    "id": "Cloud Computing",
    "themeId": "Cloud",
    "fr": {
      "name": "Cloud Computing"
    },
    "en": {
      "name": "Cloud Computing"
    }
  },
  {
    "id": "Développement Unix Linux",
    "themeId": "Système",
    "fr": {
      "name": "Développement Unix Linux"
    },
    "en": {
      "name": "Développement Unix Linux"
    }
  },
  {
    "id": "Virtualisation",
    "themeId": "Système",
    "fr": {
      "name": "Virtualisation"
    },
    "en": {
      "name": "Virtualisation"
    }
  },
  {
    "id": "Windows et System Center",
    "themeId": "Système",
    "fr": {
      "name": "Windows et System Center"
    },
    "en": {
      "name": "Windows et System Center"
    }
  },
  {
    "id": "MacOs",
    "themeId": "Système",
    "fr": {
      "name": "MacOs"
    },
    "en": {
      "name": "MacOs"
    }
  },
  {
    "id": "Formation Mise en Oeuvre",
    "themeId": "Réseaux",
    "fr": {
      "name": "Formation Mise en Oeuvre"
    },
    "en": {
      "name": "Formation Mise en Oeuvre"
    }
  },
  {
    "id": "Intelligence Artificielle",
    "themeId": "IA",
    "fr": {
      "name": "Intelligence Artificielle"
    },
    "en": {
      "name": "Intelligence Artificielle"
    }
  }
];

/* ══════════════════════════════════════════════════════════
   UI DICTIONARIES (FR / EN)
   ══════════════════════════════════════════════════════════ */
export const dictionaries = {
  fr: {
    hero: {
      badge: "Plateforme d'excellence",
      titleStart: "Formations IT certifiantes en ",
      titleHighlight: "IA, Cloud & Cybersécurité",
      titleEnd: "",
      subtitle: "Préparez vos certifications ISTQB, AWS, Microsoft Azure et plus encore. Plus de 290 formations animées par des experts certifiés.",
      searchPlaceholder: "Que souhaitez-vous apprendre aujourd'hui ? (ex: Cloud, Python...)",
      searchButton: "Rechercher",
      scroll: "Découvrir"
    },
    featured: {
      subtitle: "Formations phares",
      title: "Nos formations à la une",
      description: "Découvrez nos formations les plus demandées, sélectionnées par nos experts pour accélérer votre carrière.",
      viewAll: "Voir tout le catalogue",
      view: "Découvrir",
    },
    courses: {
      catalog: "Catalogue",
      title: "Explorez nos cours",
      description: "Des formations créées par des experts marocains et internationaux, mises à jour régulièrement.",
      badges: {
        bestseller: "Best Seller",
        new: "Nouveau",
        ai: "IA incluse"
      },
      progress: "Progression",
      view: "Voir",
      filters: {
        searchPlaceholder: "Rechercher un cours...",
        allCategories: "Toutes les catégories",
        allPrices: "Tous les prix",
        free: "Gratuit",
        paid: "Payant",
        noResults: "Aucun cours ne correspond à vos critères de recherche.",
        loading: "Chargement du catalogue...",
        clearAll: "Effacer tout",
        filtersTitle: "Filtres",
        category: "Catégorie",
        level: "Niveau",
        format: "Format",
        duration: "Durée",
        levels: {
          beginner: "Débutant",
          intermediate: "Intermédiaire",
          advanced: "Avancé",
          all: "Tous niveaux",
        },
        formats: {
          presentiel: "Présentiel",
          hybride: "Hybride",
          "en-ligne": "En ligne",
        },
        durations: {
          "1": "1 jour",
          "2-3": "2-3 jours",
          "4-5": "4-5 jours",
          "5+": "Plus de 5 jours",
        },
      }
    },
    features: {
      subtitle: "Fonctionnalités",
      title: "L'écosystème d'apprentissage ultime.",
      description: "Tout ce dont vous avez besoin pour exceller dans la tech, réuni sur une seule plateforme.",
      cards: {
        ai: {
          title: "Tuteur IA 24/7",
          desc: "Obtenez des réponses instantanées, des revues de code et un accompagnement personnalisé par notre IA."
        },
        adaptive: {
          title: "Parcours Adaptatifs",
          desc: "Des curriculums qui s'adaptent en temps réel à votre vitesse et à vos objectifs."
        },
        projects: {
          title: "Projets Réels",
          desc: "Construisez un portfolio avec des cas d'usage directement tirés de l'industrie."
        },
        certifs: {
          title: "Certificats Blockchain",
          desc: "Des diplômes infalsifiables et vérifiables en un clic par les recruteurs."
        }
      }
    },
    stats: {
      title: "L'impact ZiryabTec en chiffres",
      items: {
        learners: "Apprenants actifs",
        courses: "Cours disponibles",
        rating: "Note moyenne",
        hired: "Taux d'embauche"
      }
    },
    testimonials: {
      subtitle: "Témoignages",
      title: "Ce qu'ils disent de nous"
    },
    portfolio: {
      subtitle: "Portfolio",
      title: "Nos réalisations",
      titleHighlight: "professionnelles",
      description: "Découvrez les projets innovants conçus et développés par notre équipe d'experts.",
      learnMore: "En savoir plus",
      backToPortfolio: "Retour au portfolio",
      technologies: "Technologies utilisées",
      objectives: "Objectifs du projet",
      visitSite: "Visiter le site",
      detailSubtitle: "Projet Portfolio",
    },
    pricing: {
      subtitle: "Tarifs",
      title: "Investissez dans votre avenir.",
      description: "Des plans adaptés à chaque étape de votre carrière.",
      monthly: "Mensuel",
      yearly: "Annuel (-20%)",
      plans: {
        basic: {
          name: "Essentiel",
          desc: "Parfait pour débuter dans la tech.",
          cta: "Commencer"
        },
        pro: {
          name: "Pro",
          desc: "Pour les professionnels ambitieux.",
          cta: "Devenir Pro"
        },
        elite: {
          name: "Élite",
          desc: "L'expérience d'apprentissage ultime.",
          cta: "Rejoindre l'Élite"
        }
      }
    },
    cta: {
      title: "Prêt à transformer votre carrière ?",
      subtitle: "Rejoignez la nouvelle génération d'experts tech au Maroc.",
      primaryBtn: "Créer mon compte",
      secondaryBtn: "Voir le catalogue"
    },
    footer: {
      description: "L'apprentissage tech réinventé. Pour l'Afrique, par l'Afrique.",
      links: {
        platform: {
          title: "Plateforme",
          items: ["Catalogue", "Projets", "Certificats", "Tarifs"]
        },
        company: {
          title: "Entreprise",
          items: ["À propos", "Carrières", "Blog", "Contact"]
        },
        legal: {
          title: "Légal",
          items: ["CGV", "Confidentialité", "Mentions Légales"]
        }
      },
      rights: "© 2026 ZiryabTec. Tous droits réservés."
    },
    courseDetails: {
      objectives: "Ce que vous allez apprendre",
      audience: "À qui s'adresse cette formation ?",
      prerequisites: "Pré-requis",
      curriculum: "Programme de la formation",
      sessions: {
        title: "Types de session",
        inter: { label: "Inter-entreprises", desc: "Formation avec d'autres professionnels", cta: "Demander un devis" },
        intra: { label: "Intra-entreprise", desc: "Formation privée pour votre équipe", cta: "S'inscrire" },
        surMesure: { label: "Sur Mesure", desc: "Programme personnalisé selon vos besoins", cta: "Demander un devis" }
      },
      form: {
        name: "Nom complet",
        email: "Email professionnel",
        phone: "Téléphone",
        company: "Entreprise",
        message: "Votre message (optionnel)",
        submit: "Envoyer la demande",
        success: "Votre demande a été envoyée avec succès ! Un conseiller vous contactera sous 24h."
      },
      level: { beginner: "Débutant", intermediate: "Intermédiaire", advanced: "Avancé" },
      ref: "Réf.",
      duration: "Durée",
      nextSession: "Prochaine session",
      location: "Lieu",
      priceFrom: "À partir de",
      perGroup: "/ groupe",
      instructor: "Formateur"
    },
    homeBanner: {
      title: "Vous êtes un expert dans votre domaine ?",
      subtitle: "Rejoignez notre réseau de formateurs d'élite et partagez votre savoir avec la prochaine génération de talents de la tech.",
      button: "Postuler en tant que Formateur"
    },
    devenirFormateur: {
      badge: "Rejoignez notre réseau d'experts",
      titleStart: "Devenez ",
      titleHighlight: "Formateur",
      subtitle: "Partagez votre expertise avec la prochaine génération de talents de la tech. Nous sommes toujours à la recherche de professionnels passionnés pour enrichir nos programmes d'excellence.",
      successTitle: "Candidature envoyée avec succès !",
      successDesc: "Merci pour votre intérêt. Notre équipe pédagogique étudiera votre profil avec attention et vous recontactera très prochainement.",
      section1: "Informations Personnelles",
      nameLabel: "Nom et Prénom",
      namePlaceholder: "John Doe",
      emailLabel: "Adresse Email",
      emailPlaceholder: "john@example.com",
      phoneLabel: "Téléphone",
      phonePlaceholder: "+212 6 XX XX XX XX",
      section2: "Profil Professionnel",
      domainLabel: "Domaine d'expertise",
      domainPlaceholder: "Sélectionnez votre domaine principal",
      linkedinLabel: "Lien du profil LinkedIn",
      linkedinPlaceholder: "https://linkedin.com/in/votrenom",
      section3: "Pièces jointes & Message",
      cvLabel: "CV / Dossier de candidature (PDF)",
      cvDragDrop: "Cliquez ou glissez pour modifier",
      cvClickAdd: "Cliquez pour importer votre CV",
      cvFormat: "Format PDF uniquement (Max 5MB)",
      messageLabel: "Message / Motivations",
      messagePlaceholder: "Parlez-nous de vos expériences de formation ou de vos motivations...",
      submitButton: "Soumettre ma candidature"
    }
  },
  en: {
    hero: {
      badge: "Platform of Excellence",
      titleStart: "Certified IT Training in ",
      titleHighlight: "AI, Cloud & Cybersecurity",
      titleEnd: "",
      subtitle: "Prepare for your ISTQB, AWS, Microsoft Azure certifications and more. Over 290 training sessions led by certified experts.",
      searchPlaceholder: "What do you want to learn today? (ex: Cloud, Python...)",
      searchButton: "Search",
      scroll: "Discover"
    },
    featured: {
      subtitle: "Featured Courses",
      title: "Our top training programs",
      description: "Discover our most in-demand courses, hand-picked by our experts to accelerate your career.",
      viewAll: "View full catalog",
      view: "Discover",
    },
    courses: {
      catalog: "Catalog",
      title: "Explore our courses",
      description: "Training programs created by Moroccan and international experts, updated regularly.",
      badges: {
        bestseller: "Best Seller",
        new: "New",
        ai: "AI Included"
      },
      progress: "Progress",
      view: "View",
      filters: {
        searchPlaceholder: "Search for a course...",
        allCategories: "All Categories",
        allPrices: "All Prices",
        free: "Free",
        paid: "Paid",
        noResults: "No courses match your search criteria.",
        loading: "Loading catalog...",
        clearAll: "Clear all",
        filtersTitle: "Filters",
        category: "Category",
        level: "Level",
        format: "Format",
        duration: "Duration",
        levels: {
          beginner: "Beginner",
          intermediate: "Intermediate",
          advanced: "Advanced",
          all: "All levels",
        },
        formats: {
          presentiel: "On-site",
          hybride: "Hybrid",
          "en-ligne": "Online",
        },
        durations: {
          "1": "1 day",
          "2-3": "2-3 days",
          "4-5": "4-5 days",
          "5+": "More than 5 days",
        },
      }
    },
    features: {
      subtitle: "Features",
      title: "The ultimate learning ecosystem.",
      description: "Everything you need to excel in tech, gathered on a single platform.",
      cards: {
        ai: {
          title: "24/7 AI Tutor",
          desc: "Get instant answers, code reviews, and personalized coaching from our AI."
        },
        adaptive: {
          title: "Adaptive Paths",
          desc: "Curriculums that adapt in real-time to your pace and goals."
        },
        projects: {
          title: "Real Projects",
          desc: "Build a portfolio with use cases directly pulled from the industry."
        },
        certifs: {
          title: "Blockchain Certificates",
          desc: "Tamper-proof diplomas, verifiable in one click by recruiters."
        }
      }
    },
    stats: {
      title: "ZiryabTec impact in numbers",
      items: {
        learners: "Active learners",
        courses: "Available courses",
        rating: "Average rating",
        hired: "Hiring rate"
      }
    },
    testimonials: {
      subtitle: "Testimonials",
      title: "What they say about us"
    },
    portfolio: {
      subtitle: "Portfolio",
      title: "Our",
      titleHighlight: "professional projects",
      description: "Discover the innovative projects designed and developed by our team of experts.",
      learnMore: "Learn more",
      backToPortfolio: "Back to portfolio",
      technologies: "Technologies used",
      objectives: "Project objectives",
      visitSite: "Visit website",
      detailSubtitle: "Portfolio Project",
    },
    pricing: {
      subtitle: "Pricing",
      title: "Invest in your future.",
      description: "Plans tailored to every stage of your career.",
      monthly: "Monthly",
      yearly: "Yearly (-20%)",
      plans: {
        basic: {
          name: "Essential",
          desc: "Perfect to get started in tech.",
          cta: "Get Started"
        },
        pro: {
          name: "Pro",
          desc: "For ambitious professionals.",
          cta: "Become Pro"
        },
        elite: {
          name: "Elite",
          desc: "The ultimate learning experience.",
          cta: "Join the Elite"
        }
      }
    },
    cta: {
      title: "Ready to transform your career?",
      subtitle: "Join the new generation of tech experts in Morocco.",
      primaryBtn: "Create my account",
      secondaryBtn: "View catalog"
    },
    footer: {
      description: "Tech learning reinvented. For Africa, by Africa.",
      links: {
        platform: {
          title: "Platform",
          items: ["Catalog", "Projects", "Certificates", "Pricing"]
        },
        company: {
          title: "Company",
          items: ["About", "Careers", "Blog", "Contact"]
        },
        legal: {
          title: "Legal",
          items: ["T&C", "Privacy", "Legal Notice"]
        }
      },
      rights: "© 2026 ZiryabTec. All rights reserved."
    },
    courseDetails: {
      objectives: "What you will learn",
      audience: "Who is this course for?",
      prerequisites: "Prerequisites",
      curriculum: "Course Curriculum",
      sessions: {
        title: "Session Types",
        inter: { label: "Inter-company", desc: "Training with other professionals", cta: "Request a quote" },
        intra: { label: "Intra-company", desc: "Private training for your team", cta: "Enroll" },
        surMesure: { label: "Customized", desc: "Customized program according to your needs", cta: "Request a quote" }
      },
      form: {
        name: "Full Name",
        email: "Professional Email",
        phone: "Phone",
        company: "Company",
        message: "Your message (optional)",
        submit: "Submit Request",
        success: "Your request has been sent successfully! An advisor will contact you within 24h."
      },
      level: { beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced" },
      ref: "Ref.",
      duration: "Duration",
      nextSession: "Next session",
      location: "Location",
      priceFrom: "From",
      perGroup: "/ group",
      instructor: "Instructor"
    },
    homeBanner: {
      title: "Are you an expert in your field?",
      subtitle: "Join our network of elite instructors and share your knowledge with the next generation of tech talent.",
      button: "Apply as an Instructor"
    },
    devenirFormateur: {
      badge: "Join our network of experts",
      titleStart: "Become an ",
      titleHighlight: "Instructor",
      subtitle: "Share your expertise with the next generation of tech talent. We are always looking for passionate professionals to enrich our excellence programs.",
      successTitle: "Application sent successfully!",
      successDesc: "Thank you for your interest. Our educational team will carefully review your profile and contact you very soon.",
      section1: "Personal Information",
      nameLabel: "Full Name",
      namePlaceholder: "John Doe",
      emailLabel: "Email Address",
      emailPlaceholder: "john@example.com",
      phoneLabel: "Phone Number",
      phonePlaceholder: "+212 6 XX XX XX XX",
      section2: "Professional Profile",
      domainLabel: "Area of Expertise",
      domainPlaceholder: "Select your main area of expertise",
      linkedinLabel: "LinkedIn Profile URL",
      linkedinPlaceholder: "https://linkedin.com/in/yourname",
      section3: "Attachments & Message",
      cvLabel: "Resume / Application File (PDF)",
      cvDragDrop: "Click or drag to modify",
      cvClickAdd: "Click to upload your resume",
      cvFormat: "PDF format only (Max 5MB)",
      messageLabel: "Message / Motivations",
      messagePlaceholder: "Tell us about your training experience or your motivations...",
      submitButton: "Submit my application"
    }
  }
};

/* ══════════════════════════════════════════════════════════
   TRANSLATED COURSES — with taxonomy fields
   Hierarchy: Theme → Category → Formation
   ══════════════════════════════════════════════════════════ */
export const translatedCourses: TranslatedCourse[] = [
  {
    "id": "CP-TH",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.7,
    "students": 569,
    "duration": "2J",
    "durationDays": 2,
    "price": 2800,
    "featured": true,
    "badge": "new",
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "beginner",
    "format": "en-ligne",
    "fr": {
      "title": "Cours préparatoire aux techniques de hacking",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Cours préparatoire aux techniques de hacking",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "TH-N1",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.9,
    "students": 688,
    "duration": "5J",
    "durationDays": 5,
    "price": 4800,
    "featured": true,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "beginner",
    "format": "presentiel",
    "fr": {
      "title": "Techniques de hacking - Niveau 1",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Techniques de hacking - Niveau 1",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "TH-N2",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.9,
    "students": 688,
    "duration": "5J",
    "durationDays": 5,
    "price": 5900,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "advanced",
    "format": "presentiel",
    "fr": {
      "title": "Techniques de hacking - Niveau 2",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Techniques de hacking - Niveau 2",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "PYT-TI",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.5,
    "students": 660,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3990,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Python pour tests d'intrusion",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Python pour tests d'intrusion",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "OSINT-N1",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.9,
    "students": 653,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3800,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "beginner",
    "format": "presentiel",
    "fr": {
      "title": "OSINT - Investigation en source ouverte - Niveau 1",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "OSINT - Investigation en source ouverte - Niveau 1",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "OSINT-N2",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.9,
    "students": 653,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3990,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "advanced",
    "format": "hybride",
    "fr": {
      "title": "OSINT - Investigation en source ouverte - Niveau 2",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "OSINT - Investigation en source ouverte - Niveau 2",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "ATT-WIFI",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.5,
    "students": 555,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 4500,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Attaque défense Wi-Fi",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Attaque défense Wi-Fi",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "DEF-WEB",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.8,
    "students": 576,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3800,
    "badge": "new",
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "en-ligne",
    "fr": {
      "title": "Techniques défensives et offensives des applications Web",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Techniques défensives et offensives des applications Web",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "CTI-N1",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.7,
    "students": 569,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 4500,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "beginner",
    "format": "presentiel",
    "fr": {
      "title": "Cyber Threat Intelligence - Niveau 1",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Cyber Threat Intelligence - Niveau 1",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "CTI-N2",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.7,
    "students": 569,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3500,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "advanced",
    "format": "presentiel",
    "fr": {
      "title": "Cyber Threat Intelligence - Niveau 2",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Cyber Threat Intelligence - Niveau 2",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "INV-CF",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.8,
    "students": 611,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3800,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "hybride",
    "fr": {
      "title": "Investigation numérique (Computer Forensics)",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Investigation numérique (Computer Forensics)",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "INV-NET",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.8,
    "students": 611,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 4200,
    "badge": "bestseller",
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Investigation numérique des réseaux",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Investigation numérique des réseaux",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "INV-WIN",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.8,
    "students": 611,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3990,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Investigation numérique Windows (Computer Forensics)",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Investigation numérique Windows (Computer Forensics)",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "INV-LNX",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.8,
    "students": 611,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3800,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Investigation numérique Linux (Computer Forensics)",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Investigation numérique Linux (Computer Forensics)",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "MAL-F",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.7,
    "students": 639,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 4200,
    "badge": "new",
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "beginner",
    "format": "en-ligne",
    "fr": {
      "title": "Analyse de Malwares - Les fondamentaux",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Analyse de Malwares - Les fondamentaux",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "MAL-ADV",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.7,
    "students": 639,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3500,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "advanced",
    "format": "hybride",
    "fr": {
      "title": "Analyse de Malwares - Niveau avancé",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Analyse de Malwares - Niveau avancé",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "SEC-SRV",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.8,
    "students": 681,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3990,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Sécurité des systèmes et services réseaux",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Sécurité des systèmes et services réseaux",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "SEC-WIN",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.8,
    "students": 681,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3500,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Sécurité du poste client Windows",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Sécurité du poste client Windows",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "SEC-AD",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.8,
    "students": 681,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3500,
    "featured": true,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Sécurité de l'Active Directory",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Sécurité de l'Active Directory",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "DUR-LNX",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.8,
    "students": 576,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3500,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1562813733-b31f71025d54?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Durcissement sécurité Linux",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Durcissement sécurité Linux",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "DSECOPS",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.8,
    "students": 576,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3800,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "hybride",
    "fr": {
      "title": "DevSecOps Foundation",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "DevSecOps Foundation",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "SEC-PHP",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.8,
    "students": 681,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 4500,
    "badge": "new",
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "en-ligne",
    "fr": {
      "title": "Sécurité applicative avec PHP",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Sécurité applicative avec PHP",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "SEC-API",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.8,
    "students": 681,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3500,
    "badge": "bestseller",
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "REST API - Bonnes pratiques et sécurité",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "REST API - Bonnes pratiques et sécurité",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "SEC-JVA",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.8,
    "students": 681,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3800,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Sécurité applicative Java",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Sécurité applicative Java",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "SEC-NET",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.8,
    "students": 681,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3990,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "C# - Sécurité applicative avec .NET",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "C# - Sécurité applicative avec .NET",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "SEC-DES",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.8,
    "students": 681,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3800,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "hybride",
    "fr": {
      "title": "Sécurité applicative - Intégrer la sécurité dès la conception (Secure by Design)",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Sécurité applicative - Intégrer la sécurité dès la conception (Secure by Design)",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "SEC-JS",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.8,
    "students": 681,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 4500,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "La sécurité du développement Web avec JavaScript",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "La sécurité du développement Web avec JavaScript",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "SOC-PCR",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.8,
    "students": 681,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 4200,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Parcours Analyste SOC (Security Operation Center)",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Parcours Analyste SOC (Security Operation Center)",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "SOC-ANA",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.8,
    "students": 681,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3500,
    "badge": "new",
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "en-ligne",
    "fr": {
      "title": "Analyse SOC (Security Operation Center)",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Analyse SOC (Security Operation Center)",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "SEC-SRV2",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.8,
    "students": 681,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3990,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Sécurité des systèmes et services réseaux",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Sécurité des systèmes et services réseaux",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "IPS-IDS",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.8,
    "students": 611,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3990,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "hybride",
    "fr": {
      "title": "Systèmes de prévention (IPS) et détection (IDS) d'intrusion",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Systèmes de prévention (IPS) et détection (IDS) d'intrusion",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "IAM-SEC",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.8,
    "students": 611,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3800,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Gestion des identités et sécurité des accès",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Gestion des identités et sécurité des accès",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "FW-ARCH",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.5,
    "students": 590,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 4200,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Firewall - Architecture et déploiement",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Firewall - Architecture et déploiement",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "VPN-MO",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.6,
    "students": 702,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3990,
    "badge": "bestseller",
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "VPN - Mise en oeuvre",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "VPN - Mise en oeuvre",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "PKI-MO",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.5,
    "students": 660,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3800,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "PKI - Mise en oeuvre",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "PKI - Mise en oeuvre",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "SCADA",
    "themeId": "Cybersécurité",
    "categoryId": "Sécurité offensive",
    "rating": 4.8,
    "students": 681,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 4200,
    "badge": "new",
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "en-ligne",
    "fr": {
      "title": "Cybersécurité des systèmes industriels (SCADA)",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Cybersécurité des systèmes industriels (SCADA)",
      "category": "Sécurité offensive",
      "theme": "Cybersécurité",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "CLD-ARCH",
    "themeId": "Cloud",
    "categoryId": "Cloud Computing",
    "rating": 4.7,
    "students": 569,
    "duration": "2J",
    "durationDays": 2,
    "price": 3500,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Architectures Cloud d'entreprise",
      "category": "Cloud Computing",
      "theme": "Cloud",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Architectures Cloud d'entreprise",
      "category": "Cloud Computing",
      "theme": "Cloud",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "CLD-SYN",
    "themeId": "Cloud",
    "categoryId": "Cloud Computing",
    "rating": 4.7,
    "students": 569,
    "duration": "5J",
    "durationDays": 5,
    "price": 5200,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Cloud - La synthèse",
      "category": "Cloud Computing",
      "theme": "Cloud",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Cloud - La synthèse",
      "category": "Cloud Computing",
      "theme": "Cloud",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "CLD-SEC",
    "themeId": "Cloud",
    "categoryId": "Cloud Computing",
    "rating": 4.7,
    "students": 569,
    "duration": "5J",
    "durationDays": 5,
    "price": 4990,
    "featured": true,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Sécurité du Cloud Computing",
      "category": "Cloud Computing",
      "theme": "Cloud",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Sécurité du Cloud Computing",
      "category": "Cloud Computing",
      "theme": "Cloud",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "O365-ADM",
    "themeId": "Cloud",
    "categoryId": "Cloud Computing",
    "rating": 4.9,
    "students": 653,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3500,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Activer et administrer Office 365",
      "category": "Cloud Computing",
      "theme": "Cloud",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Activer et administrer Office 365",
      "category": "Cloud Computing",
      "theme": "Cloud",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "O365-GST",
    "themeId": "Cloud",
    "categoryId": "Cloud Computing",
    "rating": 4.9,
    "students": 653,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3990,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "hybride",
    "fr": {
      "title": "Office 365 - Gestionnaire",
      "category": "Cloud Computing",
      "theme": "Cloud",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Office 365 - Gestionnaire",
      "category": "Cloud Computing",
      "theme": "Cloud",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "O365-USR",
    "themeId": "Cloud",
    "categoryId": "Cloud Computing",
    "rating": 4.9,
    "students": 653,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3500,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Office 365 - Utilisateur",
      "category": "Cloud Computing",
      "theme": "Cloud",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Office 365 - Utilisateur",
      "category": "Cloud Computing",
      "theme": "Cloud",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "SHL-ADV",
    "themeId": "Système",
    "categoryId": "Développement Unix Linux",
    "rating": 4.8,
    "students": 681,
    "duration": "2J",
    "durationDays": 2,
    "price": 2990,
    "badge": "new",
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "advanced",
    "format": "en-ligne",
    "fr": {
      "title": "Écriture de scripts Shell avancés",
      "category": "Développement Unix Linux",
      "theme": "Système",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Écriture de scripts Shell avancés",
      "category": "Développement Unix Linux",
      "theme": "Système",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "PERL-SCR",
    "themeId": "Système",
    "categoryId": "Développement Unix Linux",
    "rating": 4.5,
    "students": 660,
    "duration": "5J",
    "durationDays": 5,
    "price": 5900,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Écriture de scripts avec le langage PERL",
      "category": "Développement Unix Linux",
      "theme": "Système",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Écriture de scripts avec le langage PERL",
      "category": "Développement Unix Linux",
      "theme": "Système",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "PYT-DEV",
    "themeId": "Système",
    "categoryId": "Développement Unix Linux",
    "rating": 4.5,
    "students": 660,
    "duration": "5J",
    "durationDays": 5,
    "price": 5200,
    "featured": true,
    "badge": "bestseller",
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Développer avec Python",
      "category": "Développement Unix Linux",
      "theme": "Système",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Développer avec Python",
      "category": "Développement Unix Linux",
      "theme": "Système",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "UNX-SCR",
    "themeId": "Système",
    "categoryId": "Développement Unix Linux",
    "rating": 4.5,
    "students": 695,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 4200,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "hybride",
    "fr": {
      "title": "Scripting sous Unix/Linux",
      "category": "Développement Unix Linux",
      "theme": "Système",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Scripting sous Unix/Linux",
      "category": "Développement Unix Linux",
      "theme": "Système",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "DRV-LNX",
    "themeId": "Système",
    "categoryId": "Développement Unix Linux",
    "rating": 4.8,
    "students": 576,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 4200,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Écriture de drivers et programmation noyau Linux",
      "category": "Développement Unix Linux",
      "theme": "Système",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Écriture de drivers et programmation noyau Linux",
      "category": "Développement Unix Linux",
      "theme": "Système",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "LNX-RT",
    "themeId": "Système",
    "categoryId": "Développement Unix Linux",
    "rating": 4.6,
    "students": 632,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 4200,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Mettre en oeuvre des systèmes temps réel avec Linux",
      "category": "Développement Unix Linux",
      "theme": "Système",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Mettre en oeuvre des systèmes temps réel avec Linux",
      "category": "Développement Unix Linux",
      "theme": "Système",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "LNX-EMB",
    "themeId": "Système",
    "categoryId": "Développement Unix Linux",
    "rating": 4.6,
    "students": 632,
    "duration": "2J",
    "durationDays": 2,
    "price": 3100,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Concevoir un système Linux embarqué",
      "category": "Développement Unix Linux",
      "theme": "Système",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Concevoir un système Linux embarqué",
      "category": "Développement Unix Linux",
      "theme": "Système",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "VIRT-SEM",
    "themeId": "Système",
    "categoryId": "Virtualisation",
    "rating": 4.6,
    "students": 702,
    "duration": "2J",
    "durationDays": 2,
    "price": 3100,
    "badge": "new",
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "en-ligne",
    "fr": {
      "title": "Etat de l'art de la virtualisation",
      "category": "Virtualisation",
      "theme": "Système",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Etat de l'art de la virtualisation",
      "category": "Virtualisation",
      "theme": "Système",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "VIRT-PRJ",
    "themeId": "Système",
    "categoryId": "Virtualisation",
    "rating": 4.6,
    "students": 702,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 4500,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "hybride",
    "fr": {
      "title": "Approche et réussite d'un projet de virtualisation",
      "category": "Virtualisation",
      "theme": "Système",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Approche et réussite d'un projet de virtualisation",
      "category": "Virtualisation",
      "theme": "Système",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "WIN-SUP",
    "themeId": "Système",
    "categoryId": "Windows et System Center",
    "rating": 4.7,
    "students": 709,
    "duration": "2J",
    "durationDays": 2,
    "price": 3200,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Certified Cursus Spécialiste du support technique",
      "category": "Windows et System Center",
      "theme": "Système",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Certified Cursus Spécialiste du support technique",
      "category": "Windows et System Center",
      "theme": "Système",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "WIN-OCS",
    "themeId": "Système",
    "categoryId": "Windows et System Center",
    "rating": 4.7,
    "students": 709,
    "duration": "5J",
    "durationDays": 5,
    "price": 5500,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Gestion de Parc avec OCS et GLP",
      "category": "Windows et System Center",
      "theme": "Système",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Gestion de Parc avec OCS et GLP",
      "category": "Windows et System Center",
      "theme": "Système",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "WIN-LOG",
    "themeId": "Système",
    "categoryId": "Windows et System Center",
    "rating": 4.7,
    "students": 709,
    "duration": "5J",
    "durationDays": 5,
    "price": 5900,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Assurer le support PC logiciel",
      "category": "Windows et System Center",
      "theme": "Système",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Assurer le support PC logiciel",
      "category": "Windows et System Center",
      "theme": "Système",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "WIN-CST",
    "themeId": "Système",
    "categoryId": "Windows et System Center",
    "rating": 4.7,
    "students": 709,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3500,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Cursus Spécialiste du support technique",
      "category": "Windows et System Center",
      "theme": "Système",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Cursus Spécialiste du support technique",
      "category": "Windows et System Center",
      "theme": "Système",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "WIN-MAT",
    "themeId": "Système",
    "categoryId": "Windows et System Center",
    "rating": 4.7,
    "students": 709,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3800,
    "badge": "bestseller",
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "hybride",
    "fr": {
      "title": "Assurer le support PC matériel",
      "category": "Windows et System Center",
      "theme": "Système",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Assurer le support PC matériel",
      "category": "Windows et System Center",
      "theme": "Système",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "WIN-HTL",
    "themeId": "Système",
    "categoryId": "Windows et System Center",
    "rating": 4.7,
    "students": 709,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3990,
    "badge": "new",
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "en-ligne",
    "fr": {
      "title": "Hotliners : réussir ses prises d'appels",
      "category": "Windows et System Center",
      "theme": "Système",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Hotliners : réussir ses prises d'appels",
      "category": "Windows et System Center",
      "theme": "Système",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "MAC-ADM",
    "themeId": "Système",
    "categoryId": "MacOs",
    "rating": 4.7,
    "students": 639,
    "duration": "2J",
    "durationDays": 2,
    "price": 3100,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Cursus Administrateur macOS Sierra",
      "category": "MacOs",
      "theme": "Système",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Cursus Administrateur macOS Sierra",
      "category": "MacOs",
      "theme": "Système",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "MAC-SRV",
    "themeId": "Système",
    "categoryId": "MacOs",
    "rating": 4.7,
    "students": 639,
    "duration": "5J",
    "durationDays": 5,
    "price": 4990,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Administration de macOS Sierra",
      "category": "MacOs",
      "theme": "Système",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Administration de macOS Sierra",
      "category": "MacOs",
      "theme": "Système",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "MAC-USR",
    "themeId": "Système",
    "categoryId": "MacOs",
    "rating": 4.7,
    "students": 639,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3800,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "beginner",
    "format": "presentiel",
    "fr": {
      "title": "Prise en main de macOS Sierra",
      "category": "MacOs",
      "theme": "Système",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Prise en main de macOS Sierra",
      "category": "MacOs",
      "theme": "Système",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "MAC-SRV2",
    "themeId": "Système",
    "categoryId": "MacOs",
    "rating": 4.7,
    "students": 639,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3990,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "hybride",
    "fr": {
      "title": "Administration de serveurs macOS Sierra",
      "category": "MacOs",
      "theme": "Système",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Administration de serveurs macOS Sierra",
      "category": "MacOs",
      "theme": "Système",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "NET-ADM",
    "themeId": "Réseaux",
    "categoryId": "Formation Mise en Oeuvre",
    "rating": 4.8,
    "students": 646,
    "duration": "2J",
    "durationDays": 2,
    "price": 3200,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Cursus Administrateur réseaux",
      "category": "Formation Mise en Oeuvre",
      "theme": "Réseaux",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Cursus Administrateur réseaux",
      "category": "Formation Mise en Oeuvre",
      "theme": "Réseaux",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "NET-RSP",
    "themeId": "Réseaux",
    "categoryId": "Formation Mise en Oeuvre",
    "rating": 4.8,
    "students": 646,
    "duration": "5J",
    "durationDays": 5,
    "price": 5200,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Cursus Responsable réseaux",
      "category": "Formation Mise en Oeuvre",
      "theme": "Réseaux",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Cursus Responsable réseaux",
      "category": "Formation Mise en Oeuvre",
      "theme": "Réseaux",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "NET-PRK",
    "themeId": "Réseaux",
    "categoryId": "Formation Mise en Oeuvre",
    "rating": 4.8,
    "students": 646,
    "duration": "5J",
    "durationDays": 5,
    "price": 4800,
    "badge": "new",
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "en-ligne",
    "fr": {
      "title": "Pratique des réseaux",
      "category": "Formation Mise en Oeuvre",
      "theme": "Réseaux",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Pratique des réseaux",
      "category": "Formation Mise en Oeuvre",
      "theme": "Réseaux",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "NET-SEC",
    "themeId": "Réseaux",
    "categoryId": "Formation Mise en Oeuvre",
    "rating": 4.8,
    "students": 646,
    "duration": "2J",
    "durationDays": 2,
    "price": 2990,
    "featured": true,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Sécurité systèmes et réseaux - Mise en oeuvre",
      "category": "Formation Mise en Oeuvre",
      "theme": "Réseaux",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Sécurité systèmes et réseaux - Mise en oeuvre",
      "category": "Formation Mise en Oeuvre",
      "theme": "Réseaux",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "IPV6-MO",
    "themeId": "Réseaux",
    "categoryId": "Formation Mise en Oeuvre",
    "rating": 4.8,
    "students": 611,
    "duration": "5J",
    "durationDays": 5,
    "price": 5900,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "hybride",
    "fr": {
      "title": "Mettre en oeuvre IPv6",
      "category": "Formation Mise en Oeuvre",
      "theme": "Réseaux",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Mettre en oeuvre IPv6",
      "category": "Formation Mise en Oeuvre",
      "theme": "Réseaux",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "WIFI-MOB",
    "themeId": "Réseaux",
    "categoryId": "Formation Mise en Oeuvre",
    "rating": 4.7,
    "students": 709,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3990,
    "badge": "bestseller",
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "La technologie sans-fil WiFi et mobilité",
      "category": "Formation Mise en Oeuvre",
      "theme": "Réseaux",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "La technologie sans-fil WiFi et mobilité",
      "category": "Formation Mise en Oeuvre",
      "theme": "Réseaux",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "NET-INT",
    "themeId": "Réseaux",
    "categoryId": "Formation Mise en Oeuvre",
    "rating": 4.8,
    "students": 646,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 4500,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "beginner",
    "format": "presentiel",
    "fr": {
      "title": "Introduction technique aux réseaux",
      "category": "Formation Mise en Oeuvre",
      "theme": "Réseaux",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Introduction technique aux réseaux",
      "category": "Formation Mise en Oeuvre",
      "theme": "Réseaux",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "NET-AUD",
    "themeId": "Réseaux",
    "categoryId": "Formation Mise en Oeuvre",
    "rating": 4.8,
    "students": 646,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3800,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Auditez et optimisez votre réseau",
      "category": "Formation Mise en Oeuvre",
      "theme": "Réseaux",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Auditez et optimisez votre réseau",
      "category": "Formation Mise en Oeuvre",
      "theme": "Réseaux",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "TCP-IP",
    "themeId": "Réseaux",
    "categoryId": "Formation Mise en Oeuvre",
    "rating": 4.9,
    "students": 688,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3800,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Soyez autonome avec TCP/IP",
      "category": "Formation Mise en Oeuvre",
      "theme": "Réseaux",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Soyez autonome avec TCP/IP",
      "category": "Formation Mise en Oeuvre",
      "theme": "Réseaux",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "NET-OUT",
    "themeId": "Réseaux",
    "categoryId": "Formation Mise en Oeuvre",
    "rating": 4.8,
    "students": 646,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 3800,
    "badge": "new",
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "en-ligne",
    "fr": {
      "title": "Solutions et outils d'administration réseaux",
      "category": "Formation Mise en Oeuvre",
      "theme": "Réseaux",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Solutions et outils d'administration réseaux",
      "category": "Formation Mise en Oeuvre",
      "theme": "Réseaux",
      "instructor": "ZiryabTec Expert"
    }
  },
  {
    "id": "IA-PYT",
    "themeId": "IA",
    "categoryId": "Intelligence Artificielle",
    "rating": 4.8,
    "students": 611,
    "duration": "Sur mesure",
    "durationDays": 2,
    "price": 4500,
    "color": "from-blue-600/20 to-cyan-600/20",
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600&h=400",
    "level": "all",
    "format": "presentiel",
    "fr": {
      "title": "Python Pour Data Science",
      "category": "Intelligence Artificielle",
      "theme": "IA",
      "instructor": "Expert ZiryabTec"
    },
    "en": {
      "title": "Python Pour Data Science",
      "category": "Intelligence Artificielle",
      "theme": "IA",
      "instructor": "ZiryabTec Expert"
    }
  }
];
