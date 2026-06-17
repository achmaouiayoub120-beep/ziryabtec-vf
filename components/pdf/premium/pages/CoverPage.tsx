import React from 'react';
import { Page, View, Text, Svg, Path, Rect, Defs, LinearGradient, Stop } from '@react-pdf/renderer';
import { styles } from '@/lib/pdf/styles';
import { COLORS } from '@/lib/pdf/colors';

export const CoverPage = () => (
  <Page size="A4" style={styles.pageDark}>
    <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
      <Svg width="100%" height="100%" viewBox="0 0 595 842">
        <Defs>
          <LinearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0%" stopColor={COLORS.background.obsidian} />
            <Stop offset="100%" stopColor="#1a1a2e" />
          </LinearGradient>
          <LinearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0%" stopColor={COLORS.accent.gold} stopOpacity={0.05} />
            <Stop offset="100%" stopColor={COLORS.accent.gold} stopOpacity={0.2} />
          </LinearGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#bgGrad)" />
        {/* Abstract Circuit/Network Pattern */}
        <Path d="M0,200 L150,200 L200,250 L400,250 L450,200 L600,200" stroke="url(#lineGrad)" strokeWidth={1} fill="none" />
        <Path d="M100,0 L100,150 L150,200" stroke="url(#lineGrad)" strokeWidth={1} fill="none" />
        <Path d="M500,0 L500,150 L450,200" stroke="url(#lineGrad)" strokeWidth={1} fill="none" />
        <Path d="M250,250 L250,500 L200,550 L0,550" stroke="url(#lineGrad)" strokeWidth={1} fill="none" />
        <Path d="M350,250 L350,600 L400,650 L600,650" stroke="url(#lineGrad)" strokeWidth={1} fill="none" />
        <Path d="M250,500 L350,600" stroke="url(#lineGrad)" strokeWidth={1} fill="none" />
      </Svg>
    </View>

    <View style={{ flex: 1, justifyContent: 'center', zIndex: 1, paddingHorizontal: 20 }}>
      <Text style={[styles.titleDisplay, { fontSize: 46, color: COLORS.text.primaryDark, lineHeight: 1.1 }]}>
        CATALOGUE DES
      </Text>
      <Text style={[styles.titleDisplay, { fontSize: 46, color: COLORS.text.primaryDark, lineHeight: 1.1, marginBottom: 15 }]}>
        FORMATIONS
      </Text>
      
      <View style={{ height: 1, backgroundColor: COLORS.accent.gold, width: 60, marginBottom: 15 }} />
      
      <Text style={[styles.textBody, { fontSize: 16, color: COLORS.accent.cyan, letterSpacing: 2 }]}>
        2026 — EXCELLENCE TECHNOLOGIQUE
      </Text>
    </View>

    <View style={{ position: 'absolute', bottom: 40, left: 60, right: 60, zIndex: 1, alignItems: 'center' }}>
      <Text style={[styles.titleDisplay, { fontSize: 24, color: COLORS.text.primaryDark, letterSpacing: 4 }]}>
        ZIRYABTEC
      </Text>
    </View>

    {/* Bottom Gradient Bar */}
    <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 8, zIndex: 1 }}>
      <Svg width="100%" height="100%" viewBox="0 0 100 1" preserveAspectRatio="none">
        <Defs>
          <LinearGradient id="bottomBar" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0%" stopColor={COLORS.accent.sapphire} />
            <Stop offset="100%" stopColor={COLORS.accent.cyan} />
          </LinearGradient>
        </Defs>
        <Rect width="100%" height="1" fill="url(#bottomBar)" />
      </Svg>
    </View>
  </Page>
);
