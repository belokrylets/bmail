import React from "react"
import useMainBlockSearch from "hooks/useMainBlockSearch"

const MainBlockSearch = () => {
  const { inputHandle, searchState } = useMainBlockSearch()
  return (
    <input
      onChange={inputHandle}
      name='search'
      placeholder='Поиск по имени'
      value={searchState}
      className='mail-block-header__search'
    />
  )
}

export default MainBlockSearch
