import React, { useState } from "react";
import "./App.css";
import { AddRequirement } from "./AddRequirement";
import { Title } from "./Title";
import { Perks } from "./Perks";
import { TemplateSelect } from "./TemplateSelect";
import { Description } from "./Description";
import { Submition } from "./Submition";

export const JobDescriptionCreator = props => {
  const [requirements, setRequirements] = useState([]);
  //   const [recommendedRequirements, setRecommendedRequirements] = useState([]);

  return (
    <div>
      <Title />
      <Description />
      <TemplateSelect />
      <AddRequirement
        onAddRequirement={requirement => {
          const nextRequirements = requirements.concat([requirement]);
          setRequirements(nextRequirements);
        }}
      />
      {requirements.map((requirement, index) => (
        <div key={index}>Requirement: {requirement}</div>
      ))}
      <Perks />
      <Submition />
    </div>
  );
};
