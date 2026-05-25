import React from "react";

import { View } from "@react-pdf/renderer";

import ExperienceItem from "./ExperienceItem";

const ExperienceSection = ({ experience }) => {
  return (
    <View>
      {experience.map((item, index) => (
        <ExperienceItem
          key={index}
          item={item}
        />
      ))}
    </View>
  );
};

export default ExperienceSection;