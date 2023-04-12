import { Context } from "components/MailPage/MailPage"
import { useAppSelector } from "hooks/redux"
import { useContext } from "react"
import { foldersSelector } from "store/reducers/foldersSlice/foldersSlice"
import { messageSelector } from "store/reducers/messagesSlice/messagesSlice"
const useMailBlock = () => {
  const { activeFolderId, searchHandle, newMessageIsShow } = useContext(Context)

  const allMessage = useAppSelector(messageSelector.selectAll)
  const folders = useAppSelector(foldersSelector.selectEntities)

  const filteredMessage = allMessage
    .filter((message) => message.folder === folders[activeFolderId]?.slug)
    .filter((message) =>
      message.contact.name
        .toLocaleLowerCase()
        .includes(searchHandle.value.toLocaleLowerCase())
    )
  return {
    filteredMessage,
    newMessageIsShow,
  }
}

export default useMailBlock
