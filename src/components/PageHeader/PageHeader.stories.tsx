import React from "react";
import { ComponentStory } from "@storybook/react";

import PageHeader, {Props} from "./PageHeader";

export default {
  title: "Components/PageHeader",
  component: PageHeader,
};

const Template: ComponentStory<typeof PageHeader> = (props: Props) => (
  <PageHeader  />
);


export const Primary = Template.bind({});
Primary.args = {
  
};

