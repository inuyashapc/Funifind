import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import Footer from "@/components/admin/navbar/footer";
import Navbar from "@/components/admin/navbar/navbar";

export default function LayoutUser({ children }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div>
      <Navbar user={user} setUser={setUser} />
      <div className="flex">
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
  );
}
