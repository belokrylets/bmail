import Button from "components/UI/Button"
import React, { useContext, useEffect, useState } from "react"
import { IMessages } from "store/reducers/messagesSlice/messages.modal"
import { Context } from "../MailPage"
import { useAppDispatch, useAppSelector } from "hooks/redux"
import { messageSelector } from "store/reducers/messagesSlice/messagesSlice"
import { actions as messageActions } from "store/reducers/messagesSlice/messagesSlice"
import IconDelete from "assets/icons/IconDelete"
import IconFolder from "assets/icons/IconFolder"
import MoveList from "components/UI/MoveList"

const CurrentMessage = () => {
  const dispatch = useAppDispatch()
  const { selectedMessage, setSelectedMessage } = useContext(Context)
  const [message, setMessage] = useState<IMessages>({
    id: "",
    contact: {
      email: "",
      name: "",
    },
    date: "",
    folder: "",
    messageBody: "",
    status: "",
    subject: "",
  } as IMessages)
  const allMessages = useAppSelector(messageSelector.selectEntities)
  const [isShowMoveList, setIsShowMoveList] = useState(false)
  useEffect(() => {
    setMessage({ ...allMessages[selectedMessage]! })
    dispatch(
      messageActions.updateMessage({
        id: selectedMessage,
        changes: { ...allMessages[selectedMessage]!, status: "read" },
      })
    )
  }, [])

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
    setSelectedMessage("")
  }

  const showMoveListHandle = () => {
    setIsShowMoveList((prev) => !prev)
  }
  return (
    <div className="current__message">
      <div className="current__message__subject">
        {!!message.subject ? message.subject : "(без темы)"}
        <div className="current__message__subject__interface">
          <div onClick={deleteHandle}>
            <IconDelete />
          </div>
          <div onClick={showMoveListHandle} className="folder__icon">
            <IconFolder />
            {isShowMoveList && <MoveList ids={[selectedMessage]} />}
          </div>
        </div>
      </div>
      <div className="current__message__info">{message.contact.email}</div>
      <div className="current__message__body">{message.messageBody}</div>
      <div className="current__message__buttons">
        <Button variant="inline">Ответить</Button>
        <Button variant="inline">Переслать</Button>
      </div>
    </div>
  )
}

export default CurrentMessage
