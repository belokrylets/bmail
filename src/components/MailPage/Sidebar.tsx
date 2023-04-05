import IconCart from "assets/icons/IconCart"
import IconCloseNewMessage from "assets/icons/IconCloseNewMessage"
import IconFolder from "assets/icons/IconFolder"
import IconIncoming from "assets/icons/IconIncoming"
import IconNewMessage from "assets/icons/IconNewMessage"
import IconPen from "assets/icons/IconPen"
import IconSent from "assets/icons/IconSent"
import IconSuccess from "assets/icons/IconSuccess"
import classNames from "classnames"
import Button from "components/UI/Button"
import { useAppDispatch, useAppSelector } from "hooks/redux"
import React, { useContext, useState } from "react"
import {
  actions as folderActions,
  foldersSelector,
} from "store/reducers/foldersSlice/foldersSlice"
import { v4 } from "uuid"
import { Context } from "./MailPage"

const iconsMapping: { [key: string]: JSX.Element } = {
  incoming: <IconIncoming />,
  sent: <IconSent />,
  cart: <IconCart />,
  draft: <IconIncoming />,
  other: <IconFolder />,
}

const Sidebar = () => {
  const dispatch = useAppDispatch()

  const [isChangeMode, setIsChangeMode] = useState(false)
  const [newFolder, setNewFolder] = useState("")
  const [changeFolder, setChangeFolder] = useState("")

  const {
    activeFolder,
    setActiveFolder,
    setCheckboxState,
    setNewMessageIsShow,
    setSelectedMessage,
  } = useContext(Context)

  const allFolder = useAppSelector(foldersSelector.selectAll)
  const FolderEntities = useAppSelector(foldersSelector.selectEntities)

  const activeFolderHandle = (id: string) => {
    setActiveFolder(id)
    setCheckboxState([])
    setSelectedMessage("")
  }

  const buttonHandle = () => {
    setNewMessageIsShow(true)
  }

  const changeHandle = () => {
    setIsChangeMode((prev) => !prev)
  }

  const newFolderHandle = (e: { target: { value: string } }) => {
    setNewFolder(e.target.value)
  }
  const deleteFolderHandle = (id: string) => {
    dispatch(folderActions.removeFolder(id))
  }
  const successHandle = () => {
    if (!!changeFolder) {
      dispatch(
        folderActions.updateFolder({
          id: changeFolder,
          changes: { ...FolderEntities[changeFolder]!, title: newFolder },
        })
      )
    } else {
      dispatch(
        folderActions.newFolder({
          id: v4(),
          slug: "other",
          title: newFolder,
        })
      )
    }
    setChangeFolder("")
    setNewFolder("")
  }

  const changeFolderHandle = (id: string) => {
    setChangeFolder(id)
    setNewFolder(FolderEntities[id]!.title)
  }

  return (
    <aside className='sidebar'>
      <div className='sidebar__new-message'>
        <Button onClick={buttonHandle} width='full'>
          <IconNewMessage /> Написать
        </Button>
      </div>
      {allFolder.map((folder) => (
        <div
          onClick={() => {
            activeFolderHandle(folder.id)
          }}
          key={folder.id}
          className={classNames("sidebar__item", {
            active: folder.id === activeFolder,
          })}>
          {iconsMapping[folder.slug]}
          {folder.title}
          {folder.slug === "other" && isChangeMode && (
            <div className='sidebar__item-interface'>
              <span onClick={() => changeFolderHandle(folder.id)}>
                <IconPen />
              </span>
              <span onClick={() => deleteFolderHandle(folder.id)}>
                <IconCloseNewMessage />
              </span>
            </div>
          )}
        </div>
      ))}

      {isChangeMode && (
        <div className='sidebar__new-folder'>
          <input
            placeholder='Название папки'
            type='folder'
            value={newFolder}
            onChange={newFolderHandle}
          />
          <div onClick={successHandle}>
            <IconSuccess />
          </div>
        </div>
      )}
      <Button onClick={changeHandle} variant={"inline"} width='full'>
        {isChangeMode ? "Сохранить" : "Изменить"}
      </Button>
    </aside>
  )
}

export default Sidebar
