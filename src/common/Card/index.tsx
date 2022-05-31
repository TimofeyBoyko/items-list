import React from "react";

import components from "../../components";
import utils from "../../utils";

import StyledCard from "./StyledCard";

const { changeImageSize } = utils;

const { Text, IconButton } = components;

type CardProps = {
  propId: string;
  author: string;
  imageUrl: string;
  isFavorites?: boolean;
};

const Card: React.FC<CardProps> = ({
  propId,
  author,
  imageUrl,
  isFavorites,
}) => {
  return (
    <StyledCard>
      <img
        className="card__image"
        src={changeImageSize(imageUrl, "200")}
        alt={`img_${propId}`}
      />
      <div className="card__info">
        <Text text={author} fontSize={"16px"} lineHeight={"20px"} isBold />
        <IconButton
          icon="/images/favorite.react.svg"
          size="16px"
          isActive={isFavorites}
        />
      </div>
    </StyledCard>
  );
};

export default React.memo(Card);
