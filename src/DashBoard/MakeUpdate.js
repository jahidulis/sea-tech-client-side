import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { set } from "react-hook-form";
import { useQuery } from "react-query";
import { toast, ToastContainer } from "react-toastify";

import Loading from "../Shared/Loading";

const MakeUpdate = () => {
  const [flag, setFlag] = useState(0);
  const [loading, setLoading] = useState(0);

  // const { data, isLoading, refetch } = useQuery("user", () =>
  //   fetch("https://manufacture-narco.herokuapp.com/allUser", {
  //     method: "GET",
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   }).then((res) => res.json())
  // );
  // console.log(data);
  // if (isLoading) {
  //   return <Loading></Loading>;
  // }

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://manufacture-narco.herokuapp.com/allUser", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(1);
      });
  }, [flag]);

  const makeAdmin = (email) => {
    fetch(`https://manufacture-narco.herokuapp.com/users/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFlag(!flag);
      });
  };
  const deleteUser = (email) => {
    fetch(`https://manufacture-narco.herokuapp.com/users/admin/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === false) {
          toast.error("Can't Delete Admin You Need To Check The Policy");
        } else {
          toast.success("User Deleted");
          setFlag(!flag);
        }
        console.log(data);
        // setFlag(!flag);
      });
  };
  if (!loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead className="text-center">
            <tr>
              <th>No.</th>
              <th>Email</th>
              <th>Change Access</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {console.log(data)}

            {console.log(typeof data)}
            {data?.map((user, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{user?.email}</td>
                <td>
                  {!user.role && (
                    <button
                      onClick={() => makeAdmin(user?.email)}
                      className="btn mr-3"
                    >
                      Make Admin
                    </button>
                  )}
                  <button
                    onClick={() => deleteUser(user?.email)}
                    className="btn"
                  >
                    Delete User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MakeUpdate;
