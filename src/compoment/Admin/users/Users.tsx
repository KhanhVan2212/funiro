import { Link } from 'react-router-dom';
import useUserMutation from '../../../hooks/useUser/useUserMutation';
import useUserQuery from '../../../hooks/useUser/useUserQuery';

const UsersPage = () => {

  const {data , isLoading , isError} = useUserQuery();
    
  const { mutate } = useUserMutation({
    action: "DELETE",
});
if (isLoading) return <div>Loading...</div>;
if (isError) return <div>Lỗi rồi</div>;
  return (
    <div className="w-full mt-28 mx-4 pl-2 overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-[15px] text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th>#</th>
          <th scope="col" className=" text-[15px] px-6 py-3">
           name
          </th>
          <th scope="col" className=" text-[15px] px-6 py-3">
           email
          </th>
          <th  hidden scope="col" className=" text-[15px] px-6 py-3">
           password
          </th>
          <th scope="col" className=" text-[15px] px-6 py-3">
           role
          </th>
          <th scope="col" className=" text-[15px] px-6 py-3">
           avatar
          </th>
          <th scope="col" className=" text-[15px] px- py-3"></th>
        </tr>
      </thead>

      <tbody>
        {data?.map((product:any, index:number) => {
          
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
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 "
                >
                  {product.email}
                </td>
                <td hidden
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 "
                >
                  {product.password}
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 "
                >
                  {product.role}
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 "
                >
                 <img src={product.avatar} width={100} height={100} />
                </td>
                <td className="pt-20 px-5 flex items-center justify-center">
                  <Link
                    to={`${product._id}`}
                    type="button"
                    className="mr-3  bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded 
                   focus:outline-none focus:shadow-outline"
                  >
                    {" "}
                    Edit{" "}
                  </Link>
                  
                  <button
                    type="button"
                    className="btn_delete text-[15px] bg-red-500 hover:bg-red-700 text-white rounded 
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

export default UsersPage
