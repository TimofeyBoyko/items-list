import React from "react";

import components from "../../components";

import utils from "../../utils";

import { IArticleItem } from "../../utils/types";

import { StyledArticle, StyledHeader } from "./StyledArticle";

const { ArticleItem, Text } = components;

const { isMobile } = utils.device;

const ArticleItemList: IArticleItem[] = [
  { key: "all", label: "All cards", iconUrl: "/images/article.user.react.svg" },
  {
    key: "favorites",
    label: "Favorites",
    iconUrl: "/images/article.favorites.react.svg",
  },
];

type ArticleProps = {};

const Article: React.FC<ArticleProps> = ({}) => {
  const [selectedItem, setSelectedItem] = React.useState<string>(
    ArticleItemList[0].key
  );

  const changeItem: (value: string) => void = React.useCallback(
    (value) => {
      if (selectedItem !== value) setSelectedItem(value);
    },
    [selectedItem]
  );

  return (
    <StyledArticle>
      {!isMobile() && (
        <StyledHeader>
          <Text
            text={"Navigation"}
            fontSize={"25px"}
            lineHeight={"30px"}
            isBold
            noUserSelect
          />
        </StyledHeader>
      )}
      {ArticleItemList.map((item: IArticleItem) => (
        <ArticleItem
          key={item.key}
          text={item.label}
          iconUrl={item.iconUrl}
          value={item.key}
          isActive={selectedItem === item.key}
          onClick={changeItem}
        />
      ))}
    </StyledArticle>
  );
};

export default React.memo(Article);
