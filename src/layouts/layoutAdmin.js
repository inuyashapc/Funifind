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
        {children}
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
