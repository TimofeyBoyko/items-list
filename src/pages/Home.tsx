import React from "react";

import Card from "../common/Card";

import { ICard } from "../utils/types";
import { useAppDispatch, useAppSelector } from "../utils/hooks";

import { fetchCardList } from "../store/cardSlice";

const Home = () => {
  const { cardList, isLoading, favoriteCardList, currentTab } = useAppSelector(
    ({ CardList, Settings }) => ({
      cardList: CardList.cardList,
      favoriteCardList: CardList.favoriteCardList,
      isLoading: CardList.isLoading,
      currentTab: Settings.currentTab,
    })
  );

  const currentCardList = currentTab === "all" ? cardList : favoriteCardList;

  const dispatch = useAppDispatch();

  const getData = React.useCallback(async () => {
    dispatch(fetchCardList());
  }, [dispatch]);

  React.useEffect(() => {
    if (cardList.length === 0) {
      getData();
    }
  }, [cardList.length, getData]);

  return (
    <>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        currentCardList?.map((card: ICard) => (
          <Card
            key={card.id}
            propId={card.id}
            author={card.author}
            imageUrl={card.download_url}
            isFavorite={card.isFavorite}
          />
        ))
      )}
    </>
  );
};

export default React.memo(Home);
