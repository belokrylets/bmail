export interface IMessages {
  id: string
  contact: {
    email: string
    name: string
  }
  subject: string
  messageBody: string
  folder: string
  date: string
  status: string
}
