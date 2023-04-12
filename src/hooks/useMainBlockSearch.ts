import { Context } from "components/MailPage/MailPage"
import { useContext } from "react"

const useMainBlockSearch = () => {
  const { searchHandle } = useContext(Context)
  return {
    searchHandle,
  }
}

export default useMainBlockSearch
