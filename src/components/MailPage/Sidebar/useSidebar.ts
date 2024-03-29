import { useContext, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { Context } from "components/MailPage/MailPage";
import {
  actions as folderActions,
  foldersSelector,
} from "store/reducers/foldersSlice/foldersSlice";
import { v4 } from "uuid";
import getTranslit from "shared/utils/getTranslit";
import useInput from "../../../hooks/useInput";
import { newFolderValid } from "shared/validations/validations";
import { actions as navbarActions } from "../../../store/reducers/navbarSlice/navbarSlice";

const useSidebar = () => {
  const dispatch = useAppDispatch();

  const { isActiveBurger } = useAppSelector((state) => state.navbar);

  const [isChangeMode, setIsChangeMode] = useState(false);
  const [changeFolderId, setChangeFolderId] = useState("");
  const isShowSidebar = isActiveBurger;

  const {
    activeFolderId,
    setActiveFolderId,
    setCheckboxState,
    setNewMessageIsShow,
    setSelectedMessage,
  } = useContext(Context);

  const allFolder = useAppSelector(foldersSelector.selectAll);
  const FolderEntities = useAppSelector(foldersSelector.selectEntities);

  const activeFolderHandle = (id: string) => {
    setActiveFolderId(id);
    setCheckboxState([]);
    setSelectedMessage("");
    if (isActiveBurger) {
      dispatch(navbarActions.changeActiveBurger(false));
    }
  };

  const buttonHandle = () => {
    setNewMessageIsShow(true);
  };

  const changeHandle = () => {
    setIsChangeMode((prev) => !prev);
  };

  const newFolderHandle = useInput("", newFolderValid);

  const deleteFolderHandle = (id: string) => {
    dispatch(folderActions.removeFolder(id));
  };
  const successHandle = () => {
    if (!newFolderHandle.valid.inputValid) {
      alert(newFolderHandle.valid.empty.messageError);
      return;
    }
    if (!!changeFolderId) {
      dispatch(
        folderActions.updateFolder({
          id: changeFolderId,
          changes: {
            ...FolderEntities[changeFolderId]!,
            title: newFolderHandle.value,
            slug: getTranslit(newFolderHandle.value),
          },
        })
      );
    } else {
      dispatch(
        folderActions.newFolder({
          id: v4(),
          slug: getTranslit(newFolderHandle.value),
          title: newFolderHandle.value,
        })
      );
    }
    setChangeFolderId("");
    newFolderHandle.changeState("");
  };

  const changeFolderHandle = (id: string) => {
    setChangeFolderId(id);
    newFolderHandle.changeState(FolderEntities[id]!.title);
  };
  return {
    activeFolderHandle,
    changeFolderHandle,
    successHandle,
    deleteFolderHandle,
    newFolderHandle,
    changeHandle,
    buttonHandle,
    isChangeMode,
    activeFolderId,
    allFolder,
    isShowSidebar,
  };
};

export default useSidebar;
