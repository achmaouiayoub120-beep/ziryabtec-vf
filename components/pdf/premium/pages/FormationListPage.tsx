import React from 'react';
import { Page, View, Text } from '@react-pdf/renderer';
import { styles } from '@/lib/pdf/styles';
import { COLORS, getDomainColor } from '@/lib/pdf/colors';
import { Formation } from '@/lib/data/formations';

export const FormationListPage = ({ formations }: { formations: Formation[] }) => (
  <Page size="A4" style={[styles.pageLight, { paddingTop: 50, paddingBottom: 60 }]}>
    
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {formations.map((f, i) => (
        <View key={i} style={[styles.card, { width: '48%', marginBottom: 20, borderLeftWidth: 4, borderLeftColor: getDomainColor(f.theme) }]} wrap={false}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 15 }}>
            <View style={{ backgroundColor: COLORS.background.pearl, paddingHorizontal: 6, paddingVertical: 3, borderRadius: 4 }}>
              <Text style={[styles.textMono, { fontSize: 8, color: COLORS.text.secondary }]}>{f.reference}</Text>
            </View>
            <View style={{ backgroundColor: 'rgba(6, 182, 212, 0.1)', paddingHorizontal: 6, paddingVertical: 3, borderRadius: 4 }}>
              <Text style={[styles.textBody, { fontSize: 8, color: COLORS.accent.cyan, fontFamily: FONTS.bodyBold, textTransform: 'uppercase' }]}>{f.categorie}</Text>
            </View>
          </View>

          <Text style={[styles.titleDisplay, { fontSize: 12, color: COLORS.text.primary, marginBottom: 15, minHeight: 34 }]}>
            {f.titre}
          </Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, paddingBottom: 15, borderBottomWidth: 1, borderBottomColor: COLORS.border.light }}>
            <Text style={[styles.textBody, { fontSize: 9, color: COLORS.text.secondary, fontFamily: FONTS.bodyBold }]}>
              DURÉE: {f.duree}
            </Text>
          </View>

          <View>
            <Text style={[styles.textBody, { fontSize: 9, color: COLORS.text.secondary, marginBottom: 4 }]}>• Maîtriser les concepts clés du domaine</Text>
            <Text style={[styles.textBody, { fontSize: 9, color: COLORS.text.secondary, marginBottom: 4 }]}>• Mettre en pratique via des labs dédiés</Text>
            <Text style={[styles.textBody, { fontSize: 9, color: COLORS.text.secondary }]}>• Préparer les certifications du marché</Text>
          </View>
        </View>
      ))}
    </View>

    <View style={styles.footer} fixed>
      <Text style={styles.footerText}>ZiryabTec Formation — Détail des cursus</Text>
      <Text style={styles.footerText} render={({ pageNumber }) => `${pageNumber}`} />
    </View>
  </Page>
);
