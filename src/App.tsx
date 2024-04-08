import { Route, Routes } from "react-router-dom";
import ProductAdd from "./compoment/Admin/ProductAdd";
import ProductEdit from "./compoment/Admin/ProductEdit";
import Products from "./compoment/Admin/Products";
import LayoutWebsite from "./compoment/Website/LayoutWebsite";
import CartPage from "./pages/CartPage";
import CheckOutPage from "./pages/CheckOutPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import RegisterPage from "./pages/Register";
import './style/checkout.scss';
import Category from "./compoment/Admin/category/Category";
import LayoutAdmin from "./compoment/Admin/LayoutAdmin";
import CategoryAdd from "./compoment/Admin/category/CategoryAdd";
import CategoryUpdate from "./compoment/Admin/category/CategoryUpdate";
import Order from "./compoment/Admin/order/Orders";
import OrderDetail from "./compoment/Admin/order/OrderDetail";
import OrderUpdatePage from "./compoment/Admin/order/OrderUpdate";
import UsersPage from "./compoment/Admin/users/Users";
import UserUpdatePage from "./compoment/Admin/users/UserUpdate";

function App() {
 
  return (
    <>
  <Routes>
    <Route path="/" element={<LayoutWebsite />}>
    <Route index element={<HomePage />} />
    <Route path="/detail/:id" element={<ProductDetail />}/>
    <Route path="/cart" element={<CartPage />}/>
    <Route path="/checkout" element={<CheckOutPage />}/>
    <Route path="/register" element={<RegisterPage />}/>
    <Route path="/login" element={<LoginPage />}/>
    </Route>
    <Route path="/admin" element={<LayoutAdmin />} >
       <Route path="/admin/products" element={<Products />}/>
       <Route path="/admin/products/add" element={<ProductAdd />}/>
       <Route path="/admin/products/:id" element={<ProductEdit />}/>
       <Route path="/admin/category" element={<Category />}/>
       <Route path="/admin/category/add" element={<CategoryAdd />}/>
       <Route path="/admin/category/:id" element={<CategoryUpdate />}/>
       <Route path="/admin/order" element={<Order />}/>
       <Route path="/admin/order/:id/detail" element={<OrderDetail />}/>
       <Route path="/admin/order/:id" element={<OrderUpdatePage />}/>
       <Route path="/admin/user" element={<UsersPage />}/>
       <Route path="/admin/user/:id" element={<UserUpdatePage />}/>
    </Route>
   

  </Routes>
    </>
  );  
}

export default App;
