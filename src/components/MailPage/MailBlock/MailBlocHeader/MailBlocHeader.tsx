import Checkbox from "components/UI/Checkbox"
import React from "react"
import { IMessages } from "store/reducers/messagesSlice/messages.modal"
import MoveList from "components/UI/MoveList/MoveList"
import useMailBlocHeader from "./useMailBlocHeader"
import IconBtn from "components/UI/IconBtn"
import MainBlockSearch from "../MainBlockSearch/MainBlockSearch";

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
          <IconBtn onClick={backHandle} type='back' />
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
            <IconBtn onClick={readMessagesHandle} type='open' />
            <IconBtn onClick={deleteHandle} type='delete' />
            <div className='folder-icon'>
              <IconBtn onClick={showMoveListHandle} type='folder' />
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
