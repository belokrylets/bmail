import { createSlice, createEntityAdapter } from "@reduxjs/toolkit"
import { RootState } from "store/store"
import { IFolders } from "./foldersSlice.modal"

const foldersAdapter = createEntityAdapter<IFolders>()
const initialState = foldersAdapter.getInitialState({
  ids: [
    "e2545fe2-0f42-4073-afd8-0cce07476d41",
    "bed2d794-f29e-4395-bdd3-3266777dfe91",
    "4e6a7948-f80e-435e-89fd-5164f3def134",
    "0e5abfea-48d0-463a-8da6-eb92ac02566d",
  ],
  entities: {
    "e2545fe2-0f42-4073-afd8-0cce07476d41": {
      id: "e2545fe2-0f42-4073-afd8-0cce07476d41",
      title: "Входящие",
      slug: "incoming",
    },
    "bed2d794-f29e-4395-bdd3-3266777dfe91": {
      id: "bed2d794-f29e-4395-bdd3-3266777dfe91",
      title: "Отправленные",
      slug: "sent",
    },
    "4e6a7948-f80e-435e-89fd-5164f3def134": {
      id: "4e6a7948-f80e-435e-89fd-5164f3def134",
      title: "Черновики",
      slug: "draft",
    },
    "0e5abfea-48d0-463a-8da6-eb92ac02566d": {
      id: "0e5abfea-48d0-463a-8da6-eb92ac02566d",
      title: "Удаленные",
      slug: "cart",
    },
  },
})

const foldersSlice = createSlice({
  name: "folders",
  initialState,
  reducers: {
    newFolder: foldersAdapter.addOne,
    updateFolder: foldersAdapter.updateOne,
    removeFolder: foldersAdapter.removeOne,
  },
})

export const { actions } = foldersSlice
export const foldersSelector = foldersAdapter.getSelectors(
  (state: RootState) => state.folders
)
export default foldersSlice.reducer
