import React from "react";

import { switchTab } from "../../store/settingsSlice";

import ArticleItem from "../../components/ArticleItem";
import Text from "../../components/Text";

import { isMobile } from "../../utils/device";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { IArticleItem } from "../../utils/types";

import { StyledArticle, StyledHeader } from "./StyledArticle";

type ArticleProps = {};

const Article: React.FC<ArticleProps> = ({}) => {
  const { activeTabs, currentTab } = useAppSelector(({ Settings }) => ({
    activeTabs: Settings.activeTabs,
    currentTab: Settings.currentTab,
  }));

  const dispatch = useAppDispatch();

  const changeItem: (value: string) => void = React.useCallback(
    (value) => {
      if (currentTab !== value) dispatch(switchTab(value));
    },
    [currentTab, dispatch]
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
      {activeTabs.map((item: IArticleItem) => (
        <ArticleItem
          key={item.key}
          text={item.label}
          iconUrl={item.iconUrl}
          value={item.key}
          isActive={item.isActive}
          onClick={changeItem}
        />
      ))}
    </StyledArticle>
  );
};

export default React.memo(Article);
