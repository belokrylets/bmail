import React from "react"
import MailBlockBody from "./MailBlockBody/MailBlockBody"
import NewMessage from "./NewMessage/NewMessage"
import useMailBlock from "components/MailPage/MailBlock/useMailBlock"
import MailBlocHeader from "./MailBlocHeader/MailBlocHeader";

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
