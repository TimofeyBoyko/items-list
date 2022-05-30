import styled, { css } from "styled-components";

import utils from "../../utils";

const { globalColors } = utils;

const { mobile } = utils.device;

type StyledArticleItemProps = {
  isActive?: boolean;
};

const StyledArticleItem = styled.div<StyledArticleItemProps>`
  width: 100%;
  height: 36px;

  display: flex;
  align-items: center;

  box-sizing: border-box;

  padding: 0 16px;

  .article-item__icon {
    margin-right: 8px;

    display: flex;
    align-items: center;
  }

  :hover {
    background-color: ${globalColors.articleItemHover};

    cursor: pointer;
  }

  ${(props) =>
    props.isActive &&
    css`
      background-color: ${globalColors.articleItemActive} !important;
    `}

  @media ${mobile} {
    width: 36px;
    height: 100%;
    justify-content: center;

    background-color: unset !important;

    .article-item__icon {
      margin-right: 0;
    }
  }
`;

export default StyledArticleItem;
