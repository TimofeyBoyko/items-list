import React from "react";

import Text from "../Text";

import StyledButton from "./StyledButton";

export type ButtonProps = {
  label: string;
  onClick: () => void;
  isDisabled?: boolean;
  testId?: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  isDisabled,
  id,
  className,
  style,
  testId,
}) => {
  const onClickAction: () => void = () => {
    !isDisabled && onClick();
  };

  return (
    <StyledButton
      id={id}
      className={className}
      style={style}
      onClick={onClickAction}
      disabled={isDisabled}
      data-testid={testId}
    >
      <Text text={label} fontSize={"15px"} lineHeight={"18px"} />
    </StyledButton>
  );
};

export default React.memo(Button);
