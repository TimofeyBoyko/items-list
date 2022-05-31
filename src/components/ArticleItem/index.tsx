import React from "react";

import globalColors from "../../utils/globalColors";
import { isMobile } from "../../utils/device";

import Text from "../Text";
import IconButton from "../IconButton";

import StyledArticleItem from "./StyledArticleItem";
import { Link } from "react-router-dom";

export type ArticleItemProps = {
  text: string;
  iconUrl: string;
  value: string;
  isActive?: boolean;
  onClick?: (value: string) => void;
  testId?: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
};

const ArticleItem: React.FC<ArticleItemProps> = ({
  text,
  iconUrl,
  value,
  isActive,
  onClick,
  testId,
  id,
  className,
  style,
}) => {
  const onClickAction = () => {
    onClick && onClick(value);
  };

  return (
    <Link to="/">
      <StyledArticleItem
        id={id}
        className={className}
        style={style}
        data-testid={testId}
        isActive={isActive}
        onClick={onClickAction}
      >
        <IconButton
          className="article-item__icon"
          icon={iconUrl}
          size={isMobile() ? "24px" : "16px"}
          color={
            isMobile()
              ? isActive
                ? globalColors.articleItemColor
                : globalColors.articleItemActive
              : globalColors.articleItemColor
          }
          isDisabled
        />
        {!isMobile() && (
          <Text
            text={text}
            color={globalColors.articleItemColor}
            fontSize={"16px"}
            lineHeight={"20px"}
            fontWeight={"600"}
            noUserSelect
          />
        )}
      </StyledArticleItem>
    </Link>
  );
};

export default React.memo(ArticleItem);
