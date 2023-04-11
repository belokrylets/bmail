import Button from "components/UI/Button"
import IconBtn from "components/UI/IconBtn"
import NewMessageInput from "components/UI/NewMessageInput"
import NewMessageTextarea from "components/UI/NewMessageTextarea"
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
        <IconBtn
          classes='new-message__header-icons'
          onClick={buttonCloseHandle}
          type='closeNewMessage'
        />
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
