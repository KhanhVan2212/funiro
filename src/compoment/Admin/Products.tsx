import { Link } from 'react-router-dom';
import useProductMutation from '../../hooks/useProduct/useProductMutation';
import useProductQuery from '../../hooks/useProduct/useProductQuery';
import "./css.css";
const Products = () => {

  const {data , isLoading , isError} = useProductQuery();
  console.log(data);
  
  const { mutate } = useProductMutation({

    action: "DELETE",
});
if (isLoading) return <div>Loading...</div>;
if (isError) return <div>Lỗi rồi</div>;
  return (
    <div className="w-full mt-28 mx-4 pl-2 overflow-x-auto shadow-md sm:rounded-lg">
    <Link to="add">
      <button
        type="button"
        className="mr-3 my-3  text-[16px] bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded focus:outline-none 
      focus:shadow-outline"
      >
        Add New Product
      </button>
    </Link>
    <table className="w-full text-[15px] text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th>#</th>
          <th scope="col" className=" text-[15px] px-6 py-3">
            Product name
          </th>
          <th scope="col" className=" text-[15px] px-6 py-3">
            Images
          </th>
          <th scope="col" className=" text-[15px] px-6 py-3">
            Description
          </th>
          <th scope="col" className=" text-[15px] px-6 py-3">
          Price
          </th>
          <th scope="col" className=" text-[15px] px-6 py-3">
          Quantity
          </th>
          <th scope="col" className=" text-[15px] px-6 py-3">
          discount
          </th>
          <th scope="col" className=" text-[15px] px-6 py-3"></th>
        </tr>
      </thead>

      <tbody>
        {data.data?.map((product:any, index:number) => {
          
          return (
            <>
              <tr key={index}>
                <td>{index + 1 }</td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 "
                >
                  {product.name}
                </td>
                <td className="px-6 py-4">
                  <img
                  src={product.image}
                    className="h-30 w-40 " width={100} height={100}
                  />
                </td>
                <td className="px-6 py-4">{product.description}</td>
                <td className="px-6 py-4">{product.price}</td>
                <td className="px-6 py-4">{product.quantity}</td>
                <td className="px-6 py-4">{product.discount}</td>
                <td className="pt-16 px-5 flex items-center justify-center">
                  <Link
                    to={`${product._id}`}
                    type="button"
                    className="mr-3 text-[15px] bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded 
                   focus:outline-none focus:shadow-outline"
                  >
                    {" "}
                    Edit{" "}
                  </Link>
                  
                  <button
                    type="button"
                    className="btn_delete text-[15px] bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded 
               focus:outline-none focus:shadow-outline"
                    onClick={() =>{
                     mutate(product)
                    }
                      }
                        
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  </div>
  )
}

export default Products
