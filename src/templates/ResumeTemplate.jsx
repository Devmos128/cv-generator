import React from "react";

import {
  Document,
  Page,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

import tokens from "../../styles/tokens.js";

import Header from "../components/Header.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import Summary from "../components/Summary.jsx";
import SkillsSection from "../components/SkillsSection.jsx";
import ExperienceSection from "../components/ExperienceSection.jsx";
import EducationSection from "../components/EducationSection.jsx";
import LanguagesSection from "../components/LanguagesSection.jsx";

const styles = StyleSheet.create({
  page: {
    paddingTop: tokens.page.paddingTop,
    paddingBottom: tokens.page.paddingBottom,
    paddingHorizontal: tokens.page.paddingHorizontal,
    fontSize: tokens.font.body,
    fontFamily: tokens.font.family,
    color: tokens.colors.text,
  },

  section: {
    marginTop: tokens.spacing.sectionTop,
  },
});

const ResumeTemplate = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header data={data} />

        <View style={styles.section}>
          <SectionTitle title="PROFESSIONAL SUMMARY" />
          <Summary text={data.summary} />
        </View>

        <View style={styles.section}>
          <SectionTitle title="TECHNICAL SKILLS" />
          <SkillsSection skills={data.skills} />
        </View>

        <View style={styles.section}>
          <SectionTitle title="PROFESSIONAL EXPERIENCE" />
          <ExperienceSection experience={data.experience} />
        </View>

        <View style={styles.section}>
          <SectionTitle title="EDUCATION" />
          <EducationSection education={data.education} />
        </View>

        <View style={styles.section}>
          <SectionTitle title="LANGUAGES" />
          <LanguagesSection languages={data.languages} />
        </View>
      </Page>
    </Document>
  );
};

export default ResumeTemplate;