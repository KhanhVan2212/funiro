import { instance } from "../config/axios";
import { IUser } from "../interface/user";

export const getAllUsers = async (params?: any): Promise<IUser[]> => {
  try {
      const response = await instance.get('/users', { params })
      return response.data
  } catch (error) {
      return []
  }
}
export const getUserById = async (id: number | string) => {
  try {
      const response = await instance.get(`/users/${id}`)
      return response.data
  } catch (error) {
      console.log(error)
  }
}
export const UserCreate = async (user: IUser) => {
  try {
    const response = await instance.post("/users", user);
    alert("Product Add successfully");
    return response.data;
    
  } catch (error) {
    console.log(error);
  }
};
export const UserUpdate = async (user: IUser) => {
  try {
    const response = await instance.put(`/users/${user._id}`, user);
    alert("Product Update successfully");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const UserDelete = async (id: number |string) => {
  const confirm = window.confirm("Are you sure you want to delete ");
  try {
    if (confirm) {
      const response = await instance.delete(`/users/${id}`);
      alert("Product Delete successfully");
      return response.data;
    }
  } catch (error) { 
    console.log(error);
  }
};
