import { useAppSelector } from "hooks/redux"
import React, { useContext } from "react"
import { foldersSelector } from "store/reducers/foldersSlice/foldersSlice"
import { IMessages } from "store/reducers/messagesSlice/messages.modal"
import { messageSelector } from "store/reducers/messagesSlice/messagesSlice"
import { Context } from "../MailPage"
import CurrentMessage from "./CurrentMessage"
import MessageItem from "./MessageItem"

interface MailBlockBodyProps {
  messagesList: IMessages[]
}

const MailBlockBody: React.FC<MailBlockBodyProps> = ({ messagesList }) => {
  const { selectedMessage } = useContext(Context)
  return (
    <div className='mail__block__body'>
      {!!selectedMessage ? (
        <CurrentMessage />
      ) : (
        <div className='messages__list'>
          {messagesList.map((message) => (
            <MessageItem key={message.id} message={message} />
          ))}
        </div>
      )}
    </div>
  )
}

export default MailBlockBody
