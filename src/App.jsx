import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import AllBlogs from "./pages/allBlogs/AllBlogs";
import NoPage from "./pages/nopage/Nopage";
import BlogInfo from "./pages/blogInfo/BlogInfo";
import AdminLogin from "./pages/admin/adminLogin/AdminLogin";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import MyState from "./context/data/MyState";
import CreateBlog from "./pages/admin/createBlog/CreateBlog";

import { Toaster } from "react-hot-toast";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/Login/SignIn";
import Logout from "./Components/Logout/Logout";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
        <Route path="/" element={<SignUp/>} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/logout" element={<Logout />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/allblogs" element={<AllBlogs />} />
          <Route path="/bloginfo/:id" element={<BlogInfo />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/dashboard" element={
            <ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/createblog" element={
            <ProtectedRouteForAdmin>
              <CreateBlog />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  )
}

export default App


export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('admin'));
  const adminEmail1 = import.meta.env.VITE_ADMIN_EMAIL_1;
  const adminEmail2 = import.meta.env.VITE_ADMIN_EMAIL_2;
  
  if (admin?.user?.email === adminEmail1 || admin?.user?.email === adminEmail2) {
    return children;
  } else {
    return <Navigate to={'/adminlogin'} />;
  }
};




// export const ProtectedRouteForAdmin = ({ children }) => {
//   const admin = JSON.parse(localStorage.getItem('admin'));
//   const adminEmail1 = import.meta.env.REACT_APP_ADMIN_EMAIL_1;
//   const adminEmail2 = import.meta.env.REACT_APP_ADMIN_EMAIL_2;
  
//   if (admin?.user?.email === adminEmail1 || admin?.user?.email === adminEmail2) {
//     return children;
//   } else {
//     return <Navigate to={'/adminlogin'} />;
//   }
// };