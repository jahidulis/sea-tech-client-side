import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import RequireAuth from "./Authentication/RequireAuth";
import Blog from "./Blog/Blog";
import AddProduct from "./DashBoard/AddProduct";
import AddReview from "./DashBoard/AddReview";
import DashBoard from "./DashBoard/DashBoard";
import MakeUpdate from "./DashBoard/MakeUpdate";
import ManageAllProduct from "./DashBoard/ManageAllProduct";
import ManageProduct from "./DashBoard/ManageProduct";
import MyOrder from "./DashBoard/MyOrder";
import MyProfile from "./DashBoard/MyProfile";
import Home from "./Home/Home";
import Payment from "./Home/Payment";
import Purchase from "./Home/Purchase";
import Login from "./Login/Login";
import SignUp from "./Login/SignUp";
import NotFound from "./NotFound/NotFound";
import Portfolio from "./Portfolio/Portfolio";
import Review from "./Review/Review";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";

function App() {
  const [theme, setTheme] = useState(null);

  return (
    <div data-theme={theme ? "pastel" : "luxury"}>
      <Navbar setTheme={setTheme} theme={theme}></Navbar>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route
          path="/dashBoard"
          element={
            <RequireAuth>
              <DashBoard></DashBoard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="myOrder" element={<MyOrder></MyOrder>}></Route>
          <Route path="payment/:json" element={<Payment></Payment>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          <Route
            path="manageAllOrder"
            element={<ManageAllProduct></ManageAllProduct>}
          ></Route>
          <Route path="addProduct" element={<AddProduct></AddProduct>}></Route>
          <Route path="makeUpdate" element={<MakeUpdate></MakeUpdate>}></Route>
          <Route
            path="manageProduct"
            element={<ManageProduct></ManageProduct>}
          ></Route>
        </Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route path="/reviews" element={<Review></Review>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
