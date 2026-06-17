import { StyleSheet } from "@react-pdf/renderer";
import { COLORS } from "./colors";
import { FONTS } from "./fonts";

export const styles = StyleSheet.create({
  pageLight: {
    backgroundColor: COLORS.background.pearl,
    fontFamily: FONTS.body,
    color: COLORS.text.primary,
    padding: 40,
  },
  pageDark: {
    backgroundColor: COLORS.background.obsidian,
    fontFamily: FONTS.body,
    color: COLORS.text.primaryDark,
    padding: 40,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  flexColumn: {
    flexDirection: "column",
  },
  titleDisplay: {
    fontFamily: FONTS.display,
    fontWeight: "bold",
  },
  textBody: {
    fontFamily: FONTS.body,
    fontWeight: "normal",
  },
  textMono: {
    fontFamily: FONTS.mono,
    fontWeight: "normal",
  },
  goldLine: {
    height: 1,
    backgroundColor: COLORS.accent.gold,
    width: "100%",
  },
  card: {
    backgroundColor: COLORS.background.white,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.border.light,
    borderRadius: 8,
  },
  glassCard: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 8,
  },
  pill: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 8,
    fontFamily: FONTS.body,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: COLORS.border.light,
    paddingTop: 10,
  },
  footerDark: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: COLORS.border.dark,
    paddingTop: 10,
  },
  footerText: {
    fontSize: 9,
    color: COLORS.text.muted,
    fontFamily: FONTS.body,
  },
  footerTextDark: {
    fontSize: 9,
    color: COLORS.text.mutedDark,
    fontFamily: FONTS.body,
  }
});
