import Footer from "@/components/admin/navbar/footer";
import Navbar from "@/components/admin/navbar/navbar";
import Sidebar from "@/components/admin/navbar/sidebar";
import React, { useEffect, useState } from "react";

export default function LayoutAdmin({ children }) {
  const [user, setUser] = useState();
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  return (
    <div>
      <Navbar user={user} setUser={setUser} />
      <Sidebar />
      {children}
      <Footer />
    </div>
  );
}
