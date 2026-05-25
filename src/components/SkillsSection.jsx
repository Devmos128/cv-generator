import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import tokens from "../../styles/tokens";

const styles = StyleSheet.create({
  group: {
    marginBottom: 4,
  },
  category: {
    fontWeight: tokens.weight.bold,
    marginBottom: 1,
  },
  items: {
    lineHeight: tokens.spacing.lineHeight,
  },
});

const SkillsSection = ({ skills }) => (
  <View>
    {skills.map((group, index) => (
      <View key={index} style={styles.group}>
        <Text style={styles.category}>{group.category}</Text>
        <Text style={styles.items}>{group.items.join(", ")}</Text>
      </View>
    ))}
  </View>
);

export default SkillsSection;