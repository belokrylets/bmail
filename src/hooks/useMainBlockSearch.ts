import { Context } from "components/MailPage/MailPage"
import { useContext } from "react"

const useMainBlockSearch = () => {
  const { searchState, setSearchState } = useContext(Context)

  const inputHandle = (e: { target: { value: string } }) => {
    const { value } = e.target
    setSearchState(value)
  }
  return {
    inputHandle,
    searchState,
  }
}

export default useMainBlockSearch
