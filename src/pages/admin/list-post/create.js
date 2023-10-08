import LayoutAdmin from "@/layouts/layoutAdmin";
import React from "react";

export default function CreatePost() {
  return (
    <LayoutAdmin>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 col-xxl-12">
              <div className="row">
                <div className="col-xl-12">
                  <div className="card p-8">
                    <form>
                      <div className="form-group row">
                        <label
                          htmlFor="staticEmail"
                          className="col-sm-2 col-form-label"
                        >
                          Email
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="text"
                            readOnly=""
                            className="form-control-plaintext"
                            id="staticEmail"
                            defaultValue="email@example.com"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="inputPassword"
                          className="col-sm-2 col-form-label"
                        >
                          Password
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="password"
                            className="form-control"
                            id="inputPassword"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
}
