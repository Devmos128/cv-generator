import React from "react";
import { Text, StyleSheet } from "@react-pdf/renderer";
import tokens from "../../styles/tokens";

const styles = StyleSheet.create({
  text: {
    lineHeight: tokens.spacing.lineHeight,
  },
});

const LanguagesSection = ({ languages }) => {
  return <Text style={styles.text}>{languages.join(", ")}</Text>;
};

export default LanguagesSection;