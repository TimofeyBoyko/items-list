import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ArticleItem from ".";

export default {
  title: "Components/ArticleItem",
  component: ArticleItem,
} as ComponentMeta<typeof ArticleItem>;

const Template: ComponentStory<typeof ArticleItem> = (args) => (
  <ArticleItem {...args} />
);

export const Default = Template.bind({});

Default.args = {
  text: "All cards",
  iconUrl: "/images/article.user.react.svg",
  isActive: false,
  value: "",
  onClick: (value: string) => {
    console.log(value);
  },
  testId: "ArticleItem",
  id: "",
  className: "",
  style: {},
};
