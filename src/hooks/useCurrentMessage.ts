import { useContext, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "./redux"
import { Context } from "components/MailPage/MailPage"
import { IMessages } from "store/reducers/messagesSlice/messages.modal"
import { messageSelector } from "store/reducers/messagesSlice/messagesSlice"
import { actions as messageActions } from "store/reducers/messagesSlice/messagesSlice"

const useCurrentMessage = () => {
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

  return {
    showMoveListHandle,
    deleteHandle,
    message,
    selectedMessage,
    isShowMoveList,
  }
}

export default useCurrentMessage
