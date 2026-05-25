import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import tokens from "../../styles/tokens";
const styles = StyleSheet.create({
  text: {
    lineHeight: tokens.spacing.lineHeight,
  },
});

const Summary = ({ text }) => (
  <View>
    <Text style={styles.text}>{text}</Text>
  </View>
);

export default Summary;