import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { fetchCardList as fetchList } from "../api";

import { ICard } from "../utils/types";

export interface CardListState {
  cardList: ICard[];
  favoriteCardList: ICard[];
  isLoading: boolean;
}

const initialState: CardListState = {
  cardList: [],
  favoriteCardList: [],
  isLoading: false,
};

export const fetchCardList = createAsyncThunk(
  "card/fetchCardList",
  async () => {
    const response: ICard[] = await fetchList();

    return response;
  }
);

export const cardListSlice = createSlice({
  name: "CardList",
  initialState,
  reducers: {
    changeFavorite: (state, action: PayloadAction<string>) => {
      const id: string = action.payload;

      const index = state.cardList.findIndex((card) => card.id === id);

      state.cardList[index].isFavorite = !state.cardList[index].isFavorite;

      if (state.cardList[index].isFavorite) {
        state.favoriteCardList.push(state.cardList[index]);
      } else {
        const favoriteIndex = state.favoriteCardList.findIndex(
          (card) => card.id === id
        );

        state.favoriteCardList.splice(favoriteIndex, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCardList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCardList.fulfilled, (state, action) => {
        state.cardList = action.payload;

        state.isLoading = false;
      });
  },
});

export const { changeFavorite } = cardListSlice.actions;

export default cardListSlice.reducer;
