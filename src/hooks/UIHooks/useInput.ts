import { useState } from "react"
import useValidation from "./useValidation"
import { IValidations } from "shared/modals/validation.modal"

const useInput = (initialValue: string, validations: IValidations | null) => {
  const [value, setValue] = useState(initialValue)

  const valid = useValidation(value, validations)

  const onChange = (e: { target: { value: string } }) => {
    setValue(e.target.value)
  }
  return {
    value,
    onChange,
    valid,
  }
}

export default useInput
