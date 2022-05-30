import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Text from ".";

export default {
  title: "Components/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: "Test text",
  color: "",
  backgroundColor: "",
  fontSize: "",
  fontWeight: "",
  fontStyle: "",
  lineHeight: "",
  truncate: false,
  noUserSelect: false,
  isDisabled: false,
  isBold: false,
  testId: "",
  id: "",
  className: "",
  style: {},
};
