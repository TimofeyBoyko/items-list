import styled from "styled-components";

import utils from "../../utils";

const { globalColors, device } = utils;

const { mobile } = device;

const StyledArticle = styled.article`
  width: 256px;
  min-width: 256px;
  height: 100%;

  background: ${globalColors.articleBackground};

  display: flex;
  flex-direction: column;

  overflow-x: hidden;
  overflow-y: auto;

  @media ${mobile} {
    width: 100%;
    height: 48px;

    flex-direction: row;

    overflow-x: auto;
    overflow-y: hidden;

    padding: 0 20px;

    box-sizing: border-box;
  }
`;

const StyledHeader = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 0 16px;
`;

export { StyledArticle, StyledHeader };
