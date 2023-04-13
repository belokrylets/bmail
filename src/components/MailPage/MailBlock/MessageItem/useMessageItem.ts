import { Context } from "components/MailPage/MailPage"
import { useContext } from "react"
import { IMessages } from "store/reducers/messagesSlice/messages.modal"
import { actions as messageActions } from "store/reducers/messagesSlice/messagesSlice"
import { useAppDispatch } from "../../../../hooks/redux"

const useMessageItem = (message: IMessages) => {
  const dispatch = useAppDispatch()

  const { checkboxState, setCheckboxState, setSelectedMessage } =
    useContext(Context)

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
  return {
    checkboxHandle,
    messageStatusHandle,
    deleteHandle,
    messageItemHandle,
    checkboxState,
  }
}

export default useMessageItem
