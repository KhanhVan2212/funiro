import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { IAuth } from '../interface/auth';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { useLocalStorage } from '../hooks/useStorage';
import { useMutation } from '@tanstack/react-query';
type FormValues = IAuth;

const signinSchema = Joi.object({
  email: Joi.string()
      .email({ tlds: { allow: false } })
      .min(3)
      .required(),
  password: Joi.string().min(6).required(),
});

const LoginPage = () => {
  const [, setUser] = useLocalStorage("user", {});
    const {
        register,
        handleSubmit,
      } = useForm<FormValues>({
        resolver: joiResolver(signinSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
      const navigate = useNavigate();
    
      const { mutate } = useMutation({
        mutationFn: async (formData: { email: string; password: string }) => {
            const { data } = await axios.post("http://localhost:8080/auth/signin", formData);
            return data;
        },
        onSuccess: (data) => {setUser(data); alert("Login successful"); navigate("/");},
        onError: (error) => {console.log(error), alert("Tài khoản không chính xác")},
    });

    const onSubmit = (formData: { email: string; password: string }) => {
        mutate(formData);
    };
      return (
        <>
         <div className="my-20 sm:mx-auto sm:w-full sm:max-w-md">
      <h2 className="mt-6 text-center text-[25px] font-extrabold text-gray-900">LOGIN</h2>
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form onSubmit={handleSubmit(onSubmit)}  className="space-y-6" id="add-form">
          <label htmlFor='email' className="block  text-[15px] font-medium text-gray-700">EMAIL</label>
          <input type="text" {...register('email' , { required : true })}  id="EMAIL" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-[15px]" />
          <label htmlFor='productImage' className="block text-[15px] font-medium text-gray-700">PASSWORD</label>
          <input type="password" {...register('password', {required: true})}  id="password" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-[15px]" />
         <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-[15px] font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">LOGIN</button>
        </form>
      </div>
    </div>
        </>
      )
}

export default LoginPage
