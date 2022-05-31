import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchCardById as fetchCard } from "../api";

import { ICard } from "../utils/types";

export interface CardListState {
  selectedCard: ICard | null;
  isLoading: boolean;
}

const initialState: CardListState = {
  selectedCard: null,
  isLoading: false,
};

export const fetchCardById = createAsyncThunk(
  "card/fetchCardById",
  async (id: string) => {
    const response: ICard = await fetchCard(id);

    return response;
  }
);

export const selectedCardSlice = createSlice({
  name: "SelectedCard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCardById.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCardById.fulfilled, (state, action) => {
        state.selectedCard = action.payload;

        state.isLoading = false;
      });
  },
});

export const {} = selectedCardSlice.actions;

export default selectedCardSlice.reducer;
