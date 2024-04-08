import { instance } from "../config/axios";
import { ICheckout } from "../interface/checkuot";



export const getAllOrders = async (params?: any): Promise<ICheckout[]> => {
  try {
      const response = await instance.get('/orders', { params })
      return response.data
  } catch (error) {
      return []
  }
}
export const getOrderById = async (id: number | string) => {
  try {
      const response = await instance.get(`/orders/${id}`)
      return response.data
  } catch (error) {
      console.log(error)
  }
}
export const OrderAdd = async (order: ICheckout) => {
  try {
    const response = await instance.post("/orders", order);
    alert(" Add successfully");
    return response.data;
    
  } catch (error) {
    console.log(error);
  }
};
export const OrderUpdate = async (order: ICheckout) => {
  try {
    const response = await instance.put(`/orders/${order._id}`, order);
    alert(" Update successfully");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const OrderDelete = async (id: number |string) => {
  const confirm = window.confirm("Are you sure you want to delete ");
  try {
    if (confirm) {
      const response = await instance.delete(`/orders/${id}`);
      alert(" Delete successfully");
      return response.data;
    }
  } catch (error) { 
    console.log(error);
  }
};
