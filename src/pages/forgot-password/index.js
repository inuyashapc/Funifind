import React from 'react'
import Image from 'next/image'
import logo from '../../../public/images/logo.png'
import FUniFind from "../../../public/images/FUniFind.png";

export default function ForgotPassword() {
    return (
        <>
            <>
                <div className="authincation h-100">
                    <div className="container h-100">
                        <div className="row justify-content-center h-100 align-items-center">
                            <div className="col-md-6">
                                <div className="authincation-content">
                                    <div className="row no-gutters">
                                        <div className="col-xl-12">
                                            <div className="auth-form">
                                                <div className="text-center mb-3">
                                                    <a href="./">
                                                        <Image src={FUniFind} alt="logo" />
                                                    </a>
                                                </div>
                                                <h4 className="text-center mb-4 text-white">
                                                    Forgot Password
                                                </h4>
                                                <form action="">
                                                    <div className="form-group">
                                                        <label className="text-white">
                                                            <strong>Email</strong>
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            placeholder="your-account@fpt.edu.vn"
                                                        />
                                                    </div>
                                                    <div className="text-center">
                                                        <button
                                                            type="submit"
                                                            className="btn bg-white text-primary btn-block"
                                                        >
                                                            SUBMIT
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/***********************************
  Scripts
    ************************************/}
                {/* Required vendors */}
            </>

        </>
    )
}