import Button from "components/UI/Button"
import React from "react"
import { IMessages } from "store/reducers/messagesSlice/messages.modal"

interface CurrentMessageProps {
  messageId: string
}

const CurrentMessage: React.FC<CurrentMessageProps> = ({ messageId }) => {
  return (
    <div className="current__message">
      <div className="current__message__subject">(без темы)</div>
      <div className="current__message__info">current__message__info</div>
      <div className="current__message__body">current__message__body</div>
      <div className="current__message__buttons">
        <Button variant="inline">Ответить</Button>
        <Button variant="inline">Переслать</Button>
      </div>
    </div>
  )
}

export default CurrentMessage
