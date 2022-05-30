import { async } from "@firebase/util";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast, ToastContainer } from "react-toastify";
import useAdmin from "../Authentication/useAdmin";
import auth from "../firebase.init";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const update = {
      address: event.target.address.value,
      phone: event.target.phone.value,
      education: event.target.education.value,
    };
    console.log(update);
    fetch(`https://manufacture-narco.herokuapp.com/user?email=${user.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(update),
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an Admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);
          toast.success("Success");

          refetch();
        }
      });
  };

  const [user] = useAuthState(auth);

  const { data, isLoading, refetch } = useQuery("user", () =>
    fetch(`https://manufacture-narco.herokuapp.com/user?email=${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="min-h-screen flex  justify-center pt-20 ">
      <div className="flex flex-col items-center ">
        <div class="avatar  ">
          <div class="w-[150px] rounded-full border-8 border-primary-focus">
            <img
              src={
                user.photoURL
                  ? user.photoURL
                  : "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-0.jpg"
              }
              alt="user"
            />
          </div>
        </div>
        <div className="py-10 font-serif font-extrabold">
          {data.role === "admin" && (
            <h1 className="">{user?.displayName} (Admin)</h1>
          )}
          {data.role !== "admin" && (
            <h1 className="">{user?.displayName}(Regular User)</h1>
          )}
          <p>Email : {data?.email}</p>
          {data?.education && <p>Education : {data?.education}</p>}
          {data?.address && <p>Address : {data?.address}</p>}
          {data?.phone && <p>Contact-No : {data?.phone}</p>}
        </div>
        <label for="my-modal" class="btn modal-button bg-primary">
          Update Profile
        </label>

        {/* <!-- Put this part before </body> tag --> */}
        <input type="checkbox" id="my-modal" class="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <label
              for="my-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-center font-bold text-lg">Update Profile</h3>
            <form
              onSubmit={handleSubmit}
              className="mt-5 grid grid-cols-1 gap-3 justify-items-center"
            >
              <input
                type="text"
                name="name"
                value={user?.displayName}
                disabled
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="email"
                name="email"
                value={data.email}
                disabled
                placeholder="Email"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Your Address"
                name="address"
                className="input input-bordered w-full max-w-xs"
              />

              <input
                type=""
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                id="education"
                name="education"
                placeholder="Education"
                className="input input-bordered w-full max-w-xs"
              />

              <input
                type="submit"
                value="Update"
                className=" btn btn-bordered btn-secondary  max-w-xs"
              />
            </form>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default MyProfile;
