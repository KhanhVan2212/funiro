import { Link } from 'react-router-dom'

const HeaderAdmin = () => {
  return (
    <>
     <div className="flex flex-col w-80 bg-white rounded-r-3xl overflow-hidden">
      <div className="flex items-center justify-center h-20 shadow-md">
        <Link to="/admin" className="text-4xl uppercase text-500 no-underline">Furniro</Link>
      </div>
      <ul className="flex flex-col py-4">
        <li>
         <Link to="/admin/products" className="flex flex-row items-center no-underline h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
         <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="text-2xl bx bx-shopping-bag" /></span>
            <span className="text-2xl font-medium"></span>
            <p className='text-2xl'>Product</p></Link>
            
        </li>
        <li>
        <Link to="/admin/category" className="flex flex-row items-center no-underline h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
         <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="text-2xl bx bx-shopping-bag" /></span>
            <span className="text-sm font-medium"></span>
          <p className='text-2xl'>Category</p></Link>
        </li>
        <li>
        <Link to="/admin/order" className="flex flex-row items-center no-underline h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
         <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="text-2xl bx bx-shopping-bag" /></span>
            <span className="text-sm font-medium"></span>
            <p className='text-2xl'> Order</p></Link>
        </li>
        <li>
        <Link to="/admin/user" className="flex flex-row items-center no-underline h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
         <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="text-2xl bx bx-shopping-bag" /></span>
            <span className="text-sm font-medium"></span>
            <p className='text-2xl'> User</p></Link>
        </li>
        <li>
          <Link to="/"  className="flex flex-row items-center no-underline h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="text-2xl    bx bx-log-out" /></span>
            <span className="text-sm font-medium"> <p className='text-2xl'>Logout</p></span>
            </Link>
        </li>
      </ul>
    </div>
    </>
  )
}

export default HeaderAdmin
