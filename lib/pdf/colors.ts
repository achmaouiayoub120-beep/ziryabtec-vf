export const COLORS = {
  background: {
    obsidian: "#0A0A0F",
    slate: "#12121A",
    graphite: "#1A1A2E",
    pearl: "#FAFAF8",
    white: "#FFFFFF",
  },
  accent: {
    sapphire: "#2563EB",
    cyan: "#06B6D4",
    gold: "#D4A843",
  },
  text: {
    primary: "#111111",
    primaryDark: "#FFFFFF",
    secondary: "#555550",
    secondaryDark: "rgba(255, 255, 255, 0.7)",
    muted: "#999990",
    mutedDark: "rgba(255, 255, 255, 0.4)",
  },
  border: {
    light: "#E8E4DC",
    dark: "rgba(255, 255, 255, 0.1)",
  }
};

export const DOMAIN_COLORS: Record<string, string> = {
  "Cybersécurité": "#DC2626", // Crimson Red
  "Cloud": "#3B82F6",         // Azure Blue
  "Système": "#10B981",       // Emerald Green
  "Réseaux": "#8B5CF6",       // Royal Purple
  "IA": "#EC4899",            // Magenta Pink
};

export const getDomainColor = (theme: string): string => {
  return DOMAIN_COLORS[theme] || COLORS.accent.sapphire;
};
