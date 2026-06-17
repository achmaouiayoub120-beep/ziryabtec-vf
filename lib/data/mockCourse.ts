import { Course } from "./types";
import { formationsData } from "./formations";

// Construit un détail de cours dynamique à partir des données réelles
export const getCourseById = (id: string): Course => {
  const f = formationsData.find(f => f.reference === id) || formationsData[0];
  
  // Génération de contenu dynamique basé sur le thème
  let objectives: string[] = [];
  let curriculum: any[] = [];
  
  if (f.theme === "Cybersécurité") {
    objectives = [
      "Maîtriser les techniques d'attaque et de défense de l'état de l'art",
      "Sécuriser efficacement les infrastructures critiques et les applications",
      "Mener des audits de sécurité et des tests d'intrusion professionnels",
      "Gérer les incidents de sécurité et anticiper les menaces avancées",
      "Comprendre le cadre légal et les normes de cybersécurité"
    ];
    curriculum = [
      {
        title: "Fondamentaux et Analyse de Vulnérabilités",
        lessons: [
          { title: "Cartographie et reconnaissance", duration: "2h", type: "video" },
          { title: "Identification des failles (CVE)", duration: "3h", type: "document" }
        ]
      },
      {
        title: "Exploitation et Post-Exploitation",
        lessons: [
          { title: "Techniques d'intrusion système", duration: "4h", type: "video" },
          { title: "Maintien de l'accès et élévation de privilèges", duration: "3h", type: "document" }
        ]
      }
    ];
  } else if (f.theme === "Cloud") {
    objectives = [
      "Concevoir des architectures Cloud scalables et résilientes",
      "Déployer des infrastructures as Code (IaC)",
      "Migrer des applications legacy vers le Cloud en toute sécurité",
      "Optimiser les coûts (FinOps) et les performances",
      "Mettre en place une chaîne CI/CD cloud-native"
    ];
    curriculum = [
      {
        title: "Architecture et Services Cloud",
        lessons: [
          { title: "Modèles IaaS, PaaS, SaaS", duration: "2h", type: "video" },
          { title: "Déploiement des services de calcul et stockage", duration: "3h", type: "document" }
        ]
      },
      {
        title: "Sécurité et Automatisation",
        lessons: [
          { title: "Gestion des identités (IAM) et réseau", duration: "4h", type: "video" },
          { title: "Terraform et automatisation", duration: "3h", type: "document" }
        ]
      }
    ];
  } else if (f.theme === "Système") {
    objectives = [
      "Administrer et configurer des environnements serveurs complexes",
      "Automatiser les tâches d'administration avec des scripts avancés",
      "Gérer la virtualisation et la conteneurisation des services",
      "Mettre en œuvre des politiques de sauvegarde et de restauration",
      "Optimiser les performances du système d'exploitation"
    ];
    curriculum = [
      {
        title: "Administration Avancée",
        lessons: [
          { title: "Gestion du noyau et des services", duration: "2h", type: "video" },
          { title: "Sécurisation et durcissement système", duration: "3h", type: "document" }
        ]
      },
      {
        title: "Scripting et Virtualisation",
        lessons: [
          { title: "Automatisation Bash / Python / PowerShell", duration: "4h", type: "video" },
          { title: "Hyperviseurs et gestion des VM", duration: "3h", type: "document" }
        ]
      }
    ];
  } else if (f.theme === "IA") {
    objectives = [
      "Comprendre les algorithmes de Machine Learning et Deep Learning",
      "Développer des modèles prédictifs avec Python (Scikit-Learn, TensorFlow)",
      "Traiter de grandes bases de données pour l'analyse (Data Science)",
      "Intégrer l'IA dans des applications de production",
      "Évaluer et optimiser la précision des modèles d'intelligence artificielle"
    ];
    curriculum = [
      {
        title: "Data Science et Machine Learning",
        lessons: [
          { title: "Préparation et nettoyage des données", duration: "2h", type: "video" },
          { title: "Algorithmes d'apprentissage supervisé", duration: "3h", type: "document" }
        ]
      },
      {
        title: "Deep Learning et Déploiement",
        lessons: [
          { title: "Réseaux de neurones artificiels", duration: "4h", type: "video" },
          { title: "Mise en production des modèles (MLOps)", duration: "3h", type: "document" }
        ]
      }
    ];
  } else {
    // Fallback générique (Réseaux ou autre)
    objectives = [
      "Comprendre les enjeux et les fondamentaux liés à la thématique " + f.theme,
      "Maîtriser l'architecture et les protocoles standards de l'industrie",
      "Mettre en pratique les concepts théoriques sur des cas réels en laboratoire",
      "Diagnostiquer et résoudre les incidents techniques courants",
      "Valider les compétences requises pour la certification professionnelle"
    ];
    curriculum = [
      {
        title: "Introduction et fondamentaux technologiques",
        lessons: [
          { title: "Présentation des concepts clés et architecture", duration: "2h", type: "video" },
          { title: "Mise en place de l'environnement d'apprentissage", duration: "2h", type: "document" }
        ]
      },
      {
        title: "Approfondissement et ateliers pratiques",
        lessons: [
          { title: "Cas d'usage et scénarios d'entreprise", duration: "4h", type: "video" },
          { title: "Ateliers pratiques et résolution de problèmes", duration: "4h", type: "document" }
        ]
      }
    ];
  }

  // Ajout du nom de la formation spécifique dans un des objectifs pour le rendre encore plus unique
  objectives[0] = `Maîtriser les compétences clés du cursus : ${f.titre}`;

  return {
    id: f.reference,
    ref: f.reference,
    coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    logoImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    rating: 4.8,
    reviewCount: 50 + (f.reference.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 500),
    duration: f.duree,
    level: "intermediate",
    sessions: {
      surMesure: true
    },
    fr: {
      title: f.titre,
      subtitle: "Formation professionnelle spécialisée dispensée par les experts ZiryabTec.",
      category: f.categorie,
      theme: f.theme,
      instructor: "Expert ZiryabTec",
      objectives: objectives,
      audience: "Professionnels de l'IT, Ingénieurs, Administrateurs et toute personne souhaitant devenir expert en " + f.theme,
      prerequisites: [
        "Bases solides en informatique générale",
        "Connaissances préalables recommandées en " + f.theme,
        "Motivation et forte curiosité technique"
      ],
      curriculum: curriculum
    },
    en: {
      title: f.titre,
      subtitle: "Specialized professional training provided by ZiryabTec experts.",
      category: f.categorie,
      theme: f.theme,
      instructor: "ZiryabTec Expert",
      objectives: objectives,
      audience: "IT Professionals, Engineers, Administrators and anyone wanting to become an expert in " + f.theme,
      prerequisites: [
        "Solid foundations in general IT",
        "Prior knowledge recommended in " + f.theme,
        "Motivation and strong technical curiosity"
      ],
      curriculum: curriculum
    }
  };
};

export const mockCourse = getCourseById("CP-TH");
