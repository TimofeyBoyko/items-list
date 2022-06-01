import React from "react";

import Button from "../../components/Button";

import { fetchCardList } from "../../store/cardSlice";
import { increasePage, decreasePage } from "../../store/settingsSlice";

import StyledPaginationContainer from "./StyledPagination";

import { useAppDispatch, useAppSelector } from "../../utils/hooks";

type PaginationProps = {};

const Pagination: React.FC<PaginationProps> = () => {
  const [isMaxPage, setIsMaxPage] = React.useState<boolean>(true);

  const { cardList, favoriteCardList, currentTab, page, imageOnPage } =
    useAppSelector(({ CardList, Settings }) => ({
      cardList: CardList.cardList,
      favoriteCardList: CardList.favoriteCardList,
      currentTab: Settings.currentTab,
      page: Settings.page,
      imageOnPage: Settings.imageOnPage,
    }));

  const dispatch = useAppDispatch();

  const currentCardList = currentTab === "all" ? cardList : favoriteCardList;

  React.useEffect(() => {
    console.log(currentCardList.length, page * imageOnPage);
    if (currentCardList.length <= page * imageOnPage) {
      setIsMaxPage(true);
    } else {
      setIsMaxPage(false);
    }
  }, [
    currentTab,
    cardList,
    favoriteCardList,
    page,
    imageOnPage,
    currentCardList,
  ]);

  const onNextClick = React.useCallback(() => {
    if (isMaxPage) {
      dispatch(fetchCardList({ page: page + 1, imageOnPage }));
    }
    if (page * imageOnPage === currentCardList.length || !isMaxPage) {
      dispatch(increasePage());
    }
  }, [isMaxPage, dispatch, page, imageOnPage, currentCardList.length]);

  const onPrevClick = React.useCallback(() => {
    if (page > 1) {
      dispatch(decreasePage());
    }
  }, [dispatch, page]);

  return (
    <StyledPaginationContainer>
      <Button
        label={"Previous page"}
        onClick={onPrevClick}
        isDisabled={page === 1}
      />
      <Button
        label={"Next page"}
        onClick={onNextClick}
        isDisabled={page * imageOnPage !== currentCardList.length && isMaxPage}
      />
    </StyledPaginationContainer>
  );
};

export default React.memo(Pagination);
