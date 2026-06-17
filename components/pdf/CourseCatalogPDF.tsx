import React from "react";
import { Document, Page, Text, View, StyleSheet, Font, Image } from "@react-pdf/renderer";
import { TranslatedCourse } from "@/lib/data/types";
import { dictionaries } from "@/lib/i18n/dictionaries";

// Register fonts if needed, otherwise rely on default standard fonts (Helvetica)
// We'll use the built-in Helvetica for simplicity and reliability, 
// styled with different weights.

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: "#ffffff",
    fontFamily: "Helvetica",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderBottomWidth: 2,
    borderBottomColor: "#1A56DB",
    paddingBottom: 15,
    marginBottom: 30,
  },
  headerLeft: {
    flexDirection: "column",
  },
  title: {
    fontSize: 24,
    fontFamily: FONTS.bodyBold,
    color: "#111111",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    color: "#555550",
  },
  logo: {
    width: 120,
    // Alternatively, if you have a real URL or local path for the logo:
    // height: 40,
  },
  courseRow: {
    flexDirection: "row",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E4DC",
    alignItems: "center",
  },
  courseContent: {
    flex: 1,
    paddingRight: 10,
  },
  courseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  courseTitle: {
    fontSize: 14,
    color: "#1A56DB",
  },
  courseCategory: {
    fontSize: 10,
    color: "#555550",
    textTransform: "uppercase",
    backgroundColor: "#EBF2FF",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  courseDetails: {
    fontSize: 10,
    color: "#555550",
    marginTop: 4,
    flexDirection: "row",
  },
  detailItem: {
    marginRight: 15,
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    borderTopWidth: 1,
    borderTopColor: "#E8E4DC",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerText: {
    fontSize: 9,
    color: "#999990",
  },
  footerLink: {
    fontSize: 9,
    color: "#1A56DB",
    textDecoration: "none",
  },
  pageNumber: {
    fontSize: 9,
    color: "#999990",
  }
});

interface CourseCatalogPDFProps {
  courses: TranslatedCourse[];
  language: "fr" | "en";
}

export default function CourseCatalogPDF({ courses, language }: CourseCatalogPDFProps) {
  const t = dictionaries[language].courses;
  const tDetails = dictionaries[language].courseDetails;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.title}>
              {language === "fr" ? "Catalogue des Formations" : "Course Catalog"} 2026
            </Text>
            <Text style={styles.subtitle}>ZiryabTec Formation - Elite Tech Academy</Text>
          </View>
          {/* <Image src="/logo.png" style={styles.logo} /> */}
        </View>

        {/* COURSE LIST */}
        <View>
          {courses.map((course, index) => (
            <View key={course.id} style={styles.courseRow} wrap={false}>
              <View style={styles.courseContent}>
                <View style={styles.courseHeader}>
                  <Text style={styles.courseTitle}>{course[language].title}</Text>
                  <Text style={styles.courseCategory}>{course[language].category}</Text>
                </View>
                <View style={styles.courseDetails}>
                  <Text style={styles.detailItem}>
                    {tDetails.instructor}: {course[language].instructor}
                  </Text>
                  <Text style={styles.detailItem}>
                    {t.filters.levels[course.level as keyof typeof t.filters.levels]}
                  </Text>
                  <Text style={styles.detailItem}>
                    {course.duration}
                  </Text>
                  <Text style={styles.detailItem}>
                    {t.filters.formats[course.format as keyof typeof t.filters.formats]}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* FOOTER */}
        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>ZiryabTec Formation</Text>
          <Text style={styles.footerLink}>https://ziryab-for-v4.vercel.app</Text>
          <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
            `${pageNumber} / ${totalPages}`
          )} />
        </View>
      </Page>
    </Document>
  );
}
