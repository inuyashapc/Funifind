import Image from "next/image";
import React, { useEffect, useState, Fragment } from "react";
import logo from "../../../../public/images/logo.png";
import logoText from "../../../../public/images/logo-text.png";
import avt from "../../../../public/images/profile/17.jpg";
import Link from "next/link";
import Profiles from "@/pages/profiles/[id]";
import { Popover, Transition } from "@headlessui/react";
import IconNotification from "../../../../public/Icons/IconNotification";

export default function Navbar({ user, setUser }) {
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload();
  };
  const [id, setId] = useState();
  useEffect(() => {
    // Lấy dữ liệu từ Local Storage khi component được mount
    const data = localStorage.getItem("user");

    if (data) {
      console.log("Dữ liệu từ Local Storage:", JSON.parse(data));
      setId(JSON.parse(data).id);
    } else {
      console.log("Không có dữ liệu trong Local Storage.");
    }
  }, []);
  return (
    <div>
      <div className="nav-header">
        <Link href="/" className="brand-logo">
          <Image className="logo-abbr" src={logo} alt="logo" />
          {/* <Image className="logo-compact" src={logoText} alt="logo" />
          <Image className="brand-title" src={logoText} alt="logo" /> */}
        </Link>
      </div>
      <div className="header">
        <div className="flex justify-end items-center h-full gap-2 mr-8">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button>
                  <IconNotification />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute left-1/4 z-10 mt-3 w-screen max-w-sm -translate-x-1/4 transform px-4 sm:px-0 lg:max-w-3xl ">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 mx-1 my-1">
                      <div className="bg-gray-50">
                        <a
                          href="##"
                          className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <span className="flex items-center">
                            <span className="text-sm font-medium text-gray-900">
                              Bài đăng bị reject
                            </span>
                          </span>
                          <span className="block text-sm text-gray-500">
                            Bài đăng của bạn đã bị ThangNH reject
                          </span>
                        </a>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          <Image className="rounded-circle" src={avt} alt="logo" />
          {user ? (
            <div>
              <Link className="btn" href={`/profiles/${id}`}>
                {user?.name}
              </Link>
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link className="btn btn-primary" href={"/login/"}>
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
