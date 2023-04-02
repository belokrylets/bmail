export interface IMailPageContext {
  activeFolder: string
  setActiveFolder: React.Dispatch<React.SetStateAction<string>>
  checkboxState: string[]
  setCheckboxState: React.Dispatch<React.SetStateAction<string[]>>
  searchState: string
  setSearchState: React.Dispatch<React.SetStateAction<string>>
}
