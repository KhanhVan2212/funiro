import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../interface/product";
import { ProductCreate, ProductDelete, ProductUpdate } from "../../services/product";

type Inputs = {
  _id?: number | string;
  name: string;
  price: number;
  image: string;
  description: string;
  discount: number;
  featured: boolean;
  quantity: number;
  category: string;
};

type useProductMutationProps = {
  action: "CREATE" | "DELETE" | "UPDATE";
};

const useProductMutation = ({ action }: useProductMutationProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const form = useForm<Inputs>();

  const { mutate, ...rest } = useMutation({
    mutationFn: async (product: IProduct) => {
      switch (action) {
        case "CREATE":
          return await ProductCreate(product);
          
        case "DELETE":
          console.log(product._id);
          return await ProductDelete(product._id!);
        case "UPDATE":
          return await ProductUpdate(product);
        default:
          return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["PRODUCT_KEY"],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const onSubmit: SubmitHandler<Inputs> = async (product: any) => {
    mutate(product);
    navigate("/admin/products");
  };

  return { mutate, form, onSubmit, ...rest };
};

export default useProductMutation;
