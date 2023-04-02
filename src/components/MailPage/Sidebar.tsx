import IconCart from "assets/icons/IconCart"
import IconIncoming from "assets/icons/IconIncoming"
import IconNewMessage from "assets/icons/IconNewMessage"
import IconSent from "assets/icons/IconSent"
import classNames from "classnames"
import Button from "components/UI/Button"
import { useAppSelector } from "hooks/redux"
import React, { useContext } from "react"
import { foldersSelector } from "store/reducers/foldersSlice/foldersSlice"
import { Context } from "./MailPage"

const iconsMapping: { [key: string]: JSX.Element } = {
  incoming: <IconIncoming />,
  sent: <IconSent />,
  cart: <IconCart />,
  draft: <IconIncoming />,
  other: <IconIncoming />,
}

const Sidebar = () => {
  const { activeFolder, setActiveFolder, setCheckboxState } =
    useContext(Context)
  const allFolder = useAppSelector(foldersSelector.selectAll)

  const activeFolderHandle = (id: string) => {
    setActiveFolder(id)
    setCheckboxState([])
  }
  return (
    <aside className="sidebar">
      <div className="sidebar__new__message">
        <Button width="full">
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
          })}
        >
          {iconsMapping[folder.slug]}
          {folder.title}
        </div>
      ))}
    </aside>
  )
}

export default Sidebar
