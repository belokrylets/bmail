import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "./reducers/messagesSlice/messagesSlice";
import foldersReducer from "./reducers/foldersSlice/foldersSlice";
import navbarReducer from "./reducers/navbarSlice/navbarSlice";

const store = configureStore({
  reducer: {
    messages: messagesReducer,
    folders: foldersReducer,
    navbar: navbarReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
