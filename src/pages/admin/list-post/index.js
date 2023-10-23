import React, { useEffect, useState } from "react";
import Link from "next/link";
import LayoutAdmin from "@/layouts/layoutAdmin";
import PostListAccepted from "@/components/admin/postList/postListAccepted";
import PostListNeedAccept from "@/components/admin/postList/postListNeedAccept";
import TabButton from "@/components/admin/tabButton";
import { Listbox, Transition, Fragment } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import locationService from "@/services/location.service";
import BannedPost from "@/components/admin/postList/bannedPost";
export default function PostList() {
  const [posts, setPosts] = useState();

  const [tab, setTab] = useState(1);

  const [search, setSearch] = useState();

  const [locationList, setLocationList] = useState([
    { _id: 1, name: "Khu vực" },
  ]);
  console.log("🚀 ========= locationList:", locationList);

  const tabList = [
    {
      id: 1,
      title: "Post list accepted",
    },
    {
      id: 2,
      title: "Post list need to accept",
    },
    {
      id: 3,
      title: "Post list banned",
    },
  ];

  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const getAllLocation = () => {
    locationService
      .getAllLocation()
      .then((response) => {
        const newLocations = response?.data;

        const uniqueNewLocations = newLocations.filter((newLocation) => {
          return !locationList.find(
            (existingLocation) => existingLocation.name === newLocation.name
          );
        });

        setLocationList([...locationList, ...uniqueNewLocations]);
        console.log("🚀 ========= response1234:", response?.data);
      })
      .catch((error) => {
        console.log(error?.response?.data?.message);
      });
  };

  useEffect(() => {
    getAllLocation();
  }, []);
  const [selected, setSelected] = useState(locationList[0]);
  console.log("🚀 ========= selected:", selected?.name);
  return (
    <LayoutAdmin>
      <div className="d-sm-flex flex-wrap align-items-center d-block mb-md-3 mb-0">
        <div className="mr-auto mb-3">
          <h4 className="text-black fs-20">Post list</h4>
        </div>
        {locationList && (
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{selected?.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-40 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {locationList?.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? "bg-amber-100 text-amber-900"
                            : "text-gray-900"
                        }`
                      }
                      value={person}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {person.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        )}
        <div className="input-group diet-search">
          <input
            type="text"
            className="form-control"
            placeholder="Search theo tên bài viết"
            onChange={handleSearch}
            name="search"
            id="search"
          />
        </div>
        <Link className="btn rounded btn-primary" href={"list-post/create"}>
          Create post
        </Link>
      </div>
      {tabList &&
        tabList.map((item) => (
          <TabButton
            key={item.id}
            id={item.id}
            title={item.title}
            tab={tab}
            setTab={setTab}
          />
        ))}
      {/* Trung thêm prop setPosts để cập nhật comment sau khi người dung comment */}
      {tab === 1 && (
        <PostListAccepted
          posts={posts}
          setPosts={setPosts}
          searchString={search}
          location={selected?._id}
        />
      )}
      {tab === 2 && <PostListNeedAccept searchString={search} />}
      {tab === 3 && (
        <BannedPost searchString={search} location={selected?.name} />
      )}
    </LayoutAdmin>
  );
}
