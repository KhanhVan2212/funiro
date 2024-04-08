import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ICategory } from "../../interface/category";
import { CategoryAdd, CategoryDelete, CategoryUpdate } from "../../services/category";

type Inputs = {
  _id?: number | string;
  name: string;
};

type useProductMutationProps = {
  action: "CREATE" | "DELETE" | "UPDATE";
};

const useCategoryMutation = ({ action }: useProductMutationProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const form = useForm<Inputs>();

  const { mutate, ...rest } = useMutation({
    mutationFn: async (category: ICategory) => {
      switch (action) {
        case "CREATE":
          return await CategoryAdd(category);
        case "DELETE":
          console.log(category._id);
          return await CategoryDelete(category._id!);
        case "UPDATE":
          return await CategoryUpdate(category);
        default:
          return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["CATEGORY_KEY"],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const onSubmit: SubmitHandler<Inputs> = async (category: any) => {
    mutate(category);
    navigate("/admin/category");
  };

  return { mutate, form, onSubmit, ...rest };
};

export default useCategoryMutation;
