import useMoveList from "hooks/UIHooks/useMoveList"
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
  const { allFolders, moveHandle } = useMoveList(ids)

  return (
    <div className='move-folder-list'>
      {allFolders.map((folder) => (
        <div
          onClick={() => moveHandle(folder.id)}
          key={folder.id}
          className='move-folder-list__item'>
          {folder.title}
        </div>
      ))}
    </div>
  )
}

export default MoveList
