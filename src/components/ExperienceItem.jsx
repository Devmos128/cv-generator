import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";

import tokens from "../../styles/tokens";

const styles = StyleSheet.create({
  item: {
    marginBottom: tokens.spacing.itemGap,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },

  role: {
    fontWeight: tokens.weight.bold,
  },

  date: {
    fontSize: tokens.font.small,
    color: tokens.colors.muted,
  },

  company: {
    marginBottom: 10,
    color: tokens.colors.muted,
  },

  bullet: {
    marginLeft: 10,
    marginBottom: tokens.spacing.bulletGap,
    lineHeight: tokens.spacing.lineHeight,
  },
});

const ExperienceItem = ({ item }) => {
  return (
    <View style={styles.item}>

      <View style={styles.headerRow}>

        <Text style={styles.role}>
          {item.role}
        </Text>

        <Text style={styles.date}>
          {item.date}
        </Text>

      </View>

      <Text style={styles.company}>
        {item.company} • {item.location}
      </Text>

      {item.bullets.map((bullet, index) => (
        <Text
          key={index}
          style={styles.bullet}
        >
          •  {bullet}
        </Text>
      ))}

    </View>
  );
};

export default ExperienceItem;