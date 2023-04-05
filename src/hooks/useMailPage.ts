import React, { useEffect, useState } from "react"
import { useAppDispatch } from "./redux"
import { fetchAllMessages } from "store/reducers/messagesSlice/actions"

const useMailPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllMessages())
  }, [])

  const [activeFolder, setActiveFolder] = useState<string>(
    "e2545fe2-0f42-4073-afd8-0cce07476d41"
  )
  const [checkboxState, setCheckboxState] = useState<string[]>([])
  const [searchState, setSearchState] = useState("")
  const [newMessageIsShow, setNewMessageIsShow] = useState<boolean>(false)
  const [selectedMessage, setSelectedMessage] = useState("")
  return {
    activeFolder,
    setActiveFolder,
    checkboxState,
    setCheckboxState,
    searchState,
    setSearchState,
    newMessageIsShow,
    setNewMessageIsShow,
    selectedMessage,
    setSelectedMessage,
  }
}

export default useMailPage
