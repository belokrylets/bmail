import React, { useContext } from "react"
import { Context } from "../MailPage"

const MainBlockSearch = () => {
  const { searchState, setSearchState } = useContext(Context)

  const inputHandle = (e: { target: { value: string } }) => {
    const { value } = e.target
    setSearchState(value)
  }

  return (
    <input
      onChange={inputHandle}
      name="search"
      placeholder="Поиск по имени"
      value={searchState}
      className="mail__block__header__search"
    />
  )
}

export default MainBlockSearch
