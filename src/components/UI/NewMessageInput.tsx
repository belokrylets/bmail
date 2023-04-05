import React from "react"

interface NewMessageInputProps {
  placeholder: string
  value: string
  name: string
  newMessageHandle: (e: {
    target: {
      name: string
      value: string
    }
  }) => void
}

const NewMessageInput: React.FC<NewMessageInputProps> = ({
  placeholder,
  value,
  name,
  newMessageHandle,
}) => {
  return (
    <div className='new-message-input'>
      <input
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={(e) => newMessageHandle(e)}
      />
    </div>
  )
}

export default NewMessageInput
