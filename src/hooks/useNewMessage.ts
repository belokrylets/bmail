import { useContext, useState } from "react"
import { useAppDispatch } from "hooks/redux"
import { actions as messagesActions } from "store/reducers/messagesSlice/messagesSlice"
import { IMessages } from "store/reducers/messagesSlice/messages.modal"
import { v4 } from "uuid"
import { Context } from "components/MailPage/MailPage"
import useInput from "./UIHooks/useInput"
import {
  emailValid,
  messagesValid,
  subjectValid,
} from "shared/validations/validations"

const useNewMessage = () => {
  const dispatch = useAppDispatch()

  const subjectHandle = useInput("", subjectValid)
  const emailHandle = useInput("", emailValid)
  const bodyHandle = useInput("", messagesValid)
  const { setNewMessageIsShow } = useContext(Context)

  const buttonCloseHandle = () => {
    setNewMessageIsShow(false)
    subjectHandle.changeState("")
    emailHandle.changeState("")
    bodyHandle.changeState("")
  }

  const buttonSentHandle = () => {
    const newMassage: IMessages = {
      id: v4(),
      contact: {
        email: emailHandle.value,
        name: emailHandle.value,
      },
      date: `${Date.now}`,
      messageBody: bodyHandle.value,
      status: "read",
      folder: "sent",
      subject: subjectHandle.value,
    }
    dispatch(messagesActions.addMessage(newMassage))
    subjectHandle.changeState("")
    emailHandle.changeState("")
    bodyHandle.changeState("")
    setNewMessageIsShow(false)
  }

  const buttonDraftHandle = () => {
    const newMassage: IMessages = {
      id: v4(),
      contact: {
        email: emailHandle.value,
        name: emailHandle.value,
      },
      date: `${Date.now}`,
      messageBody: bodyHandle.value,
      status: "read",
      folder: "draft",
      subject: subjectHandle.value,
    }
    dispatch(messagesActions.addMessage(newMassage))
    subjectHandle.changeState("")
    emailHandle.changeState("")
    bodyHandle.changeState("")
    setNewMessageIsShow(false)
  }

  return {
    buttonDraftHandle,
    buttonSentHandle,
    buttonCloseHandle,
    subjectHandle,
    emailHandle,
    bodyHandle,
  }
}

export default useNewMessage
