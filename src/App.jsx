import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Homepage from "./pages/Homepage";
import NoPage from "./pages/NoPage";

import Cart from "./pages/Cart";
import AllProduct from "./pages/AllProduct";
import Signup from "./pages/Validation/Signup";
import Login from "./pages/Validation/Login";
import MainPerson from "./pages/mainper/MainPerson";
import AddProduct from "./pages/mainper/AddProduct";
import UpdateProduct from "./pages/mainper/UpdateProduct";
import { Toaster } from "react-hot-toast";
import MyState from "./context/myState";
import { ProtectedRouteForAdmin } from "./protectedroute/ProtectedRouteForAdmin";
import CategoryPage from "./pages/category/CategoryPage";
import Scroll from "./components/scroll.jsx/Scroll";
import ProductInfo from "./pages/ProductInfo";


const App = () => {
  return (
    <MyState>
   <Router>
    <Scroll/>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/*" element={<NoPage/>}/>
      <Route path="/productinfo/:id" element={<ProductInfo/>}/>
      <Route path="/cart" element={<Cart/>} />
      <Route path="/allproduct" element={<AllProduct/>} />
      <Route path="/signup"  element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/category/:categoryname" element={<CategoryPage/>} />  
      <Route path="/admin-dashboard" element={
        <ProtectedRouteForAdmin>
          <MainPerson/>
        </ProtectedRouteForAdmin>
      } />
      <Route path="/addproduct" element={
        <ProtectedRouteForAdmin>
          <AddProduct/>
        </ProtectedRouteForAdmin>
      } />
      <Route path="/updateproduct/:id" element={
        <ProtectedRouteForAdmin>
          <UpdateProduct/>
        </ProtectedRouteForAdmin>
      } />
    </Routes>
      <Toaster/>
    </Router>  
   </MyState>
  )
}

export default App
