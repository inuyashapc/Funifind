import React from "react";
import Navbar from "@/components/admin/navbar/navbar";
import LayoutAdmin from "@/layouts/layoutAdmin";
export default function ListUser() {
  return (
    <LayoutAdmin>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-responsive-lg mb-0 table-striped">
            <thead>
              <tr>
                <th className="">
                  <div className="custom-control custom-checkbox mx-2">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="checkAll"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="checkAll"
                    />
                  </div>
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th className="pl-5 width200">Address</th>
                <th>Joined</th>
                <th />
              </tr>
            </thead>
            <tbody id="customers">
              <tr className="btn-reveal-trigger">
                <td>
                  <div className="custom-control custom-checkbox mx-2">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="checkbox1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="checkbox1"
                    />
                  </div>
                </td>
                <td className="py-3">
                  <a href="#">
                    <div className="media d-flex align-items-center">
                      <div className="media-body">
                        <h5 className="mb-0 fs--1">Ricky Antony</h5>
                      </div>
                    </div>
                  </a>
                </td>
                <td className="py-2">
                  <a href="mailto:ricky@example.com">
                    info@example.com
                  </a>
                </td>
                <td className="py-2">
                  {" "}
                  <a href="tel:2012001851">(201) 200-1851</a>
                </td>
                <td className="py-2 pl-5 wspace-no">
                  2392 Main Avenue, Penasauka
                </td>
                <td className="py-2">30/03/2018</td>
                <td className="py-2 text-right">
                  <div className="dropdown">
                    <div className="dropdown-menu dropdown-menu-right border py-0">
                      <div className="py-2">
                        <a className="dropdown-item" href="#!">
                          Edit
                        </a>
                        <a
                          className="dropdown-item text-danger"
                          href="#!"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </LayoutAdmin>
  );
}
