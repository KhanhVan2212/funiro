import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IAuth } from "../interface/auth";
import axios from "axios";
type FormValues = IAuth;

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
      } = useForm<FormValues>();
      const navigate = useNavigate();   
    
      const onSubmit = async (user:IAuth) => {
        try {
          const { data } = await axios.post("http://localhost:8080/auth/signup", user);
          console.log(data);
          alert("Đăng ký thành công");
          navigate("/login");
        } catch (error) {
            console.log(error);
            
          alert("Tài khoản đã tồn tại");
        }
      };
      return (
        <>
        <div className="my-20 sm:mx-auto sm:w-full sm:max-w-md">
     <h2 className="mt-6 text-center text-[25px] font-extrabold text-gray-900">REGISTER</h2>
     <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
       <form onSubmit={handleSubmit(onSubmit)}  className="space-y-6" id="add-form">
         <label htmlFor='email' className="block  text-[15px] font-medium text-gray-700">EMAIL</label>
         <input type="text" {...register('email' , { required : true })}  id="EMAIL" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-[15px]" />
         <label htmlFor='productImage' className="block text-[15px] font-medium text-gray-700">PASSWORD</label>
         <input type="password" {...register('password', {required: true})}  id="password" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-[15px]" />
         <label htmlFor='confirmPassword' className="block text-[15px] font-medium text-gray-700">CONFIRMPASSWORD</label>
         <input type="password" {...register('confirmPassword', {required: true})}  id="confirmPassword" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-[15px]" />
         <label htmlFor='productName' className="block text-[15px] font-medium text-gray-700">NAME</label>
         <input type="text" {...register('name', {required: true})}  id="productName" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-[15px]" />
         <label htmlFor='productAvatar' className="block text-[15px] font-medium text-gray-700">Avatar</label>
         <input type="text" {...register('avatar', {required: true})}  id="avatar" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-[15px]" />
        <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-[15px] font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Register</button>
       </form>
     </div>
   </div>
       </>
      )
}

export default RegisterPage
