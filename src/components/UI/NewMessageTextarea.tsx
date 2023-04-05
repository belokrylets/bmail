import React from "react"

interface NewMessageTextareaProps {
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

const NewMessageTextarea: React.FC<NewMessageTextareaProps> = ({
  placeholder,
  value,
  name,
  newMessageHandle,
}) => {
  return (
    <div className='new-message-textarea'>
      <textarea
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={newMessageHandle}
      />
    </div>
  )
}

export default NewMessageTextarea
