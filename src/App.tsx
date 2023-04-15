import MailPage from "components/MailPage/MailPage"
import Footer from "components/UI/Footer"
import Navbar from "components/UI/Navbar"
import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { navLinks } from "shared/links/navLinks"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={navLinks.mail.path} element={<MailPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
