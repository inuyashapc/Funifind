import React, { useEffect, useState } from "react";
import Navbar from "@/components/admin/navbar/navbar";
import LayoutAdmin from "@/layouts/layoutAdmin";
import { toast } from "react-toastify";

export default function ListUser() {
  const [listUser, setListUser] = useState([]);

  function isUserInLocalStorage() {
    const storageId = JSON.parse(localStorage.getItem('user'));
    return storageId.id
  }

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const token = userData ? userData.accessToken : null;

    if (token) {
      const headers = {
        "x-access-token": token,
      };

      fetch(process.env.NEXT_PUBLIC_BASE_URL + "users", {
        method: "GET",
        headers: headers,
      })
        .then((response) => response.json())
        .then((data) => {
          setListUser(data);
        })
        .catch((error) => {
          console.error("Call API error: " + error);
        });
    } else {
      console.error("No token in local storage");
    }
  }, []);

  const handleIsActive = (id) => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const token = userData ? userData.accessToken : null;
    const requestBody = {
      userId: id,
    };

    if (token) {
      const headers = {
        "x-access-token": token,
        "Content-Type": "application/json",
      };

      fetch(process.env.NEXT_PUBLIC_BASE_URL + "users/changeActive", {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(requestBody),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.isActive === true) {
            toast.success("Active successfully", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          } else {
            toast.warn("Deactive successfully", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
        })
        .catch((error) => {
          console.error("Call API error: " + error);
        });
    } else {
      console.error("No token in local storage");
    }
  };

  const handleIsAdmin = (id) => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const token = userData ? userData.accessToken : null;
    const requestBody = {
      userId: id,
    };

    if (token) {
      const headers = {
        "x-access-token": token,
        "Content-Type": "application/json",
      };

      fetch(process.env.NEXT_PUBLIC_BASE_URL + "users/setAdmin", {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(requestBody),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.isAdmin === true) {
            toast.success(data.name + " is admin now", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          } else {
            toast.warn(data.name + " is not admin now", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
        })
        .catch((error) => {
          console.error("Call API error: " + error);
        });
    } else {
      console.error("No token in local storage");
    }
  };

  return (
    <LayoutAdmin>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-responsive-lg mb-0 table-striped">
            <thead>
              <tr>
                {/* <th className="">
                  <div className="custom-control custom-checkbox mx-2">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="checkAll"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="checkAll"
                    />
                  </div>
                </th> */}
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th className="pl-5">Address</th>
                <th className="text-center">Active</th>
                <th className="text-center">Admin</th>
              </tr>
            </thead>
            <tbody id="customers">
              {listUser?.map((user, index) => (
                <tr key={index} className="btn-reveal-trigger">
                  {/* <td>
                    <div className="custom-control custom-checkbox mx-2">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id={`checkbox${index}`}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor={`checkbox${index}`}
                      />
                    </div>
                  </td> */}
                  <td className="py-3">
                    <a href="#">
                      <div className="media d-flex align-items-center">
                        <div className="media-body">
                          <h5 className="mb-0 fs--1">{user.name}</h5>
                        </div>
                      </div>
                    </a>
                  </td>
                  <td className="py-2">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${user.email}`}
                    >
                      {user.email}
                    </a>
                  </td>
                  <td className="py-2">{user.phoneNumber}</td>
                  <td className="py-2 pl-5 wspace-no">{user.address.substring(0, 20) + "..."}</td>
                  <td className="py-2 text-center">
                    {isUserInLocalStorage() == user._id ? (
                      <input
                        type="checkbox"
                        defaultChecked={user.isActive}
                        disabled
                        className="opacity-30"
                      />
                    ) : (
                      <input
                        type="checkbox"
                        defaultChecked={user.isActive}
                        onClick={() => handleIsActive(user._id)}
                      />
                    )}
                  </td>
                  <td className="py-2 text-center">
                    {isUserInLocalStorage() == user._id ? (
                      <input
                        type="checkbox"
                        defaultChecked={user.isAdmin}
                        disabled
                        className="opacity-30"
                      />
                    ) : (
                      <input
                        type="checkbox"
                        defaultChecked={user.isAdmin}
                        onClick={() => handleIsAdmin(user._id)}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </LayoutAdmin>
  );
}
