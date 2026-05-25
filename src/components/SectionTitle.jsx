import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import tokens from "../../styles/tokens";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: tokens.colors.sectionBg,
    paddingVertical: 3,
    paddingHorizontal: 8,
    marginBottom: tokens.spacing.sectionBottom,
  },
  title: {
    fontSize: tokens.font.section,
    fontWeight: tokens.weight.bold,
    textAlign: "center",
    letterSpacing: 0.3,
  },
});

const SectionTitle = ({ title }) => (
  <View style={styles.wrapper}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default SectionTitle;