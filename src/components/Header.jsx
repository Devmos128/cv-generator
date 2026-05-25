import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

import tokens from "../../styles/tokens";

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginBottom: tokens.spacing.headerBottom,
  },

  name: {
    fontSize: tokens.font.name,
    fontWeight: tokens.weight.bold,
    marginBottom: 2,
  },

  role: {
    fontSize: tokens.font.title,
    color: tokens.colors.muted,
    marginBottom: 6,
  },

  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  contactText: {
    fontSize: tokens.font.small,
    marginHorizontal: 4,
    marginBottom: 2,
  },
});

const Header = ({ data }) => {
  const contactItems = [
    data.contact.phone,
    data.contact.email,
    data.contact.github,
    data.contact.location,
    data.contact.linkedin,
  ].filter(Boolean);

  return (
    <View style={styles.header}>
      <Text style={styles.name}>{data.name}</Text>

      <Text style={styles.role}>{data.title}</Text>

      <View style={styles.contactRow}>
        {contactItems.map((item, index) => (
  <View
    key={index}
    style={{
      flexDirection: "row",
      alignItems: "center",
    }}
  >
    <Text style={styles.contactText}>
      {item}
    </Text>

    {index !== contactItems.length - 1 && (
      <Text
        style={{
          marginHorizontal: 4,
          fontSize: tokens.font.title,
        }}
      >
        •
      </Text>
    )}
  </View>
  ))}
      </View>
    </View>
  );
};

export default Header;