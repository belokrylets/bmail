import { useContext, useState } from "react"
import { useAppDispatch, useAppSelector } from "./redux"
import { Context } from "components/MailPage/MailPage"
import {
  actions as folderActions,
  foldersSelector,
} from "store/reducers/foldersSlice/foldersSlice"
import { v4 } from "uuid"
import getTranslit from "shared/utils/getTranslit"

const useSidebar = () => {
  const dispatch = useAppDispatch()

  const [isChangeMode, setIsChangeMode] = useState(false)
  const [newFolder, setNewFolder] = useState("")
  const [changeFolder, setChangeFolder] = useState("")

  const {
    activeFolder,
    setActiveFolder,
    setCheckboxState,
    setNewMessageIsShow,
    setSelectedMessage,
  } = useContext(Context)

  const allFolder = useAppSelector(foldersSelector.selectAll)
  const FolderEntities = useAppSelector(foldersSelector.selectEntities)

  const activeFolderHandle = (id: string) => {
    setActiveFolder(id)
    setCheckboxState([])
    setSelectedMessage("")
  }

  const buttonHandle = () => {
    setNewMessageIsShow(true)
  }

  const changeHandle = () => {
    setIsChangeMode((prev) => !prev)
  }

  const newFolderHandle = (e: { target: { value: string } }) => {
    setNewFolder(e.target.value)
  }
  const deleteFolderHandle = (id: string) => {
    dispatch(folderActions.removeFolder(id))
  }
  const successHandle = () => {
    if (!!changeFolder) {
      dispatch(
        folderActions.updateFolder({
          id: changeFolder,
          changes: {
            ...FolderEntities[changeFolder]!,
            title: newFolder,
            slug: getTranslit(newFolder),
          },
        })
      )
    } else {
      dispatch(
        folderActions.newFolder({
          id: v4(),
          slug: getTranslit(newFolder),
          title: newFolder,
        })
      )
    }
    setChangeFolder("")
    setNewFolder("")
  }

  const changeFolderHandle = (id: string) => {
    setChangeFolder(id)
    setNewFolder(FolderEntities[id]!.title)
  }
  return {
    activeFolderHandle,
    changeFolderHandle,
    successHandle,
    deleteFolderHandle,
    newFolderHandle,
    changeHandle,
    buttonHandle,
    isChangeMode,
    activeFolder,
    allFolder,
    newFolder,
  }
}

export default useSidebar
