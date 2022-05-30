import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import IconButton from ".";

export default {
  title: "Components/IconButton",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Default = Template.bind({});

Default.args = {
  icon: "/images/favorite.react.svg",
  size: "25px",
  color: "",
  onClick: () => {
    console.log("test");
  },
  isDisabled: false,
  isActive: false,
  id: "",
  className: "",
  style: {},
  testId: "icon-button",
};
