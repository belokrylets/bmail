import { createAsyncThunk } from "@reduxjs/toolkit"
import { $host } from "api"

export const fetchAllMessages = createAsyncThunk(
  "messages/fetchAllMessages",
  async (_, thunkApi) => {
    try {
      const response = await $host.get(`messages`)
      const messages = response.data
      return messages
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)
