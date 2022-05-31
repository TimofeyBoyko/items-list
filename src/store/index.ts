import { configureStore } from "@reduxjs/toolkit";

import cardReducer from "./cardSlice";
import settingsReducer from "./settingsSlice";

export const store = configureStore({
  reducer: {
    CardList: cardReducer,
    Settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
