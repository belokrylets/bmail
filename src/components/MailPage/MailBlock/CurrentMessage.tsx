import Button from "components/UI/Button"
import React from "react"
import IconDelete from "assets/icons/IconDelete"
import IconFolder from "assets/icons/IconFolder"
import MoveList from "components/UI/MoveList"
import useCurrentMessage from "hooks/useCurrentMessage"

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
          <div onClick={deleteHandle}>
            <IconDelete />
          </div>
          <div onClick={showMoveListHandle} className='folder-icon'>
            <IconFolder />
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
