import React, { useContext } from "react"
import { IMessages } from "store/reducers/messagesSlice/messages.modal"
import { Context } from "../MailPage"
import CurrentMessage from "./CurrentMessage"
import MessageItem from "./MessageItem"
import useMailBlockBody from "hooks/useMailBlockBody"

interface MailBlockBodyProps {
  messagesList: IMessages[]
}

const MailBlockBody: React.FC<MailBlockBodyProps> = ({ messagesList }) => {
  const { selectedMessage } = useMailBlockBody()

  return (
    <div className='mail-block-body'>
      {!!selectedMessage ? (
        <CurrentMessage />
      ) : (
        <div className='messages-list'>
          {messagesList.map((message) => (
            <MessageItem key={message.id} message={message} />
          ))}
        </div>
      )}
    </div>
  )
}

export default MailBlockBody
