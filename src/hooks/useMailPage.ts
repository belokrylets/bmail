import { useEffect, useState } from "react"
import { useAppDispatch } from "./redux"
import { fetchAllMessages } from "store/reducers/messagesSlice/actions"
import useInput from "./UIHooks/useInput"

const useMailPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllMessages())
  }, [])

  const [activeFolderId, setActiveFolderId] = useState<string>(
    "e2545fe2-0f42-4073-afd8-0cce07476d41"
  )
  const [checkboxState, setCheckboxState] = useState<string[]>([])
  const [newMessageIsShow, setNewMessageIsShow] = useState<boolean>(false)
  const [selectedMessage, setSelectedMessage] = useState("")

  const searchHandle = useInput("", null)
  return {
    activeFolderId,
    setActiveFolderId,
    checkboxState,
    setCheckboxState,
    newMessageIsShow,
    setNewMessageIsShow,
    selectedMessage,
    setSelectedMessage,
    searchHandle,
  }
}

export default useMailPage
