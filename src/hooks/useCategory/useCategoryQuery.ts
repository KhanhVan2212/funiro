import { useQuery } from "@tanstack/react-query";
import { getAllCategories, getCategoryById } from "../../services/category";



const useCategoryQuery = (_id?: number | string) => {
   const { data, ...rest } = useQuery({
        queryKey: ['CATEGORY_KEY', _id],
        queryFn: async () => {
            return _id ? await getCategoryById(_id as number | string) : await getAllCategories(_id)
        }
    })
  return { data, ...rest }
}
export default useCategoryQuery;