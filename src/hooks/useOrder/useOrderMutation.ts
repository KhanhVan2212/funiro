import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { OrderDelete, OrderUpdate } from "../../services/order";
import { ICheckout } from "../../interface/checkuot";


type Inputs = {
    _id?: number | string;
    name: string;
  };
type useProductMutationProps = {
  action: "DELETE" | "UPDATE";
};

const useOrderMutation = ({ action }: useProductMutationProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const form = useForm();

  const { mutate, ...rest } = useMutation({
    mutationFn: async (order: ICheckout) => {
      switch (action) {
        case "DELETE":
          console.log(order._id);
          return await OrderDelete(order._id!);
        case "UPDATE":
          return await OrderUpdate(order);
        default:
          return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["ORDER_KEY"],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const onSubmit: SubmitHandler<Inputs> = async (order: any) => {
    mutate(order);
    navigate("/admin/category");
  };

  return { mutate, form, onSubmit, ...rest };
};

export default useOrderMutation;
