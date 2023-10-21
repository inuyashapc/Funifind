import Image from "next/image";
import React, { useState } from "react";
import logoFull from "../../../public/images/logo-full.png";
import authService from "../../services/auth.service";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Login({ setIsLoginModalOpen }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const [message, setMessage] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const checkEmail = (input) => {
    const emailRegex = /^[^\s@]+@fpt\.edu\.vn$/;
    return emailRegex.test(input);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    console.log("check", checkEmail(email));
    checkEmail(email)
      ? authService
          .login(formData)
          .then(() => {
            router.reload();
          })
          .catch((error) =>
            setMessage({
              ...message,
              email: "",
              password: "Nhap password lai",
            })
          )
      : setMessage({
          ...message,
          email: "Khong phai dinh dang mail @fpt.edu.vn",
        });
  };
  return (
    <div className="auth-form">
      <div className="text-center mb-3">
        <Link href="/">
          <Image src={logoFull} alt="logo" />
        </Link>
      </div>
      <h4 className="text-center mb-4 text-white">Sign in your account</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="mb-1 text-white">
            <strong>Email</strong>
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="account@fpt.edu.vn"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {message.email && (
            <small className="text-red-400">{message.email}</small>
          )}
        </div>
        <div className="form-group">
          <label className="mb-1 text-white">
            <strong>Password</strong>
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {message.password && (
            <small className="text-red-400">{message.password}</small>
          )}
        </div>
        <div className="form-row d-flex justify-content-between mt-4 mb-2">
          <div className="form-group">
            <div className="custom-control custom-checkbox ml-1 text-white">
              <input
                type="checkbox"
                className="custom-control-input"
                id="basic_checkbox_1"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
              />
              <label
                className="custom-control-label"
                htmlFor="basic_checkbox_1"
              >
                Remember my preference
              </label>
            </div>
          </div>
          <div className="form-group">
            <Link className="text-white" href="./forgot-password">
              Forgot Password?
            </Link>
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn bg-white text-primary btn-block">
            Sign Me In
          </button>
        </div>
      </form>
      <div className="new-account mt-3">
        <p className="text-white">
          Dont have an account?{" "}
          <Link className="text-white" href="/register">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
