import Image from "next/image";
import React from "react";
import logo from "../../../../public/images/logo.png";
import logoText from "../../../../public/images/logo-text.png";
import avt from "../../../../public/images/profile/17.jpg";
export default function Navbar() {
  return (
    <div>
      <div className="nav-header">
        <a href="index.html" className="brand-logo">
          <Image className="logo-abbr" src={logo} alt="logo" />
          <Image className="logo-compact" src={logoText} alt="logo" />
          <Image className="brand-title" src={logoText} alt="logo" />
        </a>
        <div className="nav-control">
          <div className="hamburger">
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </div>
        </div>
      </div>
      <div className="header">
        <div className="flex justify-end items-center h-full gap-2 mr-8">
          <Image className="rounded-circle" src={avt} alt="logo" />
          <h4>Nguyen Duy Anh</h4>
        </div>
      </div>
    </div>
  );
}
