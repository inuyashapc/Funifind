import React from "react";
import LayoutAdmin from "@/layouts/layoutAdmin";
import locationService from "@/services/location.service";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function CreateLocation() {
  const router = useRouter();
  const createLocation = async (name) => {
    try {
      const result = await locationService.createLocation(name);
      toast.success("Create successfully", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      console.log("🚀 ========= error:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createLocation(e.target.firstname.value);
    e.target.firstname.value = "";
  };

  return (
    <LayoutAdmin>
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Create location
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Tòa nhà
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="col-span-full">
                <button className="btn btn-primary">Create</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </LayoutAdmin>
  );
}
