import React, { createContext } from "react"
import { IMailPageContext } from "shared/modals/mailPage.modal"
import MailBlock from "./MailBlock/MailBlock"
import Sidebar from "./Sidebar"
import useMailPage from "hooks/useMailPage"

export const Context = createContext<IMailPageContext>({} as IMailPageContext)

const MailPage = () => {
  const mailStates = useMailPage()

  return (
    <Context.Provider value={mailStates}>
      <main className='mail-page '>
        <div className='container'>
          <div className='mail-page__content'>
            <Sidebar />
            <MailBlock />
          </div>
        </div>
      </main>
    </Context.Provider>
  )
}

export default MailPage
