import { formationsData, Formation } from "../data/formations";

export interface DomainStat {
  theme: string;
  count: number;
  categories: string[];
}

export const getCatalogStats = () => {
  const totalFormations = formationsData.length;
  
  const domainMap = new Map<string, DomainStat>();
  const categorySet = new Set<string>();

  formationsData.forEach(f => {
    categorySet.add(f.categorie);
    
    if (!domainMap.has(f.theme)) {
      domainMap.set(f.theme, { theme: f.theme, count: 0, categories: [] });
    }
    
    const stat = domainMap.get(f.theme)!;
    stat.count++;
    if (!stat.categories.includes(f.categorie)) {
      stat.categories.push(f.categorie);
    }
  });

  return {
    totalFormations,
    totalDomains: domainMap.size,
    categoryCount: categorySet.size,
    domainStats: Array.from(domainMap.values()),
  };
};

export const getDomainStats = (theme: string): DomainStat | undefined => {
  return getCatalogStats().domainStats.find(d => d.theme === theme);
};
