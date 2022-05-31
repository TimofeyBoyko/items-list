import { configureStore } from "@reduxjs/toolkit";

import cardReducer from "./cardSlice";
import settingsReducer from "./settingsSlice";
import selectedCardReducer from "./selectedCardSlice";

export const store = configureStore({
  reducer: {
    CardList: cardReducer,
    Settings: settingsReducer,
    SelectedCard: selectedCardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
