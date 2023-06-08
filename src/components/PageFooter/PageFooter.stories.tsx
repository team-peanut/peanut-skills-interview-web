import React from "react";
import { ComponentStory } from "@storybook/react";

import PageFooter from "./PageFooter";

export default {
  title: "Components/PageFooter",
  component: PageFooter,

  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "light",
    },
  },
};

const Template: ComponentStory<typeof PageFooter> = () => <PageFooter />;

export const Primary = Template.bind({});
