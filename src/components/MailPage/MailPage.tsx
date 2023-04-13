import React, { createContext } from "react"
import { IMailPageContext } from "shared/modals/mailPage.modal"
import MailBlock from "./MailBlock/MailBlock"
import Sidebar from "./Sidebar/Sidebar"
import useMailPage from "components/MailPage/useMailPage"

export const Context = createContext<IMailPageContext>({} as IMailPageContext)

const MailPage = () => {
  const mailStates = useMailPage()

  return (
    <Context.Provider value={mailStates}>
      <main className='mail-page container'>
        <div className='mail-page__content'>
          <Sidebar />
          <MailBlock />
        </div>
      </main>
    </Context.Provider>
  )
}

export default MailPage
