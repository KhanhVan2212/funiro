import { useQuery } from "@tanstack/react-query";

import { getAllOrders, getOrderById } from "../../services/order";



const useOrderQuery = (_id?: number | string) => {
   const { data, ...rest } = useQuery({
        queryKey: ['ORDER_KEY', _id],
        queryFn: async () => {
            return _id ? await getOrderById(_id as number | string) : await getAllOrders(_id)
        }
    })
  return { data, ...rest }
}
export default useOrderQuery;