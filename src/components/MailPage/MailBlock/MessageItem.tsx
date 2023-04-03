import IconClose from "assets/icons/IconClose"
import IconDelete from "assets/icons/IconDelete"
import IconOpen from "assets/icons/IconOpen"
import classNames from "classnames"
import Checkbox from "components/UI/Checkbox"
import { useAppDispatch } from "hooks/redux"
import React, { useContext } from "react"
import { IMessages } from "store/reducers/messagesSlice/messages.modal"
import { actions as messageActions } from "store/reducers/messagesSlice/messagesSlice"
import { Context } from "../MailPage"

interface MessageItemProps {
  message: IMessages
}

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  const { checkboxState, setCheckboxState, setSelectedMessage } =
    useContext(Context)
  const dispatch = useAppDispatch()

  const messageItemHandle = () => {
    setSelectedMessage(message.id)
  }

  const deleteHandle = () => {
    if (message.folder !== "cart") {
      const updatedMessage: IMessages = { ...message, folder: "cart" }
      dispatch(
        messageActions.updateMessage({
          id: message.id,
          changes: updatedMessage,
        })
      )
    } else {
      dispatch(messageActions.removeMessage(message.id))
    }
  }

  const messageStatusHandle = () => {
    const newStatus = message.status === "new" ? "read" : "new"
    const updatedMessage: IMessages = { ...message, status: newStatus }

    dispatch(
      messageActions.updateMessage({
        id: message.id,
        changes: updatedMessage,
      })
    )
  }

  const checkboxHandle = (e: { stopPropagation: () => void }) => {
    e.stopPropagation()
    setCheckboxState((prev) => {
      if (prev.includes(message.id)) {
        return prev.filter((id) => id !== message.id)
      }
      return [...prev, message.id]
    })
  }

  return (
    <div
      onClick={messageItemHandle}
      className={classNames("message__item", {
        closed: message.status === "new",
      })}>
      <div onClick={checkboxHandle}>
        <Checkbox isActive={checkboxState.includes(message.id)} />
      </div>
      <div className='message__item__address'>{message.contact.name}</div>
      <div className='message__item__message'>{message.messageBody}</div>
      <div className='message__item__date'>25 марта</div>
      <div
        onClick={(e) => e.stopPropagation()}
        className='message__item__interface'>
        <div onClick={deleteHandle}>
          <IconDelete />
        </div>
        <div onClick={messageStatusHandle}>
          {message.status === "new" ? <IconOpen /> : <IconClose />}
        </div>
      </div>
    </div>
  )
}

export default MessageItem
