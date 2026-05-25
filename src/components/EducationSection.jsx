import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

import tokens from "../../styles/tokens";

const styles = StyleSheet.create({
  item: {
    marginBottom: 5,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },

  degree: {
    fontWeight: tokens.weight.bold,
  },

  date: {
    fontSize: tokens.font.small,
    color: tokens.colors.muted,
  },

  school: {
    color: tokens.colors.muted,
  },
});

const EducationSection = ({ education }) => {
  return (
    <View>
      {education.map((item, index) => (
        <View key={index} style={styles.item}>
          <View style={styles.row}>
            <Text style={styles.degree}>{item.degree}</Text>
            <Text style={styles.date}>{item?.date}</Text>
          </View>

          <Text style={styles.school}>{item.school}</Text>
        </View>
      ))}
    </View>
  );
};

export default EducationSection;