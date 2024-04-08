import { useParams } from "react-router-dom";
import useUserQuery from "../../../hooks/useUser/useUserQuery";
import useUserMutation from "../../../hooks/useUser/useUserMutation";
import { useEffect } from "react";

const UserUpdatePage = () => {
    const { id } = useParams();
    const { data, isLoading } = useUserQuery(id);
    const { form, onSubmit } = useUserMutation({
        action: "UPDATE",
    });
      // fill nội dung vào form
      useEffect(() => {
        console.log(data);
        data && form.reset(data);
    }, [id, form.reset, data]);
    if (isLoading) return <div>Loading...</div>;
    return (
        <>
        <div className="my-20 sm:mx-auto sm:w-full sm:max-w-md">
     <h2 className="mt-6 text-center text-[25px] font-extrabold text-gray-900">Update User</h2>
     <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
       <form onSubmit={form.handleSubmit(onSubmit)}  className="space-y-6" id="add-form">
         <label htmlFor='productName' className="block  text-[15px] font-medium text-gray-700">User name</label>
         <input type="text" {...form.register('name' , { required : true })}  id="productName" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-[15px]" />
         {form.formState.errors.name && form.formState.errors.name.type === "required" && (
         <div>Không được để trống</div>)}
         <label htmlFor='productEmail' className="block  text-[15px] font-medium text-gray-700">User email</label>
         <input type="email" {...form.register('email' , { required : true })}  id="productEmail" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-[15px]" />
         <label htmlFor='productRole' className="block  text-[15px] font-medium text-gray-700">User role</label>
         <input type="text" {...form.register('role' , { required : true })}  id="productRole" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-[15px]" />
         <label htmlFor='productAvatar' className="block  text-[15px] font-medium text-gray-700">User avatar</label>
         <input type="text" {...form.register('avatar' , { required : true })}  id="productAvatar" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-[15px]" />
         <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-[15px] font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Update</button>
       </form>
     </div>
   </div>
       </>
      )
}

export default UserUpdatePage
