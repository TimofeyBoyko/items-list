import React from "react";
import { Link } from "react-router-dom";

import { changeFavorite } from "../../store/cardSlice";

import Text from "../../components/Text";
import IconButton from "../../components/IconButton";

import changeImageSize from "../../utils/changeImageSize";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

import StyledCard from "./StyledCard";

type CardProps = {
  propId: string;
  author: string;
  imageUrl: string;
  isFavorite?: boolean;
};

const imgSize: string = "200";

const Card: React.FC<CardProps> = ({
  propId,
  author,
  imageUrl,
  isFavorite,
}) => {
  const dispatch = useAppDispatch();

  const onChangeFavorite = React.useCallback(() => {
    dispatch(changeFavorite(propId));
  }, [dispatch, propId]);

  return (
    <StyledCard imgSize={imgSize}>
      <Link to={`/card/${propId}`}>
        <img
          className="card__image"
          src={changeImageSize(imageUrl, imgSize)}
          alt={`img_${propId}`}
        />
      </Link>

      <div className="card__info">
        <Text text={author} fontSize={"16px"} lineHeight={"20px"} isBold />
        <IconButton
          icon="/images/favorite.react.svg"
          size="16px"
          isActive={isFavorite}
          onClick={onChangeFavorite}
        />
      </div>
    </StyledCard>
  );
};

export default React.memo(Card);
