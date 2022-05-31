import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IArticleItem } from "../utils/types";

export interface SettingsState {
  currentTab: string;
  currentLabel: string;
  activeTabs: IArticleItem[];
  page: number;
  imageOnPage: number;
}

const initialState: SettingsState = {
  currentTab: "all",
  currentLabel: "All cards",
  activeTabs: [
    {
      key: "all",
      label: "All cards",
      iconUrl: "/images/article.user.react.svg",
      isActive: true,
    },
    {
      key: "favorites",
      label: "Favorites",
      iconUrl: "/images/article.favorites.react.svg",
      isActive: false,
    },
  ],
  page: 1,
  imageOnPage: 30,
};

export const settingsSlice = createSlice({
  name: "Settings",
  initialState,
  reducers: {
    switchTab: (state, action: PayloadAction<string>) => {
      const key: string = action.payload;
      state.currentTab = key;

      state.activeTabs.forEach((tab, index) => {
        state.activeTabs[index].isActive = false;
        if (tab.key === key) {
          state.activeTabs[index].isActive = true;
          state.currentLabel = tab.label;
        }
      });
    },
    increasePage: (state) => {
      state.page++;
    },
    decreasePage: (state) => {
      state.page--;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    increaseImageOnPage: (state) => {
      state.imageOnPage++;
    },
    decreaseImageOnPage: (state) => {
      state.imageOnPage--;
    },
    setImageOnPage: (state, action: PayloadAction<number>) => {
      state.imageOnPage = action.payload;
    },
    setCurrentLabel: (state, action: PayloadAction<string>) => {
      state.currentLabel = action.payload;
    },
  },
});

export const {
  increasePage,
  decreasePage,
  setPage,
  increaseImageOnPage,
  decreaseImageOnPage,
  setImageOnPage,
  switchTab,
  setCurrentLabel,
} = settingsSlice.actions;

export default settingsSlice.reducer;
