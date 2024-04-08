import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrderById } from "../../../services/order";
import "../../../style/cart.scss";
interface Product {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  discount: number;
 }
 interface Order {
  items: Product[];
  // Các thuộc tính khác của đơn hàng
 }
const OrderDetail = () => {
  const [product , setProduct] =useState<Order | null>(null);
  // const {calculateTotal} = useCart();
    const { id } = useParams();
    useEffect(()=>{
      (async()=>{
          const data = await getOrderById(id!);
          setProduct(data);
      })();
      },[id]);
      console.log(product);
      
  return (
    
<>
<div className="w-full mt-28 mx-4 pl-2 overflow-x-auto shadow-md sm:rounded-lg">
     
      <table className="w-full text-[15px] text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className=" text-[15px] px-6 py-3">Tên sản phẩm</th>
            <th scope="col" className=" text-[15px] px-6 py-3">
            Giá  </th>
            <th scope="col" className=" text-[15px] px- py-3">Số lượng</th>
            <th scope="col" className=" text-[15px] px- py-3">THành tiền</th>
            <th></th>
          </tr>
        </thead>
  
        <tbody>
        {product?.items?.map(({name, price ,discount , quantity}:Product)=>{
                    return (
                <tr>
                  <td  scope="row"
                    className="px-6 py-4 font-medium text-gray-900 ">{name}</td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 "
                  >
                 {price - price * discount /100}$
                  </td>
               
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 "
                  >
                 {quantity}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 "
                  >
                     {(price - price * (discount / 100)) * quantity}$
                  </td>
                </tr>
   )
  })}
         
          {/* <span className="text-[20px]  font-medium text-gray-900  ">Tổng tiền: </span>
          <span className="text-[20px] font-medium text-gray-900  ">{calculateTotal()}$</span>
        */}
        </tbody>
      </table>
    </div>
  

</>
  )
}

export default OrderDetail
