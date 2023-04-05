import { useAppDispatch, useAppSelector } from "hooks/redux"
import { foldersSelector } from "store/reducers/foldersSlice/foldersSlice"
import {
  actions as messagesActions,
  messageSelector,
} from "store/reducers/messagesSlice/messagesSlice"

const useMoveList = (ids: string[]) => {
  const dispatch = useAppDispatch()

  const allFolders = useAppSelector(foldersSelector.selectAll)
  const allMessages = useAppSelector(messageSelector.selectEntities)

  const moveHandle = (folder: string) => {
    const updatedMessages = ids.map((id) => {
      const currentMessage = allMessages[id]!
      return {
        id,
        changes: { ...currentMessage, folder },
      }
    })

    dispatch(messagesActions.updateMessages(updatedMessages))
  }
  return { allFolders, moveHandle }
}

export default useMoveList
