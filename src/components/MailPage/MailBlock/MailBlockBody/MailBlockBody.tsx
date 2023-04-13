import React from "react"
import { IMessages } from "store/reducers/messagesSlice/messages.modal"
import MessageItem from "../MessageItem/MessageItem"
import useMailBlockBody from "components/MailPage/MailBlock/MailBlockBody/useMailBlockBody"
import CurrentMessage from "../CurrentMessage/CurrentMessage";

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
