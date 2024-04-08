import useCategoryMutation from "../../../hooks/useCategory/useCategoryMutation";


const CategoryAdd = () => {
  const { form, onSubmit } = useCategoryMutation({
    action: "CREATE",
});
  return (
    <>
     <div className="my-20 sm:mx-auto sm:w-full sm:max-w-md">
  <h2 className="mt-6 text-center text-[25px] font-extrabold text-gray-900">Add Category</h2>
  <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
    <form onSubmit={form.handleSubmit(onSubmit)}  className="space-y-6" id="add-form">
      <label htmlFor='productName' className="block  text-[15px] font-medium text-gray-700">NAME</label>
      <input type="text" {...form.register('name' , { required : true })}  id="productName" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-[15px]" />
      {form.formState.errors.name && form.formState.errors.name.type === "required" && (
      <div>Không được để trống</div>)}
    <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-[15px] font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add</button>
    </form>
  </div>
</div>
    </>
  )
}

export default CategoryAdd
