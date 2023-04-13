import Button from "components/UI/Button"
import React from "react"
import MoveList from "components/UI/MoveList/MoveList"
import useCurrentMessage from "./useCurrentMessage"
import IconBtn from "components/UI/IconBtn"

const CurrentMessage = () => {
  const {
    deleteHandle,
    showMoveListHandle,
    message,
    selectedMessage,
    isShowMoveList,
  } = useCurrentMessage()
  return (
    <div className='current-message'>
      <div className='current-message__subject'>
        {!!message.subject ? message.subject : "(без темы)"}
        <div className='current-message__subject-interface'>
          <IconBtn onClick={deleteHandle} type='delete' />

          <div className='folder-icon'>
            <IconBtn onClick={showMoveListHandle} type='folder' />
            {isShowMoveList && <MoveList ids={[selectedMessage]} />}
          </div>
        </div>
      </div>
      <div className='current-message__info'>{message.contact.email}</div>
      <div className='current-message__body'>{message.messageBody}</div>
      <div className='current-message__buttons'>
        <Button variant='inline'>Ответить</Button>
        <Button variant='inline'>Переслать</Button>
      </div>
    </div>
  )
}

export default CurrentMessage
