import styled from "styled-components";

import globalColors from "../../utils/globalColors";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: fit-content;
  height: 46px;

  padding: 10px 20px;

  box-sizing: border-box;

  cursor: pointer;

  color: ${globalColors.text};
  border: 1px solid ${globalColors.border};
  background: ${globalColors.background};

  border-radius: 10px;

  outline: none;

  font-size: 20px;
  font-weight: 500;

  :hover {
    border: 1px solid ${globalColors.borderHover};
    background: ${globalColors.backgroundHover};
  }

  :active {
    border: 1px solid ${globalColors.borderActive};
    background: ${globalColors.backgroundActive};
  }

  :disabled {
    border: 1px solid ${globalColors.borderDisabled};
    background: ${globalColors.backgroundDisabled};

    cursor: not-allowed;
  }
`;

export default StyledButton;
