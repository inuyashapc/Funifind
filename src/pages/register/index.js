import React, { useState } from "react";
import authService from '../../services/auth.service';
import Link from "next/link";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
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
    authService.register(formData)
      .then(response => {
        setSuccess(response.data.message);
        setErrors([])
      })
      .catch(err => {
        if (err.response.data) {
          setErrors(errors => [err.response.data.message]);
          setSuccess("")
        }
      })
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
                      <Link href="/">
                        <img src="images/logo-full.png" alt="" />
                      </Link>
                    </div>
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
                        <small key={index} className='text-orange-400'>{error}</small>
                      ))}
                      {success !== "" ? (<small className='text-red-300'>{success}</small>) : (<small></small>)}
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
                        <a className="text-white font-bold" href="./login">
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
      </div>
    </div>
  );
}

export default RegistrationForm;
