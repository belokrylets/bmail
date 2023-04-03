import IconDelete from "assets/icons/IconDelete"
import IconFolder from "assets/icons/IconFolder"
import IconOpen from "assets/icons/IconOpen"
import Checkbox from "components/UI/Checkbox"
import { useAppDispatch, useAppSelector } from "hooks/redux"
import React, { useContext } from "react"
import { foldersSelector } from "store/reducers/foldersSlice/foldersSlice"
import { IMessages } from "store/reducers/messagesSlice/messages.modal"
import {
  actions as messagesActions,
  messageSelector,
} from "store/reducers/messagesSlice/messagesSlice"
import { Context } from "../MailPage"
import MainBlockSearch from "./MainBlockSearch"
import IconBack from "assets/icons/IconBack"

interface MailBlocHeaderProps {
  messagesList: IMessages[]
}

const MailBlocHeader: React.FC<MailBlocHeaderProps> = ({ messagesList }) => {
  const {
    checkboxState,
    setCheckboxState,
    activeFolder,
    selectedMessage,
    setSelectedMessage,
  } = useContext(Context)
  const folders = useAppSelector(foldersSelector.selectEntities)
  const allMessages = useAppSelector(messageSelector.selectEntities)
  const dispatch = useAppDispatch()

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
  return (
    <div className='mail__block__header'>
      <div className='mail__block__header__interface header__interface'>
        {!!selectedMessage ? (
          <div onClick={backHandle} className='header__interface__menu'>
            <IconBack />
          </div>
        ) : (
          <div onClick={checkboxHandle}>
            <Checkbox
              isActive={
                messagesList.length === checkboxState.length &&
                !!checkboxState.length
              }
            />
          </div>
        )}
        {!!checkboxState.length && (
          <div className='header__interface__menu'>
            <div onClick={readMessagesHandle}>
              <IconOpen />
            </div>
            <div onClick={deleteHandle}>
              <IconDelete />
            </div>
            <div>
              <IconFolder />
            </div>
          </div>
        )}
      </div>
      <MainBlockSearch />
    </div>
  )
}

export default MailBlocHeader
