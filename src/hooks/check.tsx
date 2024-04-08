import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = ({ children }:any) => {
 let user;
 try {
    user = JSON.parse(localStorage.getItem("user")!);
 } catch (error) {
    console.error("Error parsing user data from localStorage:", error);
    return <Navigate to="/" />;
 }

 if (!user || user.role !== "admin") {
    alert('Bạn không có quyền truy cập vào trang này');
    return <Navigate to="/" />;
 }

 return children ? children : <Outlet />;
};

export default ProtectedRoutes;