import { IEmpty, IMinLength, IMaxLength } from "hooks/useValidation"

export interface IUseInput {
  value: string
  onChange: (e: {
    target: {
      value: string
    }
  }) => void
  valid: {
    empty: IEmpty
    minLength: IMinLength
    maxLength: IMaxLength
    inputValid: boolean
  }
  changeState: (newValue: string) => void
}
