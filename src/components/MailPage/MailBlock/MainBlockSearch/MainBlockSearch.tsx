import React from "react"
import useMainBlockSearch from "components/MailPage/MailBlock/MainBlockSearch/useMainBlockSearch"

const MainBlockSearch = () => {
  const { searchHandle } = useMainBlockSearch()
  return (
    <input
      onChange={searchHandle.onChange}
      name='search'
      placeholder='Поиск по имени'
      value={searchHandle.value}
      className='mail-block-header__search'
    />
  )
}

export default MainBlockSearch
