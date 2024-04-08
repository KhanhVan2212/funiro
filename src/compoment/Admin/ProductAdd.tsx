import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../interface/product";
import { uploadFile } from "../../lib/utils";
import { ProductCreate } from "../../services/product";
import useCategoryQuery from "../../hooks/useCategory/useCategoryQuery";

const ProductAdd = () => {
  const queryClient = useQueryClient();
  const {data } = useCategoryQuery();
  const {register , handleSubmit ,formState: {errors}} = useForm();
  const [gallery , setGallery] = useState<any[]>([]);
  const [image , setImage] = useState<string>("");
  const navigate = useNavigate();
  const {mutate} = useMutation({
    mutationFn: async(product:IProduct) => {
     const form =   await ProductCreate(product);
     return form;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["PRODUCT_KEY"],
      });
    },
    onError: (error) => {
      console.error('Failed to add product:', error);
   },
  });
  const onSubmit = async (product: any) => {

    mutate({...product ,gallery, image });
    navigate("/admin/products");
};
  return (
    <>
      <div className="my-20 sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-[25px] font-extrabold text-gray-900">
          Add Product
        </h2>
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            id="add-form"
          >
            <label
              htmlFor="productName"
              className="block  text-[15px] font-medium text-gray-700"
            >
              PRODUCT NAME
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              id="productName"
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-[15px]"
            />
       {errors.name && errors.name.type === "required" && (
      <div>Không được để trống</div>)}
            <label
              htmlFor="productGallery"
              className="block text-[15px] font-medium text-gray-700"
            >
              GALLERY
            </label>
            <input
              type="file"
              multiple
              {...register("gallery", { required: true })}
              id="productGallery"
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-[15px]"
              onChange={async (e) => {
                const files = Array.from(e.target.files as FileList);

                const result = await Promise.all(
                  files.map((file) => uploadFile(file))
                );
             
                setGallery(result.map((item:any)=> item?.url));
              }}
            />
            <div>
              {gallery.map((item:any,index:number)=>{
                return(
                  <>
                  <img key={index} src={item} alt={item}  width={100} height={100}/>
                  </>
                )
              })}
            </div>
           <label
              htmlFor="productImage"
              className="block text-[15px] font-medium text-gray-700"
            >
              IMAGES
            </label>
            <input
              type="file"
           
              {...register("image", { required: true })}
              id="productImage"
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-[15px]"
              onChange={async (e) => {
                const files = Array.from(e.target.files as FileList);
                const result = await Promise.all(
                  files.map((file) => uploadFile(file))
                );
                
                console.log(result);
                setImage(result[0]?.url);
              }}
            />
                  <img src={image} alt={image}  width={100} height={100}/>
            <label
              htmlFor="productName"
              className="block  text-[15px] font-medium text-gray-700"
            >
              DESCRIPTION
            </label>
            <input
              type="text"
              {...register("description", { required: true })}
              id="productName"
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-[15px]"
            />
            <label
              htmlFor="productPrice"
              className="block text-[15px] font-medium text-gray-700"
            >
              PRICE
            </label>
            <input
              type="number"
              {...register("price")}
              id="productPrice"
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-[15px]"
            />
            <label
              htmlFor="productQuantity"
              className="block text-[15px] font-medium text-gray-700"
            >
              QUANTITY
            </label>
            <input
              type="number"
              {...register("quantity")}
              id="productQuantity"
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-[15px]"
            />
            <label
              htmlFor="productDiscount"
              className="block text-[15px] font-medium text-gray-700"
            >
              DISCOUNT
            </label>
            <input
              type="text"
              {...register("discount")}
              id="productDiscount"
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-[15px]"
            />
              <label
              htmlFor="productDiscount"
              className="block text-[15px] font-medium text-gray-700"
            >
              CATEGORY
            </label>
            <select  id="cars" {...register("category") } >
        {data?.map((item:any , index:number) =>{
        return(
      
            <option  value={item._id} key={index} >{item.name}</option>
        

        )
      })}
                 </select>
             
            {/* <select  id="cars"  {...register("category") }>
            <option value={"660d53e996d4f9ab450f9bc0"}   >Quần áo</option>
            <option value={"660e6cff340c07aea7672db3"}  >Phụ kiện</option>
            <option value={"66114d742b0a524431e5fad3"} >Giày</option>
            </select> */}
            <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-[15px] font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductAdd;
