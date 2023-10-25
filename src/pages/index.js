import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/components/admin/navbar/navbar";
import Sidebar from "@/components/admin/navbar/sidebar";
import Footer from "@/components/admin/navbar/footer";
import avt from "../../public/images/profile/16.jpg";
import Image from "next/image";
import { Dialog, Transition, Menu, Listbox, Fragment } from "@headlessui/react";
import { useEffect, useState } from "react";
import CreatePost from "./admin/list-post/create";
import IconCheck from "../../public/Icons/IconCheck";
import IconChevronUpDown from "../../public/Icons/IconChevronUpDown";
import locationService from "@/services/location.service";
export default function Home() {
  const place = [
    { name: "All" },
    { name: "Alpha" },
    { name: "Beta" },
    { name: "Gama" },
    { name: "Delta" },
    { name: "Dom A" },
    { name: "Nhà Xe" },
  ];
  const [user, setUser] = useState();
  const [open, setOpen] = useState(false);
  const [locationList,setLocationList] = useState([])
  const [selected, setSelected] = useState(place[0]);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
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
  const listPost = [
    {
      id: 1,
      title: "Test name post quá độ dài của card",
      description: "This is first post",
    },
    {
      id: 2,
      title: "Post2",
      description: "This is first post",
    },
    {
      id: 3,
      title: "Post3",
      description: "This is first post",
    },
    {
      id: 4,
      title: "Post4",
      description: "This is first post",
    },
    {
      id: 1,
      title: "Post1",
      description: "This is first post",
    },
    {
      id: 2,
      title: "Post2",
      description: "This is first post",
    },
    {
      id: 3,
      title: "Post3",
      description: "This is first post",
    },
    {
      id: 4,
      title: "Post4",
      description: "This is first post",
    },
    {
      id: 1,
      title: "Post1",
      description: "This is first post",
    },
    {
      id: 2,
      title: "Post2",
      description: "This is first post",
    },
    {
      id: 3,
      title: "Post3",
      description: "This is first post",
    },
    {
      id: 4,
      title: "Post4",
      description: "This is first post",
    },
  ];
  function toggleClass(element, className) {
    if (!element.classList.contains(className)) {
      element.classList.add(className);
    } else element.classList.remove(className);
  }
  const handleOnclickBtnLike = () => {
    toggleClass(document.querySelector(".btnlike-content"), "heart-active");
    toggleClass(document.querySelector(".btnlike-heart"), "heart-active");
    toggleClass(document.querySelector(".btnlike-text"), "heart-active");
    toggleClass(document.querySelector(".btnlike-numb"), "heart-active");
    console.log(document.querySelector(".heart-btn"));
  };
  function closeModal() {
    setOpen(false);
  }

  function openModal() {
    setOpen(true);
  }

  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <div className="content row">
        <Sidebar />
        <Transition appear show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-60"
              leave="ease-in duration-200"
              leaveFrom="opacity-60"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Bài đăng mới
                    </Dialog.Title>
                    <div className="mt-2">
                      <CreatePost />
                    </div>

                    {/* <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Đăng bài
                      </button>
                    </div> */}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        <div className="col container-fluid">
          <div class=" justify-center">
            <div class="card-header">
              <div className="flex items-center gap-2 justify-start">
                <Image
                  className="rounded-circle"
                  src={avt}
                  alt="logo"
                  style={{
                    height: "50px",
                    width: "50px",
                    cursor: "pointer",
                  }}
                />
                <button
                  type="button"
                  className="btn btn-outline-primary rounded-pill px-3 py-2 "
                  onClick={openModal}
                >
                  Đăng bài
                </button>
              </div>
              <div className="w-25">
                <Listbox value={selected} onChange={setSelected}>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                      <span className="block truncate">{selected.name}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <IconChevronUpDown />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-80"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {place.map((person, personIdx) => (
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
                                    <IconCheck />
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
              </div>
            </div>
          </div>

          <div
            className="row px-2"
            style={{ maxHeight: "80vh", overflow: "auto" }}
          >
            {listPost?.map((post, index) => (
              <div key={index} className="col-9 ">
                <div
                  className="card px-3 pt-1 shadow  mb-5 bg-white rounded"
                  // style={{ width: "18rem" }}
                >
                  <div className="flex items-center gap-2 justify-content-between">
                    <div className="flex items-center gap-2 ">
                      <Image
                        className="rounded-circle"
                        src={avt}
                        alt="logo"
                        style={{
                          height: "40px",
                          width: "40px",
                          cursor: "pointer",
                        }}
                      />
                      <div>
                        <a
                          href="#"
                          className="hover-decoration "
                          style={{ color: "black" }}
                        >
                          ThangNH
                        </a>
                        <div style={{ fontSize: "12px" }}>20:00</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 justify-end md:justify-end">
                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        <div>
                          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white bg-opacity-20 px-4 py-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-opacity-75">
                            Options
                            {/* <ChevronDownIcon
                              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                              aria-hidden="true"
                            /> */}
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="px-1 py-1 ">
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    className={`${
                                      active
                                        ? "bg-violet-500 text-white"
                                        : "text-gray-900"
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                  >
                                    {/* {active ? (
                                      <EditActiveIcon
                                        className="mr-2 h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <EditInactiveIcon
                                        className="mr-2 h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    )} */}
                                    Edit
                                  </button>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    className={`${
                                      active
                                        ? "bg-violet-500 text-white"
                                        : "text-gray-900"
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                  >
                                    {/* {active ? (
                                      <DuplicateActiveIcon
                                        className="mr-2 h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <DuplicateInactiveIcon
                                        className="mr-2 h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    )} */}
                                    Report
                                  </button>
                                )}
                              </Menu.Item>
                            </div>
                            <div className="px-1 py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    className={`${
                                      active
                                        ? "bg-violet-500 text-white"
                                        : "text-gray-900"
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                  >
                                    {/* {active ? (
                                      <ArchiveActiveIcon
                                        className="mr-2 h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <ArchiveInactiveIcon
                                        className="mr-2 h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    )} */}
                                    Share
                                  </button>
                                )}
                              </Menu.Item>
                            </div>
                            <div className="px-1 py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    className={`${
                                      active
                                        ? "bg-violet-500 text-white"
                                        : "text-gray-900"
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                  >
                                    {/* {active ? (
                                      <DeleteActiveIcon
                                        className="mr-2 h-5 w-5 text-violet-400"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <DeleteInactiveIcon
                                        className="mr-2 h-5 w-5 text-violet-400"
                                        aria-hidden="true"
                                      />
                                    )} */}
                                    Delete
                                  </button>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="flex select-none justify-start space-x-2 md:justify-start pt-2">
                    <div
                      className="flex rounded-full border border-zinc-200 bg-zinc-50 px-2 py-1 dark:border-zinc-700 white:bg-zinc-900"
                      style={{ cursor: "pointer" }}
                    >
                      <span className="pt-[3px] text-xs leading-none text-cyan-600 white:text-cyan-300">
                        Tag1
                      </span>
                    </div>
                    <div
                      className="flex rounded-full border border-zinc-200 bg-zinc-50 px-2 py-1 dark:border-zinc-700 white:bg-zinc-900"
                      style={{ cursor: "pointer" }}
                    >
                      <span className="pt-[3px] text-xs leading-none text-cyan-600 white:text-cyan-300">
                        Tag2
                      </span>
                    </div>
                  </div>
                  <div
                    className="text-truncate text-truncate-multiline-ellipsis"
                    style={{
                      width: "90%",
                      overflowWrap: "break-word",
                    }}
                  >
                    <a
                      href="#"
                      className="card-title my-2 hover-decoration "
                      title={post.title}
                    >
                      {post.title}
                    </a>
                  </div>

                  <div style={{ padding: "10px 00px 0px 10px" }}>
                    <p className="card-text">{post.description}</p>

                    <a
                      href="#"
                      className="card-link  text-primary hover-decoration "
                    >
                      View more
                    </a>
                  </div>

                  <img
                    src="https://cosmic-nextjs-blog.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2Fbab6b030-ff1e-11ed-8fca-9b0db64c9b86-nasa-vhSz50AaFAs-unsplash.jpg%3Fw%3D1400%26auto%3Dformat&w=3840&q=75"
                    class="card-img-top"
                    alt="f"
                  />
                  <div className="heart-btn">
                    <div
                      className="btnlike-content items-center"
                      onClick={() => handleOnclickBtnLike()}
                    >
                      <span className="btnlike-heart"></span>
                      <span className="btnlike-text ">Like</span>
                      <span className="btnlike-numb">12</span>
                    </div>
                  </div>
                  <div className="comment">This is comment of post</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
