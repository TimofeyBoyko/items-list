import styled, { css } from "styled-components";

import globalColors from "../../utils/globalColors";

type StyledTextProps = {
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontWeight?: string;
  fontStyle?: string;
  lineHeight?: string;
  truncate?: boolean;
  noUserSelect?: boolean;
  isDisabled?: boolean;
  isBold?: boolean;
};

const StyledText = styled.p<StyledTextProps>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "13px")};
  font-weight: ${(props) =>
    props.fontWeight ? props.fontWeight : props.isBold ? "700" : "400"};
  font-style: ${(props) => (props.fontStyle ? props.fontStyle : "normal")};

  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "16px")};

  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  color: ${(props) =>
    props.color
      ? props.color
      : props.isDisabled
      ? globalColors.disabledText
      : globalColors.text};

  ${(props) =>
    props.noUserSelect &&
    css`
      user-select: none;
    `};

  ${(props) =>
    props.truncate &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
    `};

  padding: 0;
  margin: 0;
`;

export default StyledText;
