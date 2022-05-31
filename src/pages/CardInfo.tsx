import React from "react";
import { useParams } from "react-router-dom";

import { switchTab, setCurrentLabel } from "../store/settingsSlice";
import { fetchCardById } from "../store/selectedCardSlice";

import Card from "../common/Card";

import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { ICard } from "../utils/types";

const CardInfo = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const { selectedCard, isLoading, favoriteCardList } = useAppSelector(
    ({ CardList, SelectedCard }) => ({
      selectedCard: SelectedCard.selectedCard,
      isLoading: SelectedCard.isLoading,
      favoriteCardList: CardList.favoriteCardList,
    })
  );

  const getData = React.useCallback(() => {
    if (id) {
      dispatch(fetchCardById(id));
    }
  }, [id, dispatch]);

  React.useEffect(() => {
    getData();
  }, [getData, id]);

  React.useEffect(() => {
    dispatch(switchTab(""));
    dispatch(setCurrentLabel(`Card: ${id}`));
  }, [dispatch, id]);

  const isFavorite = selectedCard
    ? favoriteCardList.findIndex(
        (card: ICard) => card.id === selectedCard.id
      ) !== -1
    : false;

  return (
    <>
      {isLoading || !selectedCard ? (
        <p>Loading...</p>
      ) : (
        <Card
          propId={selectedCard.id}
          author={selectedCard.author}
          imageUrl={selectedCard.download_url}
          isFavorite={isFavorite}
        />
      )}
    </>
  );
};

export default React.memo(CardInfo);
