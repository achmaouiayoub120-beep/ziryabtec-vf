export interface Formation {
  theme: string;
  categorie: string;
  reference: string;
  titre: string;
  duree: string;
}

export const formationsData: Formation[] = [
  // Cybersécurité - Sécurité offensive
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "CP-TH", titre: "Cours préparatoire aux techniques de hacking", duree: "2J" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "TH-N1", titre: "Techniques de hacking - Niveau 1", duree: "5J" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "TH-N2", titre: "Techniques de hacking - Niveau 2", duree: "5J" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "PYT-TI", titre: "Python pour tests d'intrusion", duree: "Sur mesure" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "OSINT-N1", titre: "OSINT - Investigation en source ouverte - Niveau 1", duree: "Sur mesure" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "OSINT-N2", titre: "OSINT - Investigation en source ouverte - Niveau 2", duree: "Sur mesure" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "ATT-WIFI", titre: "Attaque défense Wi-Fi", duree: "Sur mesure" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "DEF-WEB", titre: "Techniques défensives et offensives des applications Web", duree: "Sur mesure" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "CTI-N1", titre: "Cyber Threat Intelligence - Niveau 1", duree: "Sur mesure" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "CTI-N2", titre: "Cyber Threat Intelligence - Niveau 2", duree: "Sur mesure" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "INV-CF", titre: "Investigation numérique (Computer Forensics)", duree: "Sur mesure" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "INV-NET", titre: "Investigation numérique des réseaux", duree: "Sur mesure" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "INV-WIN", titre: "Investigation numérique Windows (Computer Forensics)", duree: "Sur mesure" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "INV-LNX", titre: "Investigation numérique Linux (Computer Forensics)", duree: "Sur mesure" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "MAL-F", titre: "Analyse de Malwares - Les fondamentaux", duree: "Sur mesure" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "MAL-ADV", titre: "Analyse de Malwares - Niveau avancé", duree: "Sur mesure" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "SEC-SRV", titre: "Sécurité des systèmes et services réseaux", duree: "Sur mesure" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "SEC-WIN", titre: "Sécurité du poste client Windows", duree: "Sur mesure" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "SEC-AD", titre: "Sécurité de l'Active Directory", duree: "Sur mesure" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "DUR-LNX", titre: "Durcissement sécurité Linux", duree: "Sur mesure" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "DSECOPS", titre: "DevSecOps Foundation", duree: "Sur mesure" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "SEC-PHP", titre: "Sécurité applicative avec PHP", duree: "Sur mesure" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "SEC-API", titre: "REST API - Bonnes pratiques et sécurité", duree: "Sur mesure" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "SEC-JVA", titre: "Sécurité applicative Java", duree: "Sur mesure" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "SEC-NET", titre: "C# - Sécurité applicative avec .NET", duree: "Sur mesure" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "SEC-DES", titre: "Sécurité applicative - Intégrer la sécurité dès la conception (Secure by Design)", duree: "Sur mesure" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "SEC-JS", titre: "La sécurité du développement Web avec JavaScript", duree: "Sur mesure" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "SOC-PCR", titre: "Parcours Analyste SOC (Security Operation Center)", duree: "Sur mesure" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "SOC-ANA", titre: "Analyse SOC (Security Operation Center)", duree: "Sur mesure" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "SEC-SRV2", titre: "Sécurité des systèmes et services réseaux", duree: "Sur mesure" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "IPS-IDS", titre: "Systèmes de prévention (IPS) et détection (IDS) d'intrusion", duree: "Sur mesure" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "IAM-SEC", titre: "Gestion des identités et sécurité des accès", duree: "Sur mesure" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "FW-ARCH", titre: "Firewall - Architecture et déploiement", duree: "Sur mesure" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "VPN-MO", titre: "VPN - Mise en oeuvre", duree: "Sur mesure" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "PKI-MO", titre: "PKI - Mise en oeuvre", duree: "Sur mesure" },
  { theme: "Cybersécurité", categorie: "Sécurité offensive", reference: "SCADA", titre: "Cybersécurité des systèmes industriels (SCADA)", duree: "Sur mesure" },

  // Cloud - Cloud Computing
  { theme: "Cloud", categorie: "Cloud Computing", reference: "CLD-ARCH", titre: "Architectures Cloud d'entreprise", duree: "2J" },
  { theme: "Cloud", categorie: "Cloud Computing", reference: "CLD-SYN", titre: "Cloud - La synthèse", duree: "5J" },
  { theme: "Cloud", categorie: "Cloud Computing", reference: "CLD-SEC", titre: "Sécurité du Cloud Computing", duree: "5J" },
  { theme: "Cloud", categorie: "Cloud Computing", reference: "O365-ADM", titre: "Activer et administrer Office 365", duree: "Sur mesure" },
  { theme: "Cloud", categorie: "Cloud Computing", reference: "O365-GST", titre: "Office 365 - Gestionnaire", duree: "Sur mesure" },
  { theme: "Cloud", categorie: "Cloud Computing", reference: "O365-USR", titre: "Office 365 - Utilisateur", duree: "Sur mesure" },

  // Système - Développement Unix Linux
  { theme: "Système", categorie: "Développement Unix Linux", reference: "SHL-ADV", titre: "Écriture de scripts Shell avancés", duree: "2J" },
  { theme: "Système", categorie: "Développement Unix Linux", reference: "PERL-SCR", titre: "Écriture de scripts avec le langage PERL", duree: "5J" },
  { theme: "Système", categorie: "Développement Unix Linux", reference: "PYT-DEV", titre: "Développer avec Python", duree: "5J" },
  { theme: "Système", categorie: "Développement Unix Linux", reference: "UNX-SCR", titre: "Scripting sous Unix/Linux", duree: "Sur mesure" },
  { theme: "Système", categorie: "Développement Unix Linux", reference: "DRV-LNX", titre: "Écriture de drivers et programmation noyau Linux", duree: "Sur mesure" },
  { theme: "Système", categorie: "Développement Unix Linux", reference: "LNX-RT", titre: "Mettre en oeuvre des systèmes temps réel avec Linux", duree: "Sur mesure" },
  { theme: "Système", categorie: "Développement Unix Linux", reference: "LNX-EMB", titre: "Concevoir un système Linux embarqué", duree: "2J" },

  // Système - Virtualisation
  { theme: "Système", categorie: "Virtualisation", reference: "VIRT-SEM", titre: "Etat de l'art de la virtualisation", duree: "2J" },
  { theme: "Système", categorie: "Virtualisation", reference: "VIRT-PRJ", titre: "Approche et réussite d'un projet de virtualisation", duree: "Sur mesure" },

  // Système - Windows et System Center
  { theme: "Système", categorie: "Windows et System Center", reference: "WIN-SUP", titre: "Certified Cursus Spécialiste du support technique", duree: "2J" },
  { theme: "Système", categorie: "Windows et System Center", reference: "WIN-OCS", titre: "Gestion de Parc avec OCS et GLP", duree: "5J" },
  { theme: "Système", categorie: "Windows et System Center", reference: "WIN-LOG", titre: "Assurer le support PC logiciel", duree: "5J" },
  { theme: "Système", categorie: "Windows et System Center", reference: "WIN-CST", titre: "Cursus Spécialiste du support technique", duree: "Sur mesure" },
  { theme: "Système", categorie: "Windows et System Center", reference: "WIN-MAT", titre: "Assurer le support PC matériel", duree: "Sur mesure" },
  { theme: "Système", categorie: "Windows et System Center", reference: "WIN-HTL", titre: "Hotliners : réussir ses prises d'appels", duree: "Sur mesure" },

  // Système - MacOs
  { theme: "Système", categorie: "MacOs", reference: "MAC-ADM", titre: "Cursus Administrateur macOS Sierra", duree: "2J" },
  { theme: "Système", categorie: "MacOs", reference: "MAC-SRV", titre: "Administration de macOS Sierra", duree: "5J" },
  { theme: "Système", categorie: "MacOs", reference: "MAC-USR", titre: "Prise en main de macOS Sierra", duree: "Sur mesure" },
  { theme: "Système", categorie: "MacOs", reference: "MAC-SRV2", titre: "Administration de serveurs macOS Sierra", duree: "Sur mesure" },

  // Réseaux - Formation Mise en Oeuvre
  { theme: "Réseaux", categorie: "Formation Mise en Oeuvre", reference: "NET-ADM", titre: "Cursus Administrateur réseaux", duree: "2J" },
  { theme: "Réseaux", categorie: "Formation Mise en Oeuvre", reference: "NET-RSP", titre: "Cursus Responsable réseaux", duree: "5J" },
  { theme: "Réseaux", categorie: "Formation Mise en Oeuvre", reference: "NET-PRK", titre: "Pratique des réseaux", duree: "5J" },
  { theme: "Réseaux", categorie: "Formation Mise en Oeuvre", reference: "NET-SEC", titre: "Sécurité systèmes et réseaux - Mise en oeuvre", duree: "2J" },
  { theme: "Réseaux", categorie: "Formation Mise en Oeuvre", reference: "IPV6-MO", titre: "Mettre en oeuvre IPv6", duree: "5J" },
  { theme: "Réseaux", categorie: "Formation Mise en Oeuvre", reference: "WIFI-MOB", titre: "La technologie sans-fil WiFi et mobilité", duree: "Sur mesure" },
  { theme: "Réseaux", categorie: "Formation Mise en Oeuvre", reference: "NET-INT", titre: "Introduction technique aux réseaux", duree: "Sur mesure" },
  { theme: "Réseaux", categorie: "Formation Mise en Oeuvre", reference: "NET-AUD", titre: "Auditez et optimisez votre réseau", duree: "Sur mesure" },
  { theme: "Réseaux", categorie: "Formation Mise en Oeuvre", reference: "TCP-IP", titre: "Soyez autonome avec TCP/IP", duree: "Sur mesure" },
  { theme: "Réseaux", categorie: "Formation Mise en Oeuvre", reference: "NET-OUT", titre: "Solutions et outils d'administration réseaux", duree: "Sur mesure" },

  // IA - Intelligence Artificielle
  { theme: "IA", categorie: "Intelligence Artificielle", reference: "IA-PYT", titre: "Python Pour Data Science", duree: "Sur mesure" },
];
