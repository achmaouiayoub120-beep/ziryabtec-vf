import React from 'react';
import { Page, View, Text } from '@react-pdf/renderer';
import { styles } from '@/lib/pdf/styles';
import { COLORS } from '@/lib/pdf/colors';

export const TableOfContents = ({ sections }: { sections: { title: string; page: number; color?: string }[] }) => (
  <Page size="A4" style={[styles.pageDark, { flexDirection: 'row', padding: 0 }]}>
    {/* Left Column: Giant Vertical Text */}
    <View style={{ width: '30%', backgroundColor: COLORS.background.obsidian, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ transform: 'rotate(-90deg)', width: 800, alignItems: 'center' }}>
        <Text style={[styles.titleDisplay, { fontSize: 100, color: 'rgba(255,255,255,0.05)', letterSpacing: 10 }]}>
          SOMMAIRE
        </Text>
      </View>
    </View>

    {/* Right Column: List */}
    <View style={{ width: '70%', height: '100%', padding: 60, justifyContent: 'center', backgroundColor: COLORS.background.slate }}>
      <Text style={[styles.titleDisplay, { fontSize: 24, color: COLORS.text.primaryDark, marginBottom: 40 }]}>
        CONTENU
      </Text>

      {sections.map((sec, i) => (
        <View key={i} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
          {sec.color && (
            <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: sec.color, marginRight: 15 }} />
          )}
          {!sec.color && (
            <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: COLORS.text.mutedDark, marginRight: 15 }} />
          )}
          <Text style={[styles.textBody, { fontSize: 12, color: COLORS.text.primaryDark, fontWeight: 500 }]}>
            {sec.title}
          </Text>
          <View style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: COLORS.border.dark, borderBottomStyle: 'dotted', marginHorizontal: 15, position: 'relative', top: 4 }} />
          <Text style={[styles.textMono, { fontSize: 12, color: COLORS.accent.cyan }]}>
            {sec.page.toString().padStart(2, '0')}
          </Text>
        </View>
      ))}
    </View>
  </Page>
);
