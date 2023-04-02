import { useAppDispatch } from "hooks/redux"
import React, { createContext, useEffect, useState } from "react"
import { IMailPageContext } from "shared/modals/mailPage.modal"
import { fetchAllMessages } from "store/reducers/messagesSlice/actions"
import MailBlock from "./MailBlock/MailBlock"
import Sidebar from "./Sidebar"

export const Context = createContext<IMailPageContext>({} as IMailPageContext)

const MailPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllMessages())
  }, [])

  const [activeFolder, setActiveFolder] = useState<string>(
    "e2545fe2-0f42-4073-afd8-0cce07476d41"
  )

  const [checkboxState, setCheckboxState] = useState<string[]>([])
  const [searchState, setSearchState] = useState("")
  return (
    <Context.Provider
      value={{
        activeFolder,
        setActiveFolder,
        checkboxState,
        setCheckboxState,
        searchState,
        setSearchState,
      }}
    >
      <main>
        <div className="container">
          <div className="mail__page__content">
            <Sidebar />
            <MailBlock />
          </div>
        </div>
      </main>
    </Context.Provider>
  )
}

export default MailPage
