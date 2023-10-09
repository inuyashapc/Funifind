import React from 'react'

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
                                                    <a href="index.html">
                                                        <img src="images/logo-full.png" alt="" />
                                                    </a>
                                                </div>
                                                <h4 className="text-center mb-4 text-white">
                                                    Forgot Password
                                                </h4>
                                                <form action="index.html">
                                                    <div className="form-group">
                                                        <label className="text-white">
                                                            <strong>Email</strong>
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            defaultValue="hello@example.com"
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