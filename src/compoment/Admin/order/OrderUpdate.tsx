import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { getOrderById } from '../../../services/order';

const OrderUpdatePage = () => {
  const queryClient = useQueryClient();
    const {id} = useParams();
    const {register , handleSubmit , reset} = useForm();
    const navigate = useNavigate();
    const {data} = useQuery({
      queryKey: ['PRODUCT_KEY', id],
      queryFn: async () => {
        return  await getOrderById(id as number | string) 
    }
    })
    useEffect(() => {
      
      data && reset(data);
  }, [id, reset, data]);
   const {mutate} = useMutation({
    mutationFn: async(order:any)=>{
        const data = await axios.put(`http://localhost:8080/orders/${order._id}`, order);
        return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["ORDER_KEY"],

      });
    },
    onError: (error) => {
      console.error('Failed to add product:', error);
   },
   })


   const onSubmit = (product:any) => {
    mutate(product)
    alert("Update successfully");
    navigate("/admin/order");
   };

  return (
   <>
    <div className="my-20 sm:mx-auto sm:w-full sm:max-w-md">
  <h2 className="mt-6 text-center text-[25px] font-extrabold text-gray-900">Update</h2>
  <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
    <form onSubmit={handleSubmit(onSubmit)}  className="space-y-6" id="add-form">
    <label htmlFor='productName' className="block  text-[15px] font-medium text-gray-700">Status</label>
      <select {...register('status')} >
        <option value="pending">pending</option>
        <option value="confirmed">confirmed</option>
        <option value="shipped">shipped</option>
        <option value="delivered">delivered</option>
      </select>
      {/* <label htmlFor='productName' className="block  text-[15px] font-medium text-gray-700">Status</label>
      <input type="text" {...register('status')}  id="productName" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-[15px]" /> */}
    <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-[15px] font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Update</button>
    </form>
  </div>
</div>
   </>
  )
}

export default OrderUpdatePage
