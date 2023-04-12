import { IUseInput } from "./useInput.modal"

export interface IMailPageContext {
  activeFolderId: string
  setActiveFolderId: React.Dispatch<React.SetStateAction<string>>
  checkboxState: string[]
  setCheckboxState: React.Dispatch<React.SetStateAction<string[]>>
  newMessageIsShow: boolean
  setNewMessageIsShow: React.Dispatch<React.SetStateAction<boolean>>
  selectedMessage: string
  setSelectedMessage: React.Dispatch<React.SetStateAction<string>>
  searchHandle: IUseInput
}

export interface INewMessage {
  subject: string
  email: string
  body: string
}
