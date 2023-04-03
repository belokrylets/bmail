export interface IMailPageContext {
  activeFolder: string
  setActiveFolder: React.Dispatch<React.SetStateAction<string>>
  checkboxState: string[]
  setCheckboxState: React.Dispatch<React.SetStateAction<string[]>>
  searchState: string
  setSearchState: React.Dispatch<React.SetStateAction<string>>
  newMessageIsShow: boolean
  setNewMessageIsShow: React.Dispatch<React.SetStateAction<boolean>>
  selectedMessage: string
  setSelectedMessage: React.Dispatch<React.SetStateAction<string>>
}

export interface INewMessage {
  subject: string
  email: string
  body: string
}
