import { useEffect, useState } from "react"
import { IValidations } from "shared/modals/validation.modal"

export interface IEmpty {
  isEmpty: boolean
  messageError: string
}
export interface IMinLength {
  minLengthError: boolean
  messageError: string
}
export interface IMaxLength {
  maxLengthError: boolean
  messageError: string
}
export interface IEmail {
  emailError: boolean
  messageError: string
}
const useValidation = (value: string, validations: IValidations | null) => {
  const [empty, Empty] = useState<IEmpty>({
    isEmpty: true,
    messageError: "Поле не может быть пустым",
  })
  const [minLength, setMinLength] = useState<IMinLength>({
    minLengthError: false,
    messageError: "Минимум 3 символа",
  })
  const [maxLength, setMaxLength] = useState<IMaxLength>({
    maxLengthError: false,
    messageError: "Максимум 9 символов",
  })

  const [email, setEmail] = useState<IEmail>({
    emailError: false,
    messageError: "Неверный форма почты",
  })

  const [inputValid, setInputValid] = useState(false)

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
          value.length < validations[validation]!
            ? setMinLength({ ...minLength, minLengthError: true })
            : setMinLength({ ...minLength, minLengthError: false })
          break
        case "maxLength":
          value.length > validations[validation]!
            ? setMaxLength({ ...maxLength, maxLengthError: true })
            : setMaxLength({ ...maxLength, maxLengthError: false })
          break
        case "isEmpty":
          !!value
            ? Empty({ ...empty, isEmpty: false })
            : Empty({ ...empty, isEmpty: true })
          break
        case "isEmail":
          const EMAIL_REGEXP =
            /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu

          EMAIL_REGEXP.test(value.toLowerCase())
            ? setEmail({ ...email, emailError: false })
            : setEmail({ ...email, emailError: true })
          break
      }
    }
  }, [value])

  useEffect(() => {
    if (empty.isEmpty || minLength.minLengthError || maxLength.maxLengthError) {
      setInputValid(false)
    } else {
      setInputValid(true)
    }
  }, [empty.isEmpty, minLength.minLengthError, maxLength.maxLengthError])

  return { empty, minLength, maxLength, inputValid }
}

export default useValidation
