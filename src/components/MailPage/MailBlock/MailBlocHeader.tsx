import IconDelete from "assets/icons/IconDelete"
import IconFolder from "assets/icons/IconFolder"
import IconOpen from "assets/icons/IconOpen"
import Checkbox from "components/UI/Checkbox"
import React from "react"
import { IMessages } from "store/reducers/messagesSlice/messages.modal"
import MainBlockSearch from "./MainBlockSearch"
import IconBack from "assets/icons/IconBack"
import MoveList from "components/UI/MoveList"
import useMailBlocHeader from "hooks/useMailBlocHeader"

interface MailBlocHeaderProps {
  messagesList: IMessages[]
}

const MailBlocHeader: React.FC<MailBlocHeaderProps> = ({ messagesList }) => {
  const {
    checkboxHandle,
    deleteHandle,
    backHandle,
    showMoveListHandle,
    readMessagesHandle,
    isShowMoveList,
    selectedMessage,
    checkboxState,
  } = useMailBlocHeader(messagesList)

  return (
    <div className='mail-block-header'>
      <div className='mail-block-header-interface header-interface'>
        {!!selectedMessage ? (
          <div onClick={backHandle} className='header-interface__menu'>
            <IconBack />
          </div>
        ) : (
          <div onClick={checkboxHandle}>
            <Checkbox
              isActive={
                messagesList.length === checkboxState.length &&
                !!checkboxState.length
              }
            />
          </div>
        )}
        {!!checkboxState.length && (
          <div className='header-interface__menu'>
            <div onClick={readMessagesHandle}>
              <IconOpen />
            </div>
            <div onClick={deleteHandle}>
              <IconDelete />
            </div>
            <div onClick={showMoveListHandle} className='folder-icon'>
              <IconFolder />
              {isShowMoveList && <MoveList ids={checkboxState} />}
            </div>
          </div>
        )}
      </div>
      <MainBlockSearch />
    </div>
  )
}

export default MailBlocHeader
