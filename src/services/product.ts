import { instance } from "../config/axios";
import { IProduct } from "../interface/product";

const userDataString = localStorage.getItem('user');
let token = '';
if (userDataString) {
    try {
        const userData = JSON.parse(userDataString);
        token = userData.token || '';
    } catch (error) {
        console.error('Không thể phân tích dữ liệu từ localStorage:', error);
    }
}

export const getAllProducts = async (params?: any): Promise<IProduct[]> => {
  try {
      const response = await instance.get('/products', { params })
      return response.data
  } catch (error) {
      return []
  }
}
export const getProductById = async (id: number | string) => {
  try {
      const response = await instance.get(`/products/${id}`)
      return response.data
  } catch (error) {
      console.log(error)
  }
}
export const ProductCreate = async (product: IProduct) => {
  try {
    const response = await instance.post(`/products`, product, {
      headers: {
          'Content-Type': 'application/json',
          "Authorization": "Bearer " + token ? token : ''
      },
  })
    alert("Product Add successfully");
    return response.data;
    
  } catch (error) {
    console.log(error);
  }
};
export const ProductUpdate = async (product: IProduct) => {
  try {
    const response = await instance.put(`/products/${product._id}`, product);
    alert("Product Update successfully");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const ProductDelete = async (id: number |string) => {
  const confirm = window.confirm("Are you sure you want to delete ");
  try {
    if (confirm) {
      const response = await instance.delete(`/products/${id}`);
      alert("Product Delete successfully");
      return response.data;
    }
  } catch (error) { 
    console.log(error);
  }
};
