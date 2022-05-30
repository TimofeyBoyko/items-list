import styled, { css } from "styled-components";

import utils from "../../utils";

const { globalColors } = utils;

type StyledIconButtonProps = {
  size: string;
  color?: string;
  isActive?: boolean;
  isDisabled?: boolean;
};

const StyledIconButton = styled.div<StyledIconButtonProps>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: ${(props) => props.size};
    height: ${(props) => props.size};

    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: ${(props) => props.size};
    height: ${(props) => props.size};

    cursor: ${(props) => (props.isDisabled ? "normal" : "pointer")};

    path {
      fill: ${(props) => (props.color ? props.color : globalColors.iconButton)};
    }

    ${(props) =>
      !props.isDisabled &&
      css`
        :hover {
          path {
            fill: ${props.color ? props.color : globalColors.iconButtonHover};
          }
        }

        ${props.isActive &&
        css`
          path {
            fill: ${props.color
              ? props.color
              : globalColors.iconButtonActive} !important;
          }
        `}
      `}
  }
`;

export default StyledIconButton;
