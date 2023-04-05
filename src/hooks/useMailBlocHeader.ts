import React, { useContext, useState } from "react"
import { useAppDispatch, useAppSelector } from "./redux"
import { Context } from "components/MailPage/MailPage"
import { foldersSelector } from "store/reducers/foldersSlice/foldersSlice"
import {
  actions as messagesActions,
  messageSelector,
} from "store/reducers/messagesSlice/messagesSlice"
import { IMessages } from "store/reducers/messagesSlice/messages.modal"

const useMailBlocHeader = (messagesList: IMessages[]) => {
  const dispatch = useAppDispatch()

  const {
    checkboxState,
    setCheckboxState,
    activeFolder,
    selectedMessage,
    setSelectedMessage,
  } = useContext(Context)

  const folders = useAppSelector(foldersSelector.selectEntities)
  const allMessages = useAppSelector(messageSelector.selectEntities)

  const [isShowMoveList, setIsShowMoveList] = useState(false)

  const checkboxHandle = () => {
    setCheckboxState((prev) => {
      if (prev.length === messagesList.length) {
        return []
      }
      return messagesList.map((message) => message.id)
    })
  }

  const deleteHandle = () => {
    if (folders[activeFolder]!.slug === "cart") {
      dispatch(messagesActions.removeMessages(checkboxState))
      setCheckboxState([])
    } else {
      const updatedMessages = checkboxState.map((id) => {
        const currentMessage = allMessages[id]!
        return { id, changes: { ...currentMessage, folder: "cart" } }
      })
      dispatch(messagesActions.updateMessages(updatedMessages))
    }
  }

  const readMessagesHandle = () => {
    const updatedMessages = checkboxState.map((id) => {
      const currentMessage = allMessages[id]!
      return { id, changes: { ...currentMessage, status: "read" } }
    })
    dispatch(messagesActions.updateMessages(updatedMessages))
  }

  const backHandle = () => {
    setSelectedMessage("")
  }

  const showMoveListHandle = () => {
    setIsShowMoveList((prev) => !prev)
  }

  return {
    checkboxHandle,
    deleteHandle,
    backHandle,
    showMoveListHandle,
    readMessagesHandle,
    isShowMoveList,
    selectedMessage,
    checkboxState,
  }
}

export default useMailBlocHeader
