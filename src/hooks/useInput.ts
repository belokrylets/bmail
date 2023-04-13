import { useState } from "react"
import { IValidations } from "shared/modals/validation.modal"
import useValidation from "./useValidation";

const useInput = (initialValue: string, validations: IValidations | null) => {
  const [value, setValue] = useState(initialValue)

  const valid = useValidation(value, validations)

  const onChange = (e: { target: { value: string } }) => {
    setValue(e.target.value)
  }

  const changeState = (newValue: string) => {
    setValue(newValue)
  }
  return {
    value,
    onChange,
    valid,
    changeState,
  }
}

export default useInput
