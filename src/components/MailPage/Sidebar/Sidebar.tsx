import IconCart from "assets/icons/IconCart";
import IconFolder from "assets/icons/IconFolder";
import IconIncoming from "assets/icons/IconIncoming";
import IconNewMessage from "assets/icons/IconNewMessage";
import IconSent from "assets/icons/IconSent";
import classNames from "classnames";
import Button from "components/UI/Button";
import IconBtn from "components/UI/IconBtn";
import useSidebar from "components/MailPage/Sidebar/useSidebar";

const iconsMapping: { [key: string]: JSX.Element } = {
  incoming: <IconIncoming />,
  sent: <IconSent />,
  cart: <IconCart />,
  draft: <IconIncoming />,
  other: <IconFolder />,
};

const Sidebar = () => {
  const {
    activeFolderId,
    activeFolderHandle,
    allFolder,
    buttonHandle,
    changeFolderHandle,
    changeHandle,
    deleteFolderHandle,
    isChangeMode,
    newFolderHandle,
    successHandle,
    isShowSidebar,
  } = useSidebar();

  return (
    <>
      <aside
        className={classNames("sidebar", {
          sidebar_active: isShowSidebar,
        })}
      >
        <div className="sidebar__new-message">
          <Button onClick={buttonHandle} width="full">
            <IconNewMessage /> Написать
          </Button>
        </div>
        {allFolder.map((folder) => (
          <div
            onClick={() => {
              activeFolderHandle(folder.id);
            }}
            key={folder.id}
            className={classNames("sidebar__item", {
              active: folder.id === activeFolderId,
            })}
          >
            {iconsMapping[folder.slug]
              ? iconsMapping[folder.slug]
              : iconsMapping.other}
            {folder.title}
            {!iconsMapping[folder.slug] && isChangeMode && (
              <div className="sidebar__item-interface">
                <IconBtn
                  onClick={() => changeFolderHandle(folder.id)}
                  type="pen"
                />
                <IconBtn
                  onClick={() => deleteFolderHandle(folder.id)}
                  type="closeNewMessage"
                />
              </div>
            )}
          </div>
        ))}

        {isChangeMode && (
          <div className="sidebar__new-folder">
            <input
              placeholder="Название папки"
              type="folder"
              value={newFolderHandle.value}
              onChange={newFolderHandle.onChange}
            />
            <IconBtn onClick={successHandle} type="success" />
          </div>
        )}
        <Button onClick={changeHandle} variant={"inline"} width="full">
          {isChangeMode ? "Сохранить" : "Изменить"}
        </Button>
      </aside>
      <div
        className={classNames("sidebar__blur", {
          sidebar__blur_active: isShowSidebar,
        })}
      />
    </>
  );
};

export default Sidebar;
