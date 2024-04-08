import { instance } from "../config/axios";
import { IAuth } from "../interface/auth";

export const Register = async (user: IAuth) => {
    try {
      const response = await instance.post("/register", user);
      alert("Register successfully");
      return response.data;
      
    } catch (error) {
      console.log(error);
    }
  };