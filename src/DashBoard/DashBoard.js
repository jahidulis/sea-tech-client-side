import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../Authentication/useAdmin";
import auth from "../firebase.init";

const DashBoard = () => {
  const [user, loading, error] = useAuthState(auth);

  const [admin] = useAdmin(user);
  return (
    <div className="container max-w-7xl mx-auto">
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-60 bg-primary text-base-content font-bold font-serif">
            <li>
              <Link to="/dashBoard">My Profile</Link>
            </li>
            {!admin && (
              <>
                <li>
                  <Link to="/dashBoard/myOrder">My Order</Link>
                </li>
                <li>
                  <Link to="/dashBoard/addReview">Add Review</Link>
                </li>
              </>
            )}

            {admin && (
              <>
                <li>
                  <Link to="/dashBoard/manageAllOrder">Manage All Order</Link>
                </li>
                <li>
                  <Link to="/dashBoard/addProduct">Add Product</Link>
                </li>
                <li>
                  <Link to="/dashBoard/makeUpdate">Make Admin</Link>
                </li>
                <li>
                  <Link to="/dashBoard/manageProduct">Manage Product</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
