import Footer from "@/components/admin/navbar/footer";
import Navbar from "@/components/admin/navbar/navbar";
import Sidebar from "@/components/admin/navbar/sidebar";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

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
      <Sidebar />
      {children}
      <Footer />
      <ToastContainer />
    </div>
  ) : (
    <div>
      <Navbar user={user} setUser={setUser} />
      <Sidebar />
      <h4 className="text-center">You do not access this page</h4>
      <Footer />
    </div>
  );
}
