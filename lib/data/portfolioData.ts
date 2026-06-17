import { PortfolioProject } from "./types";

/* ══════════════════════════════════════════════════════════
   PORTFOLIO DATA — 3 projets professionnels (bilingue)
   ══════════════════════════════════════════════════════════ */

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "ztec-erp",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "REST API", "Tailwind CSS"],
    url: "https://ztec-erp.com",
    fr: {
      title: "ztec-erp.com",
      tagline: "Système ERP d'entreprise sur mesure",
      category: "ERP & Gestion d'entreprise",
      description:
        "Solution ERP complète et modulaire conçue pour digitaliser et optimiser les processus métier des PME marocaines. La plateforme centralise la gestion des ressources humaines, la comptabilité, la gestion des stocks et la facturation dans une interface unifiée, intuitive et sécurisée. Développée avec une architecture microservices pour garantir scalabilité et performance.",
      objectives: [
        "Centraliser l'ensemble des opérations métier dans une plateforme unique",
        "Automatiser les workflows de facturation et de gestion des stocks",
        "Fournir des tableaux de bord analytiques en temps réel pour la prise de décision",
        "Assurer la conformité aux normes comptables et fiscales marocaines",
        "Garantir la sécurité des données avec un système de permissions granulaire",
      ],
    },
    en: {
      title: "ztec-erp.com",
      tagline: "Custom enterprise ERP system",
      category: "ERP & Business Management",
      description:
        "A comprehensive, modular ERP solution designed to digitize and optimize business processes for Moroccan SMBs. The platform centralizes human resources management, accounting, inventory management, and invoicing in a unified, intuitive, and secure interface. Built on a microservices architecture to ensure scalability and performance.",
      objectives: [
        "Centralize all business operations in a single platform",
        "Automate invoicing and inventory management workflows",
        "Provide real-time analytical dashboards for decision-making",
        "Ensure compliance with Moroccan accounting and tax standards",
        "Guarantee data security with a granular permissions system",
      ],
    },
  },
  {
    slug: "retailink",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    technologies: ["Next.js", "TypeScript", "Prisma", "AWS", "Stripe", "GraphQL"],
    fr: {
      title: "Retailink",
      tagline: "Plateforme de liaison pour le commerce de détail",
      category: "Marketplace & E-Commerce",
      description:
        "Plateforme B2B innovante qui connecte les fournisseurs et les détaillants au sein d'un écosystème numérique unifié. Retailink simplifie la chaîne d'approvisionnement en automatisant les commandes, le suivi des livraisons et la gestion des relations commerciales. L'intelligence artificielle intégrée optimise les recommandations de produits et la prévision de la demande.",
      objectives: [
        "Connecter fournisseurs et détaillants via une marketplace B2B performante",
        "Automatiser la gestion des commandes et le suivi logistique en temps réel",
        "Intégrer un système de recommandation IA pour optimiser les achats",
        "Offrir un tableau de bord analytique pour le suivi des ventes et des tendances",
        "Faciliter les paiements sécurisés entre partenaires commerciaux",
      ],
    },
    en: {
      title: "Retailink",
      tagline: "Retail liaison platform",
      category: "Marketplace & E-Commerce",
      description:
        "An innovative B2B platform connecting suppliers and retailers within a unified digital ecosystem. Retailink simplifies the supply chain by automating orders, delivery tracking, and business relationship management. Integrated artificial intelligence optimizes product recommendations and demand forecasting.",
      objectives: [
        "Connect suppliers and retailers through a high-performance B2B marketplace",
        "Automate order management and real-time logistics tracking",
        "Integrate an AI recommendation system to optimize purchases",
        "Provide an analytical dashboard for sales and trend monitoring",
        "Facilitate secure payments between business partners",
      ],
    },
  },
  {
    slug: "coachprolink",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    technologies: ["React", "Firebase", "Node.js", "WebRTC", "Tailwind CSS", "Stripe"],
    fr: {
      title: "Coachprolink",
      tagline: "Plateforme de mise en relation pour le coaching professionnel",
      category: "Coaching & Développement personnel",
      description:
        "Plateforme SaaS de mise en relation entre coachs certifiés et professionnels en quête de développement de compétences. Coachprolink offre un système de matching intelligent basé sur les objectifs, le secteur d'activité et les disponibilités. La plateforme intègre un système de visioconférence, de planification de sessions, de suivi de progression et de paiement sécurisé.",
      objectives: [
        "Faciliter la mise en relation entre coachs et professionnels via un algorithme de matching",
        "Intégrer un système de visioconférence pour les sessions de coaching à distance",
        "Automatiser la planification, les rappels et le suivi des sessions",
        "Fournir des outils de suivi de progression et de feedback structuré",
        "Sécuriser les transactions financières avec un système de paiement intégré",
      ],
    },
    en: {
      title: "Coachprolink",
      tagline: "Professional coaching matchmaking platform",
      category: "Coaching & Personal Development",
      description:
        "A SaaS matchmaking platform connecting certified coaches with professionals seeking skill development. Coachprolink offers an intelligent matching system based on goals, industry, and availability. The platform integrates video conferencing, session scheduling, progress tracking, and secure payment processing.",
      objectives: [
        "Facilitate coach-professional matchmaking via an intelligent algorithm",
        "Integrate a video conferencing system for remote coaching sessions",
        "Automate scheduling, reminders, and session tracking",
        "Provide progress tracking and structured feedback tools",
        "Secure financial transactions with an integrated payment system",
      ],
    },
  },
];

export const getProjectBySlug = (slug: string): PortfolioProject | undefined =>
  portfolioProjects.find((p) => p.slug === slug);
