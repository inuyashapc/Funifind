import Image from "next/image";
import React from "react";
import logo from "../../../../public/images/logo.png";
import logoText from "../../../../public/images/logo-text.png";
import avt from "../../../../public/images/profile/17.jpg";
import Link from "next/link";
import Profiles from "@/pages/profiles";
export default function Navbar({ user, setUser }) {
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload();
  };
  return (
    <div>
      <div className="nav-header">
        <a href="./" className="brand-logo">
          <Image className="logo-abbr" src={logo} alt="logo" />
          <Image className="logo-compact" src={logoText} alt="logo" />
          <Image className="brand-title" src={logoText} alt="logo" />
        </a>
      </div>
      <div className="header">
        <div className="flex justify-end items-center h-full gap-2 mr-8">
          <Image className="rounded-circle" src={avt} alt="logo" />
          {user ? (
            <div>
              <Link className="btn" href={"/profiles"}>{user?.name}</Link>
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link className="btn btn-primary" href={"/login"}>
                Login
              </Link>
              <Link className="btn btn-primary" href={"/register"}>
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
