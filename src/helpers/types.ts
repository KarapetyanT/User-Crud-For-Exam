export interface IUser {
  id: number | string
  name: string
  surname: string
  age: number
  salary: number
}

export type InputUser = Omit<IUser, "id">