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
import useSidebar from "hooks/useSidebar"

const iconsMapping: { [key: string]: JSX.Element } = {
  incoming: <IconIncoming />,
  sent: <IconSent />,
  cart: <IconCart />,
  draft: <IconIncoming />,
  other: <IconFolder />,
}

const Sidebar = () => {
  const {
    activeFolder,
    activeFolderHandle,
    allFolder,
    buttonHandle,
    changeFolderHandle,
    changeHandle,
    deleteFolderHandle,
    isChangeMode,
    newFolderHandle,
    successHandle,
    newFolder,
  } = useSidebar()

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
