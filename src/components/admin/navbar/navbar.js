import Image from "next/image";
import authService from "../../../services/auth.service";
import React, { useEffect, useState, Fragment } from "react";
import FUniFind from "../../../../public/images/FUniFind.png";
import logo from "../../../../public/images/logo.png";
import logoText from "../../../../public/images/logo-text.png";
import avt from "../../../../public/images/profile/17.jpg";
import Link from "next/link";
import Profiles from "@/pages/profiles/[id]";
import Modal from "@/components/modal/Modal";
import Login from "@/pages/login";

import { Popover, Transition } from "@headlessui/react";
import IconNotification from "../../../../public/Icons/IconNotification";

export default function Navbar({ user, setUser }) {
  //Register modal
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log(formData);
    authService
      .register(formData)
      .then((response) => {
        setSuccess(response.data.message);
        setErrors([]);
      })
      .catch((err) => {
        if (err.response.data) {
          setErrors((errors) => [err.response.data.message]);
          setSuccess("");
        }
      });
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/";
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
          <Image className="logo-abbr" src={FUniFind} alt="logo" />
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
              <button className="btn btn-primary" onClick={openLoginModal}>
                Login
              </button>
              <button className="btn btn-primary" onClick={openRegisterModal}>
                Register
              </button>
            </div>
          )}

          <Modal isOpen={isRegisterModalOpen} onClose={closeRegisterModal}>
            {/* Đưa nội dung form đăng ký vào đây */}
            {/* Ví dụ: */}
            <div>
              {/* <div className="authincation h-100">
                <div className="container h-100"> */}
              <div className="row justify-content-center h-100 align-items-center">
                <div className="col-md-11 p-4">
                  <div className="">
                    <div className="row no-gutters">
                      <div className="col-xl-12">
                        <div className="auth-form">
                          <h4 className="text-center mb-4 text-white">
                            Sign up your account
                          </h4>
                          <form onSubmit={handleSubmit}>
                            <div className="form-group">
                              <label className="mb-1 text-white">
                                <strong>Username</strong>
                              </label>
                              <input
                                type="text"
                                className="form-control text-black"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Type your name"
                              />
                            </div>
                            <div className="form-group">
                              <label className="mb-1 text-white">
                                <strong>Email</strong>
                              </label>
                              <input
                                type="email"
                                className="form-control text-black"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="account@fpt.edu.vn"
                              />
                            </div>
                            <div className="form-group">
                              <label className="mb-1 text-white">
                                <strong>Password</strong>
                              </label>
                              <input
                                type="password"
                                className="form-control text-black"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                placeholder="••••••••"
                              />
                            </div>
                            <div className="form-group">
                              <label className="mb-1 text-white">
                                <strong>Phone Number</strong>
                              </label>
                              <input
                                type="tel"
                                className="form-control text-black"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder="0123456xxx"
                                required
                              />
                            </div>
                            <div className="form-group">
                              <label className="mb-1 text-white">
                                <strong>Address</strong>
                              </label>
                              <input
                                type="text"
                                className="form-control text-black"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Type your address"
                                required
                              />
                            </div>
                            {errors.map((error, index) => (
                              <small key={index} className="text-orange-400">
                                {error}
                              </small>
                            ))}
                            {success !== "" ? (
                              <small className="text-red-300">{success}</small>
                            ) : (
                              <small></small>
                            )}
                            <div className="text-center mt-4">
                              <button
                                type="submit"
                                className="btn bg-white text-primary btn-block"
                              >
                                Sign me up
                              </button>
                            </div>
                          </form>
                          <div className="new-account mt-3">
                            <p className="text-white">
                              Already have an account?{" "}
                              <a
                                className="text-white font-bold"
                                href="./login"
                              >
                                Sign in
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* </div>
              </div> */}
            </div>
          </Modal>
          <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
            <Login setIsLoginModalOpen={setIsLoginModalOpen} />
          </Modal>
        </div>
      </div>
    </div>
  );
}
