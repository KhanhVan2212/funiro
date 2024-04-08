import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../interface/user";
import { UserCreate, UserDelete, UserUpdate } from "../../services/user";

type Inputs = {
  _id?: number | string;
  name: string;
  email: string;
  password: string;
  role: string;
  avatar: string;
};

type useProductMutationProps = {
  action: "CREATE" | "DELETE" | "UPDATE";
};

const useUserMutation = ({ action }: useProductMutationProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const form = useForm<Inputs>();

  const { mutate, ...rest } = useMutation({
    mutationFn: async (user: IUser) => {
      switch (action) {
        case "CREATE":
          return await UserCreate(user);
        case "DELETE":
          return await UserDelete(user._id!);
        case "UPDATE":
          return await UserUpdate(user);
        default:
          return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["USER_KEY"],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const onSubmit: SubmitHandler<Inputs> = async (user: any) => {
    mutate(user);
    navigate("/admin/user");
  };

  return { mutate, form, onSubmit, ...rest };
};

export default useUserMutation;
