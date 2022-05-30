import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from ".";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "Save",
  onClick: () => {
    console.log("clicked");
  },
  isDisabled: false,
  testId: "button",
  id: "",
  className: "",
  style: {},
};