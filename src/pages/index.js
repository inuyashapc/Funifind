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
import locationService from "@/services/location.service";
import commentService from "@/services/comment.service";
import interactionService from "@/services/interaction.service";
import postService from "@/services/post.service";
import { toast, ToastContainer } from "react-toastify";
import ReactPaginate from "react-paginate";
import dayjs from "dayjs";
import io from "socket.io-client";
import {
  CheckIcon,
  ChevronUpDownIcon,
  ChatBubbleBottomCenterTextIcon,
  HeartIcon,
} from "@heroicons/react/20/solid";

export default function Home() {
  const [user, setUser] = useState();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState();
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPost, setTotalPost] = useState(1);
  const [postPagination, setPostPagination] = useState();
  const [locationList, setLocationList] = useState([
    { _id: 1, name: "Khu vực" },
  ]);
  const [selected, setSelected] = useState(locationList[0]);
  const [socket, setSocket] = useState(null);
  // Kết nối tới sever socket
  useEffect(() => {
    const newSocket = io(process.env.NEXT_PUBLIC_BASE_URL);
    setSocket(newSocket);
  }, []);
  useEffect(() => {
    if (socket) {
      // Khi có một người comment, những người khác sẽ nhận được data của comment thông qua đây
      socket.on("getComment", (response) => {
        console.log(response.data);
        // Thêm comment vừa thêm ngay lập tức tới tất cả user đang xem bài post:
        if (response.data) {
          setPostPagination((listPost) =>
            listPost?.map((post) => {
              if (post._id === response.data.post) {
                // Check xem comment đã được thêm chưa, tránh duplicate
                const isExisted = post.comments.find(
                  (comment) => comment._id === response.data._id
                );
                if (!isExisted) post.comments.push(response.data);
              }
              return post;
            })
          );
        }
      });
    }
  }, [socket]);
  const handleComment = async (e, postID) => {
    e.preventDefault();
    // Dữ liệu cần để tạo ra 1 comment.
    const params = {
      content: e.target.content.value,
      postID,
    };
    // call API để lưu comment;
    commentService
      .createComment(params)
      .then((response) => {
        if (response) {
          // Truyền dữ liệu lên socket để server biết có comment mới
          socket.emit("sendComment", response.data);
          loadDataPost();
        }
      })
      .catch((error) => {
        console.log(error);
      });
    document.getElementById(`formComment${postID}`).reset();
  };
  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      console.log("🚀 ========= user:", storedUser);
    }
  }, []);
  const getAllLocation = () => {
    locationService
      .getAllLocationGuess()
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
  const loadDataPost = () => {
    postService
      .getAllPostUserWithPagination({
        currentPage,
        pageSize,
        searchString: search,
        location: selected?._id,
      })
      .then((response) => {
        console.log("🚀 ========= response:", response);
        setPostPagination(response?.data?.data);
        setTotalPost(response?.data?.totalPost);
      })
      .catch((error) => {
        setPostPagination();
        console.log(error?.response?.data?.message);
      });
  };
  useEffect(() => {
    getAllLocation();
  }, []);

  useEffect(() => {
    loadDataPost();
  }, [currentPage, search, selected?._id, user]);
  console.log(postPagination);
  function toggleClass(element, className) {
    if (!element.classList.contains(className)) {
      element.classList.add(className);
    } else element.classList.remove(className);
  }
  const handleOnclickBtnLike = async (postID, typeInteract) => {
    toggleClass(document.querySelector(".btnlike-content"), "heart-active");
    toggleClass(document.querySelector(".btnlike-heart"), "heart-active");
    toggleClass(document.querySelector(".btnlike-text"), "heart-active");
    toggleClass(document.querySelector(".btnlike-numb"), "heart-active");
    interactionService
      .interactWithPost({ postID, typeInteract })
      .then((response) => {
        console.log("🚀 ========= response:", response);
        console.log("🚀 ========= post:", postID);
      })
      .catch((error) => {
        console.log(error?.response?.data?.message);
      });
  };
  function closeModal() {
    setOpen(false);
  }
  const handleShowToast = (message) => {
    toast.error(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  function openModal() {
    if (user != undefined) setOpen(true);
    else handleShowToast("Login before create new post");
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
                  <Dialog.Panel
                    className="w-full max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                    style={{ width: "200%", minHeight: "400px" }}
                  >
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Bài đăng mới
                    </Dialog.Title>
                    <div className="mt-2">
                      <CreatePost locationList={locationList} />
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        <div className="col container-fluid">
          <div className=" justify-center">
            <div className="card-header">
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
              <div className="w-25">
                <Listbox value={selected} onChange={setSelected}>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                      <span className="block truncate">{selected.name}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-80"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
                                  {person?.name}
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
              </div>
            </div>
          </div>

          <div
            className="row px-2"
            style={{ maxHeight: "80vh", overflow: "auto" }}
          >
            {postPagination?.map((post, index) => (
              <div key={post?._id} className="col-9 ">
                <div className="card px-3 pt-1 shadow  mb-5 bg-white rounded">
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
                          {post?.user?.name}
                        </a>
                        <div style={{ fontSize: "12px" }}>
                          {dayjs(post?.createdAt).format("DD/MM/YYYY")}
                        </div>
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
                  {post?.location && (
                    <div className="flex select-none justify-start space-x-2 md:justify-start pt-2">
                      <div
                        className="flex rounded-full border border-zinc-200 bg-zinc-50 px-2 py-1 dark:border-zinc-700 white:bg-zinc-900"
                        style={{ cursor: "pointer" }}
                      >
                        <span className="pt-[3px] text-xs leading-none text-cyan-600 white:text-cyan-300">
                          {post?.location?.name}
                        </span>
                      </div>
                    </div>
                  )}

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
                      {post?.content}
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
                    src={post?.images[0]?.url}
                    class="card-img-top"
                    alt="f"
                  />

                  <ul className="d-flex flex-wrap mb-sm-0 mb-2 justify-start mt-3">
                    <li className="text-nowrap mb-2 relative mr-3">
                      <span className="text-nowrap fs-14 text-black font-w500 pl-4">
                        {post?.interactions?.length} interactions
                      </span>
                      <span className="absolute left-0 text-nowrap fs-14 text-black font-w500">
                        <HeartIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </li>
                    <li className="text-nowrap mb-2 mr-4 relative">
                      <span className="text-nowrap fs-14 text-black font-w500 pl-4">
                        {post?.comments?.length} comments
                      </span>
                      <span className="absolute left-0 text-nowrap fs-14 text-black font-w500">
                        <ChatBubbleBottomCenterTextIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </span>
                    </li>
                  </ul>

                  <div className="heart-btn">
                    <div
                      className="btnlike-content items-center"
                      onClick={() => handleOnclickBtnLike(post?._id, "LIKE")}
                    >
                      <span className={`btnlike-heart`}></span>
                      <span className="btnlike-text ">Like</span>
                      <span className="btnlike-numb">
                        {post?.interactions?.length}
                      </span>
                    </div>
                  </div>
                  <div className="list comment">
                    {post.comments.map((comment) => (
                      <div
                        key={comment?._id}
                        className="row border bg-blue-100 rounded-md p-1"
                      >
                        <div className="col-3 text-truncate text-truncate-multiline-ellipsis">
                          <a
                            href="#"
                            className="hover-decoration "
                            style={{ color: "black" }}
                          >
                            {comment?.user?.name}
                          </a>
                          <div style={{ fontSize: "12px" }}>
                            {dayjs(comment?.createdAt).format("DD/MM/YYYY")}
                          </div>
                        </div>
                        <div className="col-9">{comment.content}</div>
                      </div>
                    ))}
                  </div>
                  {user ? (
                    <form
                      className="row "
                      id={`formComment${post._id}`}
                      onSubmit={(e) => handleComment(e, post._id)}
                    >
                      <div className="col-3 text-truncate text-truncate-multiline-ellipsis">
                        <span className="text-black hover-decoration ">
                          {user?.name}
                        </span>
                        :
                      </div>
                      <div className="col-9">
                        <input
                          className="border border-black rounded-md p-1 me-2 "
                          type="text"
                          name="content"
                          placeholder="Comment"
                          style={{ width: "80%" }}
                        />
                        <button className="border bg-blue-500 rounded-md p-1 text-white">
                          Comment
                        </button>
                      </div>
                    </form>
                  ) : (
                    <button
                      className="border bg-blue-500 rounded-md p-2 text-white"
                      onClick={() => handleShowToast("Login before comment")}
                    >
                      Comment
                    </button>
                  )}
                </div>
              </div>
            ))}
            <div className="col-9">
              <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={pageSize}
                marginPagesDisplayed={2}
                pageCount={
                  totalPost % pageSize === 0
                    ? totalPost / pageSize
                    : Math.floor(totalPost / pageSize) + 1
                }
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}
