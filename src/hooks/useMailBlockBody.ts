import { Context } from "components/MailPage/MailPage"
import { useContext } from "react"

const useMailBlockBody = () => {
  const { selectedMessage } = useContext(Context)
  return { selectedMessage }
}

export default useMailBlockBody
