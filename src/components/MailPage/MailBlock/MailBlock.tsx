import React from "react"
import MailBlocHeader from "./MailBlocHeader"
import MailBlockBody from "./MailBlockBody"
import NewMessage from "./NewMessage"
import useMailBlock from "hooks/useMailBlock"

const MailBlock = () => {
  const { filteredMessage, newMessageIsShow } = useMailBlock()

  return (
    <div className='mail-block'>
      <MailBlocHeader messagesList={filteredMessage} />
      <MailBlockBody messagesList={filteredMessage} />
      {newMessageIsShow && <NewMessage />}
    </div>
  )
}

export default MailBlock
