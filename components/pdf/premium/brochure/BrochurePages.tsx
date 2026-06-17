import React from 'react';
import { Page, View, Text, Svg, Defs, LinearGradient, Stop, Rect, Path, Circle } from '@react-pdf/renderer';
import { styles } from '@/lib/pdf/styles';
import { COLORS, getDomainColor } from '@/lib/pdf/colors';
import { Course } from '@/lib/data/types';

export const BrochureCover = ({ course }: { course: Course }) => {
  const color = getDomainColor(course.fr.theme);
  
  return (
    <Page size="A4" style={styles.pageDark}>
      <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
        <Svg width="100%" height="100%" viewBox="0 0 595 842">
          <Defs>
            <LinearGradient id="coverGrad" x1="0" y1="0" x2="1" y2="1">
              <Stop offset="0%" stopColor={COLORS.background.obsidian} />
              <Stop offset="100%" stopColor={color} stopOpacity={0.4} />
            </LinearGradient>
          </Defs>
          <Rect width="100%" height="100%" fill="url(#coverGrad)" />
          
          {/* Abstract Geometric Design for tech feel */}
          <Path d="M400,0 L600,200 L600,0 Z" fill={color} fillOpacity={0.2} />
          <Circle cx="500" cy="100" r="150" stroke={color} strokeWidth={2} fill="none" strokeOpacity={0.3} />
          <Circle cx="500" cy="100" r="100" stroke={color} strokeWidth={1} fill="none" strokeOpacity={0.5} />
        </Svg>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', zIndex: 1, paddingHorizontal: 20 }}>
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <View style={{ backgroundColor: color, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, marginRight: 10 }}>
            <Text style={[styles.textBody, { fontSize: 10, color: COLORS.text.primaryDark, fontWeight: 'bold', textTransform: 'uppercase' }]}>
              {course.fr.category}
            </Text>
          </View>
          <View style={{ backgroundColor: 'rgba(255,255,255,0.1)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, borderWidth: 1, borderColor: 'rgba(255,255,255,0.2)' }}>
            <Text style={[styles.textMono, { fontSize: 10, color: COLORS.text.primaryDark }]}>
              RÉF: {course.ref}
            </Text>
          </View>
        </View>

        <Text style={[styles.titleDisplay, { fontSize: 40, color: COLORS.text.primaryDark, lineHeight: 1.2, marginBottom: 20 }]}>
          {course.fr.title}
        </Text>
        
        <View style={{ height: 2, backgroundColor: color, width: 80, marginBottom: 20 }} />
        
        <Text style={[styles.textBody, { fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, maxWidth: 400 }]}>
          {course.fr.subtitle}
        </Text>
      </View>

      <View style={{ position: 'absolute', bottom: 50, left: 40, right: 40, zIndex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <View>
          <Text style={[styles.textBody, { fontSize: 10, color: COLORS.text.mutedDark, marginBottom: 5 }]}>DURÉE</Text>
          <Text style={[styles.textMono, { fontSize: 16, color: COLORS.text.primaryDark }]}>{course.duration}</Text>
        </View>
        <View>
          <Text style={[styles.textBody, { fontSize: 10, color: COLORS.text.mutedDark, marginBottom: 5 }]}>NIVEAU</Text>
          <Text style={[styles.textMono, { fontSize: 16, color: COLORS.text.primaryDark, textTransform: 'capitalize' }]}>{course.level}</Text>
        </View>
        <Text style={[styles.titleDisplay, { fontSize: 20, color: COLORS.text.primaryDark, letterSpacing: 2 }]}>
          ZIRYABTEC
        </Text>
      </View>
    </Page>
  );
};

export const BrochureContent = ({ course }: { course: Course }) => {
  const color = getDomainColor(course.fr.theme);

  return (
    <Page size="A4" style={[styles.pageLight, { paddingTop: 60 }]}>
      {/* Objectifs */}
      <View style={{ marginBottom: 40 }}>
        <Text style={[styles.titleDisplay, { fontSize: 24, color: COLORS.text.primary, marginBottom: 20 }]}>
          OBJECTIFS PÉDAGOGIQUES
        </Text>
        {course.fr.objectives.map((obj, i) => (
          <View key={i} style={{ flexDirection: 'row', marginBottom: 15, alignItems: 'flex-start' }}>
            <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: 'rgba(6, 182, 212, 0.1)', justifyContent: 'center', alignItems: 'center', marginRight: 15, marginTop: 2 }}>
              <Text style={[styles.textMono, { fontSize: 9, color: COLORS.accent.cyan }]}>{i + 1}</Text>
            </View>
            <Text style={[styles.textBody, { fontSize: 12, color: COLORS.text.secondary, flex: 1, lineHeight: 1.5 }]}>
              {obj}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.goldLine} />

      {/* Programme */}
      <View style={{ marginTop: 40 }}>
        <Text style={[styles.titleDisplay, { fontSize: 24, color: COLORS.text.primary, marginBottom: 20 }]}>
          PROGRAMME DÉTAILLÉ
        </Text>
        {course.fr.curriculum.map((mod, i) => (
          <View key={i} style={[styles.card, { marginBottom: 15, borderLeftWidth: 4, borderLeftColor: color }]} wrap={false}>
            <Text style={[styles.textMono, { fontSize: 9, color: color, marginBottom: 5 }]}>MODULE {i + 1}</Text>
            <Text style={[styles.titleDisplay, { fontSize: 14, color: COLORS.text.primary, marginBottom: 15 }]}>
              {mod.title}
            </Text>
            
            {mod.lessons.map((lesson, j) => (
              <View key={j} style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderTopWidth: j === 0 ? 0 : 1, borderTopColor: COLORS.border.light }}>
                <Text style={[styles.textBody, { fontSize: 11, color: COLORS.text.secondary, width: '80%' }]}>• {lesson.title}</Text>
                <Text style={[styles.textMono, { fontSize: 10, color: COLORS.text.muted, width: '20%', textAlign: 'right' }]}>{lesson.duration}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>

      <View style={styles.footer} fixed>
        <Text style={styles.footerText}>Brochure — {course.fr.title}</Text>
        <Text style={styles.footerText} render={({ pageNumber }) => `${pageNumber}`} />
      </View>
    </Page>
  );
};
