import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import Footer from "@/components/admin/navbar/footer";
import Navbar from "@/components/admin/navbar/navbar";
import Sidebar from "@/components/admin/navbar/sidebar";

export default function LayoutAdmin({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return user?.isAdmin ? (
    <div>
      <Navbar user={user} setUser={setUser} />
      <div className="flex">
        <Sidebar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 col-xxl-12">
              <div className="row">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-header d-block pb-0 border-0">
                      {children}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ToastContainer />
    </div>
  ) : (
    <div>
      <Navbar user={user} setUser={setUser} />
      <div className="flex mt-4">
        <Sidebar />
        <h4>Only admins have permission to view</h4>
      </div>
      <Footer />
    </div>
  );
}
