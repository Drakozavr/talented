import React from "react";
import { AddRequirement } from "./AddRequirement";
import { Title } from "./Title";
import { Perks } from "./Perks";
import { TemplateSelect } from "./TemplateSelect";
import { Description } from "./Description";

export const JobDescriptionCreator = props => {
  return (
    <div>
      <Title />
      <Description />
      <TemplateSelect />
      <AddRequirement />
      <Perks />
    </div>
  );
};
