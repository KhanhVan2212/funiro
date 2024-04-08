import { useQuery } from "@tanstack/react-query";
import { getAllProducts, getProductById } from "../../services/product";


const useProductQuery = (_id?: number | string) => {
   const { data, ...rest } = useQuery({
        queryKey: ['PRODUCT_KEY', _id],
        queryFn: async () => {
            return _id ? await getProductById(_id as number | string) : await getAllProducts(_id)
        }
    })
  return { data, ...rest }
}
export default useProductQuery;