import React, { useEffect, useState } from "react";
import Navbar from "@/components/admin/navbar/navbar";
import LayoutAdmin from "@/layouts/layoutAdmin";

export default function ListUser() {
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    // Lấy dữ liệu từ local storage
    const userData = JSON.parse(localStorage.getItem("user"));

    // Trích xuất token từ userData
    const token = userData ? userData.accessToken : null;

    // Kiểm tra xem có token hay không
    if (token) {
      // Tạo một đối tượng chứa các thông tin cần đính kèm vào header của request
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
  console.log(listUser);

  return (
    <LayoutAdmin>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-responsive-lg mb-0 table-striped">
            <thead>
              <tr>
                <th className="">
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
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th className="pl-5">Address</th>
                <th>Active</th>
                <th />
              </tr>
            </thead>
            <tbody id="customers">
              {listUser?.map((user, index) => (
                <tr key={index} className="btn-reveal-trigger">
                  <td>
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
                  </td>
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
                  <td className="py-2 pl-5 wspace-no">{user.address}</td>
                  <td className="py-2">
                    <input type="checkbox" defaultChecked={user.isActive} />
                  </td>
                  <td className="py-2 text-right">
                    <div className="dropdown">
                      <div className="dropdown-menu dropdown-menu-right border py-0">
                        <div className="py-2">
                          <a className="dropdown-item" href="#!">
                            Edit
                          </a>
                          <a className="dropdown-item text-danger" href="#!">
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
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
