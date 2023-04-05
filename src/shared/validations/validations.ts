import { IValidations } from "shared/modals/validation.modal"

export const newFolderValid: IValidations = {
  isEmpty: true,
  maxLength: 9,
  minLength: 3,
}

export const subjectValid: IValidations = {
  maxLength: 50,
}
export const searchValid = null

export const emailValid: IValidations = {
  isEmpty: true,
  isEmail: true,
}
export const messagesValid: IValidations = {
  isEmpty: true,
  maxLength: 500,
  minLength: 1,
}
