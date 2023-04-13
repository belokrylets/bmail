import useMoveList from "components/UI/MoveList/useMoveList"
import React from "react"

interface MoveListProps {
  ids: string[]
}

const MoveList: React.FC<MoveListProps> = ({ ids }) => {
  const { allFolders, moveHandle } = useMoveList(ids)

  return (
    <div className='move-folder-list'>
      {allFolders.map((folder) => (
        <div
          onClick={() => moveHandle(folder.slug)}
          key={folder.id}
          className='move-folder-list__item'>
          {folder.title}
        </div>
      ))}
    </div>
  )
}

export default MoveList
