import React from "react";
import { ComponentStory } from "@storybook/react";

import ActionButton, {Props} from "./ActionButton";

export default {
  title: "Components/ActionButton",
  component: ActionButton,
};

const Template: ComponentStory<typeof ActionButton> = (props: Props) => (
  <ActionButton  />
);

export const Primary = Template.bind({});
Primary.args = {
  
};



