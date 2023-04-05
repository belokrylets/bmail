import { useAppSelector } from "hooks/redux"
import React, { useContext } from "react"
import { foldersSelector } from "store/reducers/foldersSlice/foldersSlice"
import { messageSelector } from "store/reducers/messagesSlice/messagesSlice"
import { Context } from "../MailPage"
import MailBlocHeader from "./MailBlocHeader"
import MailBlockBody from "./MailBlockBody"
import NewMessage from "./NewMessage"

const MailBlock = () => {
  const { activeFolder, searchState, newMessageIsShow } = useContext(Context)

  const allMessage = useAppSelector(messageSelector.selectAll)
  const folders = useAppSelector(foldersSelector.selectEntities)

  const filteredMessage = allMessage
    .filter((message) => message.folder === folders[activeFolder]?.slug)
    .filter((message) =>
      message.contact.name
        .toLocaleLowerCase()
        .includes(searchState.toLocaleLowerCase())
    )

  return (
    <div className='mail-block'>
      <MailBlocHeader messagesList={filteredMessage} />
      <MailBlockBody messagesList={filteredMessage} />
      {newMessageIsShow && <NewMessage />}
    </div>
  )
}

export default MailBlock
