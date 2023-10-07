import Image from "next/image";
import React, { useState } from "react";
import logoFull from "../../../public/images/logo-full.png";
import authService from "../../services/auth.service";
import { useRouter } from "next/router";
export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const [message, setMessage] = useState();
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
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", process.env.NEXT_PUBLIC_API_URL);
    console.log("check", checkEmail(email));
    checkEmail(email)
      ? authService
          .login(formData)
          .then(() => {
            router.push("/");
          })
          .catch((error) => {
            console.log("error: ", error);
          })
      : setMessage("Khong phai dinh dang mail @fpt.edu.vn");
  };
  return (
    <div className="authincation h-100">
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-md-6">
            <div className="authincation-content">
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <div className="auth-form">
                    <div className="text-center mb-3">
                      <a href="index.html">
                        <Image src={logoFull} alt="logo" />
                      </a>
                    </div>
                    <h4 className="text-center mb-4 text-white">
                      Sign in your account
                    </h4>
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label className="mb-1 text-white">
                          <strong>Email</strong>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="hello@example.com"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                        <small className="text-red-400">{message}</small>
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
                          <a
                            className="text-white"
                            href="page-forgot-password.html"
                          >
                            Forgot Password?
                          </a>
                        </div>
                      </div>
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn bg-white text-primary btn-block"
                        >
                          Sign Me In
                        </button>
                      </div>
                    </form>
                    <div className="new-account mt-3">
                      <p className="text-white">
                        Dont have an account?{" "}
                        <a className="text-white" href="./page-register.html">
                          Sign up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
