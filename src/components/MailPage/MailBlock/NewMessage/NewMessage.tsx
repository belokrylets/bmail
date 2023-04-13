import Button from "components/UI/Button"
import IconBtn from "components/UI/IconBtn"
import NewMessageInput from "components/UI/NewMessageInput"
import NewMessageTextarea from "components/UI/NewMessageTextarea"
import useNewMessage from "components/MailPage/MailBlock/NewMessage/useNewMessage"

const NewMessage = () => {
  const {
    buttonDraftHandle,
    buttonSentHandle,
    subjectHandle,
    emailHandle,
    bodyHandle,
    buttonCloseHandle,
  } = useNewMessage()

  return (
    <div className='new-message'>
      <div className='new-message__header'>
        <span>
          {!!subjectHandle.value ? subjectHandle.value : "Новое сообщение"}
        </span>
        <IconBtn
          classes='new-message__header-icons'
          onClick={buttonCloseHandle}
          type='closeNewMessage'
        />
      </div>
      <NewMessageInput
        placeholder='Получатель'
        value={emailHandle.value}
        name='email'
        newMessageHandle={emailHandle.onChange}
      />
      <NewMessageInput
        placeholder='Тема'
        value={subjectHandle.value}
        name='subject'
        newMessageHandle={subjectHandle.onChange}
      />
      <NewMessageTextarea
        placeholder='Сообщение'
        value={bodyHandle.value}
        name='body'
        newMessageHandle={bodyHandle.onChange}
      />
      <div className='new-message__button-group'>
        <Button isDisabled={!emailHandle.value} onClick={buttonSentHandle}>
          Отправить
        </Button>
        <Button
          isDisabled={
            !emailHandle.value && !subjectHandle.value && !bodyHandle.value
          }
          onClick={buttonDraftHandle}>
          В черновики
        </Button>
      </div>
    </div>
  )
}

export default NewMessage
