import { configureStore } from "@reduxjs/toolkit"
import messagesReducer from "./reducers/messagesSlice/messagesSlice"
import foldersReducer from "./reducers/foldersSlice/foldersSlice"

const store = configureStore({
  reducer: {
    messages: messagesReducer,
    folders: foldersReducer,
  },
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store
