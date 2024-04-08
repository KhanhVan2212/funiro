import { instance } from "../config/axios";
import { ICategory } from "../interface/category";


export const getAllCategories = async (params?: any): Promise<ICategory[]> => {
  try {
      const response = await instance.get('/categories', { params })
      return response.data
  } catch (error) {
      return []
  }
}
export const getCategoryById = async (id: number | string) => {
  try {
      const response = await instance.get(`/categories/${id}`)
      return response.data
  } catch (error) {
      console.log(error)
  }
}
export const CategoryAdd = async (category: ICategory) => {
  try {
    const response = await instance.post("/categories", category);
    alert(" Add successfully");
    return response.data;
    
  } catch (error) {
    console.log(error);
  }
};
export const CategoryUpdate = async (category: ICategory) => {
  try {
    const response = await instance.put(`/categories/${category._id}`, category);
    alert(" Update successfully");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const CategoryDelete = async (id: number |string) => {
  const confirm = window.confirm("Are you sure you want to delete ");
  try {
    if (confirm) {
      const response = await instance.delete(`/categories/${id}`);
      alert(" Delete successfully");
      return response.data;
    }
  } catch (error) { 
    console.log(error);
  }
};
