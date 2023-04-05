import React, { useContext, useState } from "react"
import { INewMessage } from "shared/modals/mailPage.modal"
import { useAppDispatch } from "hooks/redux"
import { actions as messagesActions } from "store/reducers/messagesSlice/messagesSlice"
import { IMessages } from "store/reducers/messagesSlice/messages.modal"
import { v4 } from "uuid"
import { Context } from "components/MailPage/MailPage"

const useNewMessage = () => {
  const dispatch = useAppDispatch()

  const [newMassageState, setNewMassageState] = useState<INewMessage>({
    subject: "",
    email: "",
    body: "",
  })
  const { setNewMessageIsShow } = useContext(Context)

  const newMessageHandle = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target
    setNewMassageState((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const buttonCloseHandle = () => {
    setNewMessageIsShow(false)
    setNewMassageState({ subject: "", email: "", body: "" })
  }

  const buttonSentHandle = () => {
    const newMassage: IMessages = {
      id: v4(),
      contact: {
        email: newMassageState.email,
        name: newMassageState.email,
      },
      date: `${Date.now}`,
      messageBody: newMassageState.body,
      status: "read",
      folder: "sent",
      subject: newMassageState.subject,
    }
    dispatch(messagesActions.addMessage(newMassage))
    setNewMassageState({ subject: "", email: "", body: "" })
    setNewMessageIsShow(false)
  }

  const buttonDraftHandle = () => {
    const newMassage: IMessages = {
      id: v4(),
      contact: {
        email: newMassageState.email,
        name: newMassageState.email,
      },
      date: `${Date.now}`,
      messageBody: newMassageState.body,
      status: "read",
      folder: "draft",
      subject: newMassageState.subject,
    }
    dispatch(messagesActions.addMessage(newMassage))
    setNewMassageState({ subject: "", email: "", body: "" })
    setNewMessageIsShow(false)
  }

  return {
    buttonDraftHandle,
    buttonSentHandle,
    buttonCloseHandle,
    newMessageHandle,
    newMassageState,
  }
}

export default useNewMessage
