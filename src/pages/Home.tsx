import React from "react";

import Card from "../common/Card";

import { ICard } from "../utils/types";
import { useAppDispatch, useAppSelector } from "../utils/hooks";

import { fetchCardList } from "../store/cardSlice";

const Home = () => {
  const {
    cardList,
    isLoading,
    favoriteCardList,
    currentTab,
    page,
    imageOnPage,
  } = useAppSelector(({ CardList, Settings }) => ({
    cardList: CardList.cardList,
    favoriteCardList: CardList.favoriteCardList,
    isLoading: CardList.isLoading,
    currentTab: Settings.currentTab,
    page: Settings.page,
    imageOnPage: Settings.imageOnPage,
  }));

  const dispatch = useAppDispatch();

  const getData = React.useCallback(async () => {
    dispatch(fetchCardList({ page, imageOnPage }));
  }, [dispatch, page, imageOnPage]);

  React.useEffect(() => {
    if (cardList.length === 0) {
      getData();
    }
  }, [cardList.length, getData]);

  const renderCardList = () => {
    const currentCardList = currentTab === "all" ? cardList : favoriteCardList;

    const renderedCardList = currentCardList.slice(
      imageOnPage * (page - 1),
      imageOnPage * page
    );

    return (
      <>
        {renderedCardList?.map((card: ICard) => (
          <Card
            key={card.id}
            propId={card.id}
            author={card.author}
            imageUrl={card.download_url}
            isFavorite={card.isFavorite}
          />
        ))}
      </>
    );
  };

  return <>{isLoading ? <p>Loading ...</p> : <>{renderCardList()}</>}</>;
};

export default React.memo(Home);
