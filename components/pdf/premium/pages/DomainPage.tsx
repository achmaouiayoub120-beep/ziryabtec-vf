import React from 'react';
import { Page, View, Text } from '@react-pdf/renderer';
import { styles } from '@/lib/pdf/styles';
import { COLORS } from '@/lib/pdf/colors';
import { Formation } from '@/lib/data/formations';

export const DomainPage = ({ domain, color, formations }: { domain: string; color: string; formations: Formation[] }) => (
  <Page size="A4" style={[styles.pageLight, { padding: 0 }]}>
    {/* Header Banner */}
    <View style={{ backgroundColor: color, padding: 50, paddingTop: 60, paddingBottom: 40 }}>
      <Text style={[styles.titleDisplay, { fontSize: 36, color: COLORS.text.primaryDark, marginBottom: 10 }]}>
        {domain.toUpperCase()}
      </Text>
      <Text style={[styles.textBody, { fontSize: 14, color: 'rgba(255,255,255,0.8)' }]}>
        {formations.length} cursus spécialisés pour maîtriser les technologies clés du marché.
      </Text>
    </View>

    {/* Content */}
    <View style={{ padding: 40 }}>
      {/* Table Header */}
      <View style={{ flexDirection: 'row', borderBottomWidth: 2, borderBottomColor: color, paddingBottom: 10, marginBottom: 15 }}>
        <Text style={[styles.textBody, { width: '15%', fontSize: 10, fontWeight: 600, color: COLORS.text.secondary }]}>RÉF</Text>
        <Text style={[styles.textBody, { width: '55%', fontSize: 10, fontWeight: 600, color: COLORS.text.secondary }]}>FORMATION</Text>
        <Text style={[styles.textBody, { width: '15%', fontSize: 10, fontWeight: 600, color: COLORS.text.secondary }]}>CATÉGORIE</Text>
        <Text style={[styles.textBody, { width: '15%', fontSize: 10, fontWeight: 600, color: COLORS.text.secondary, textAlign: 'right' }]}>DURÉE</Text>
      </View>

      {/* Table Rows */}
      {formations.map((f, i) => (
        <View key={i} style={{ flexDirection: 'row', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: COLORS.border.light, backgroundColor: i % 2 === 0 ? COLORS.background.white : COLORS.background.pearl }}>
          <Text style={[styles.textMono, { width: '15%', fontSize: 9, color: COLORS.text.secondary }]}>{f.reference}</Text>
          <Text style={[styles.titleDisplay, { width: '55%', fontSize: 10, color: COLORS.text.primary, paddingRight: 10 }]}>{f.titre}</Text>
          <Text style={[styles.textBody, { width: '15%', fontSize: 9, color: COLORS.text.secondary }]}>{f.categorie}</Text>
          <Text style={[styles.textMono, { width: '15%', fontSize: 9, color: COLORS.text.secondary, textAlign: 'right' }]}>{f.duree}</Text>
        </View>
      ))}
    </View>
    
    <View style={styles.footer} fixed>
      <Text style={styles.footerText}>ZiryabTec Formation — {domain}</Text>
      <Text style={styles.footerText} render={({ pageNumber }) => `${pageNumber}`} />
    </View>
  </Page>
);
