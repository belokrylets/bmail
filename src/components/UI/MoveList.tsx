import { useAppDispatch, useAppSelector } from "hooks/redux"
import React from "react"
import { foldersSelector } from "store/reducers/foldersSlice/foldersSlice"
import {
  actions as messagesActions,
  messageSelector,
} from "store/reducers/messagesSlice/messagesSlice"

interface MoveListProps {
  ids: string[]
}

const MoveList: React.FC<MoveListProps> = ({ ids }) => {
  const dispatch = useAppDispatch()

  const allFolders = useAppSelector(foldersSelector.selectAll)
  const folders = useAppSelector(foldersSelector.selectEntities)
  const allMessages = useAppSelector(messageSelector.selectEntities)

  const moveHandle = (folder: string) => {
    const updatedMessages = ids.map((id) => {
      const currentMessage = allMessages[id]!
      return {
        id,
        changes: { ...currentMessage, folder: folders[folder]!.slug },
      }
    })

    dispatch(messagesActions.updateMessages(updatedMessages))
  }
  return (
    <div className="move__folder__list">
      {allFolders.map((folder) => (
        <div
          onClick={() => moveHandle(folder.id)}
          key={folder.id}
          className="move__folder__item"
        >
          {folder.title}
        </div>
      ))}
    </div>
  )
}

export default MoveList
