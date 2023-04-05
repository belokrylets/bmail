import IconClose from "assets/icons/IconClose"
import IconDelete from "assets/icons/IconDelete"
import IconOpen from "assets/icons/IconOpen"
import classNames from "classnames"
import Checkbox from "components/UI/Checkbox"
import React from "react"
import getDate from "shared/utils/getDate"
import { IMessages } from "store/reducers/messagesSlice/messages.modal"
import useMessageItem from "hooks/useMessageItem"

interface MessageItemProps {
  message: IMessages
}

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  const {
    checkboxHandle,
    messageStatusHandle,
    deleteHandle,
    messageItemHandle,
    checkboxState,
  } = useMessageItem(message)

  return (
    <div
      onClick={messageItemHandle}
      className={classNames("message-item", {
        "message-item_closed": message.status === "new",
      })}>
      <div onClick={checkboxHandle}>
        <Checkbox isActive={checkboxState.includes(message.id)} />
      </div>
      <div className='message-item__address'>{message.contact.name}</div>
      <div className='message-item__message'>{message.messageBody}</div>
      <div className='message-item__date'>{getDate(message.date)}</div>
      <div
        onClick={(e) => e.stopPropagation()}
        className='message-item__interface'>
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
