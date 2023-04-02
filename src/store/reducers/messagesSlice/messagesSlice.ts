import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit"
import { RootState } from "store/store"
import { fetchAllMessages } from "./actions"
import { IMessages } from "./messages.modal"

const messageAdapter = createEntityAdapter<IMessages>()
const initialState = messageAdapter.getInitialState()

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage: messageAdapter.addOne,
    updateMessage: messageAdapter.updateOne,
    updateMessages: messageAdapter.updateMany,
    removeMessage: messageAdapter.removeOne,
    removeMessages: messageAdapter.removeMany,
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchAllMessages.fulfilled,
      (state, action: PayloadAction<IMessages[]>) => {
        messageAdapter.addMany(state, action.payload)
      }
    )
  },
})

export const messageSelector = messageAdapter.getSelectors(
  (state: RootState) => state.messages
)

export const { actions } = messagesSlice
export default messagesSlice.reducer
