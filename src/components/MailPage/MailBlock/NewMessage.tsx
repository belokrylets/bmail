import IconCloseNewMessage from "assets/icons/IconCloseNewMessage"
import Button from "components/UI/Button"
import NewMessageInput from "components/UI/NewMessageInput"
import NewMessageTextarea from "components/UI/NewMessageTextarea"
import React, { useContext, useState } from "react"
import { INewMessage } from "shared/modals/mailPage.modal"
import { Context } from "../MailPage"
import { useAppDispatch } from "hooks/redux"
import { actions as messagesActions } from "store/reducers/messagesSlice/messagesSlice"
import { IMessages } from "store/reducers/messagesSlice/messages.modal"
import { v4 } from "uuid"
import useNewMessage from "hooks/useNewMessage"

const NewMessage = () => {
  const {
    buttonDraftHandle,
    buttonSentHandle,
    buttonCloseHandle,
    newMessageHandle,
    newMassageState,
  } = useNewMessage()

  return (
    <div className='new-message'>
      <div className='new-message__header'>
        <span>
          {!!newMassageState.subject
            ? newMassageState.subject
            : "Новое сообщение"}
        </span>
        <div onClick={buttonCloseHandle} className='new-message__header-icons'>
          <IconCloseNewMessage />
        </div>
      </div>
      <NewMessageInput
        placeholder='Получатель'
        value={newMassageState.email}
        name='email'
        newMessageHandle={newMessageHandle}
      />
      <NewMessageInput
        placeholder='Тема'
        value={newMassageState.subject}
        name='subject'
        newMessageHandle={newMessageHandle}
      />
      <NewMessageTextarea
        placeholder='Сообщение'
        value={newMassageState.body}
        name='body'
        newMessageHandle={newMessageHandle}
      />
      <div className='new-message__button-group'>
        <Button isDisabled={!newMassageState.email} onClick={buttonSentHandle}>
          Отправить
        </Button>
        <Button
          isDisabled={
            !newMassageState.email &&
            !newMassageState.subject &&
            !newMassageState.body
          }
          onClick={buttonDraftHandle}>
          В черновики
        </Button>
      </div>
    </div>
  )
}

export default NewMessage
