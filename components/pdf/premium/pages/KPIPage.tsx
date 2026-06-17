import React from 'react';
import { Page, View, Text } from '@react-pdf/renderer';
import { styles } from '@/lib/pdf/styles';
import { COLORS } from '@/lib/pdf/colors';

export const KPIPage = () => (
  <Page size="A4" style={[styles.pageDark, { padding: 50, justifyContent: 'center' }]}>
    <Text style={[styles.titleDisplay, { fontSize: 28, color: COLORS.text.primaryDark, marginBottom: 60, textAlign: 'center' }]}>
      ZIRYABTEC EN CHIFFRES
    </Text>

    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {[
        { value: "70+", label: "FORMATIONS" },
        { value: "10", label: "DOMAINES D'EXPERTISE" },
        { value: "5000+", label: "PROFESSIONNELS FORMÉS" },
        { value: "98%", label: "TAUX DE SATISFACTION" },
        { value: "150+", label: "ENTREPRISES PARTENAIRES" },
        { value: "25+", label: "CERTIFICATIONS PRÉPARÉES" },
        { value: "12", label: "ANNÉES D'EXPÉRIENCE" },
        { value: "100%", label: "TAUX DE PLACEMENT" }
      ].map((kpi, i) => (
        <View key={i} style={{ width: '45%', marginBottom: 50, borderLeftWidth: 2, borderLeftColor: i % 2 === 0 ? COLORS.accent.sapphire : COLORS.accent.cyan, paddingLeft: 20 }}>
          <Text style={[styles.textMono, { fontSize: 48, color: COLORS.text.primaryDark, marginBottom: 8 }]}>
            {kpi.value}
          </Text>
          <Text style={[styles.textBody, { fontSize: 10, color: COLORS.text.mutedDark, letterSpacing: 2 }]}>
            {kpi.label}
          </Text>
        </View>
      ))}
    </View>
    
    <View style={styles.footerDark} fixed>
      <Text style={styles.footerTextDark}>ZiryabTec Formation</Text>
      <Text style={styles.footerTextDark} render={({ pageNumber }) => `${pageNumber}`} />
    </View>
  </Page>
);
