import axios from "axios";
import { InputUser } from "../helpers/types";
import { IUser } from "../helpers/types";

const Axios = axios.create({
  baseURL: "http://localhost:4000"
})

export const AddNewUser = async (data: InputUser): Promise<IUser> => {
  const response = await Axios.post("/users", data);
  return response.data
}

export const getAllUsers = async (): Promise<IUser[]> => {
  const response = await Axios.get("/users")
  return response.data
}

export const getUserById = async (id: number): Promise<IUser> => {
  const response = await Axios.get(`/users/${id}`)
  return response.data
}