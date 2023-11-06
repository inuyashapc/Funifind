import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import img34 from "../../../../public/images/avatar/34.png";
import postService from "@/services/post.service";
import { Dialog, Transition, Fragment } from "@headlessui/react";
import notificationService from "@/services/notification.service";
import io from "socket.io-client";

export default function PostListAccepted({
  posts,
  setPosts,
  searchString,
  location,
  userId,
}) {
  //Pagination
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPost, setTotalPost] = useState(1);
  const [postPagination, setPostPagination] = useState();
  const [banPostId, setBanPostId] = useState();
  const [userIdNeedToBan, setUserIdNeedToBan] = useState();
  // Thêm socket
  const [socket, setSocket] = useState(null);

  let [isOpen, setIsOpen] = useState(false);

  //----------------------------------------------------------
  //Xóa post
  // const deletePost = (postID) => {
  //   console.log("🚀 ========= postID:", postID);
  //   if (window.confirm("Are you sure to delete this post? ")) {
  //     postService
  //       .deletePost(postID)
  //       .then((response) => {
  //         setPostPagination((oldPost) =>
  //           oldPost.filter((post) => post._id !== postID)
  //         );
  //         toast.success("Delete successfully", {
  //           position: "top-right",
  //           autoClose: 3000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "colored",
  //         });
  //         loadDataPost();
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // };

  // Kết nối socket
  useEffect(() => {
    const newSocket = io(process.env.NEXT_PUBLIC_BASE_URL);
    setSocket(newSocket);
  }, []);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };

  const loadDataPost = () => {
    postService
      .getAllPostWithPagination({
        currentPage,
        pageSize,
        searchString,
        location,
        userId,
      })
      .then((response) => {
        setTotalPost(response?.data?.totalPost);
        setPostPagination(response?.data?.data);
      })
      .catch((error) => {
        setPostPagination();
        console.log(error?.response?.data?.message);
      });
  };

  useEffect(() => {
    loadDataPost();
  }, [currentPage, searchString, location]);

  //ban post
  const banPost = (postID) => {
    postService
      .banPost(postID)
      .then((response) => {
        toast.success("Ban successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        loadDataPost();
      })
      .catch((error) => {
        console.log(error?.response?.data?.message);
      });
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(id, userId) {
    console.log("🚀 ========= userId:", userId);
    setUserIdNeedToBan(userId);
    setBanPostId(id);
    setIsOpen(true);
  }

  const sendNotification = async ({ content, uri }) => {
    try {
      const result = await notificationService.createNotifications({
        content,
        uri,
        userId: userIdNeedToBan,
      });
      console.log("🚀 ========= result1111:", result);
		// Gửi thông báo tới user bị ban bài
	  socket.emit("notification", {message: `Your post is banned because ${content}`, userId: result.user });
    } catch (error) {
      console.log("🚀 ========= error:", error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendNotification({ content: e.target.banPost.value });
    banPost(banPostId);
    setIsOpen(false);
  };
  return (
    <div className="card-body loadmore-content dz-scroll" id="DietMenusContent">
      {postPagination ? (
        postPagination?.map((post) => (
          <div
            key={post?._id}
            className={`media border-bottom mb-3 pb-3 d-lg-flex d-block menu-list relative p-6 rounded-xl ${
              !post?.read && "bg-blue-200 bg-opacity-75"
            }`}
          >
            {post?.new && (
              <span className="badge badge-secondary absolute -left-4 top-0">
                New
              </span>
            )}

            <Link href={`/admin/list-post/${post?._id}`}>
              <img
                src={post?.images[0]?.url}
                className="w-[120px] h-[135px] mr-4"
                alt="logo"
              />
            </Link>
            <div className="media-body col-lg-8 pl-0">
              <h6 className="fs-16 font-w600">
                <Link
                  href={`/admin/list-post/${post?._id}`}
                  className="text-black"
                >
                  {post?.content}
                </Link>
              </h6>
              <div className="d-flex flex-wrap align-items-center">
                <div className="d-flex mb-sm-2 mb-3 pr-3 mr-auto align-items-center">
                  <Image
                    className="rounded-circle mr-2"
                    src={img34}
                    width={30}
                    alt=""
                  />
                  <span className="fs-14 text-black font-w500">
                    {post?.user?.name}
                  </span>
                </div>
                <ul className="d-flex flex-wrap mb-sm-0 mb-2">
                  <li className="mb-2 mr-4 text-nowrap">
                    <i className="las la-clock scale5 mr-2" />
                    <span className="fs-14 text-black text-nowrap font-w500">
                      {dayjs(post?.createdAt).format("DD/MM/YYYY")}
                    </span>
                  </li>
                  <li className="text-nowrap mb-2 mr-4">
                    <i
                      className="fa fa-star-o mr-2 scale5 text-warning"
                      aria-hidden="true"
                    />
                    <span className="text-nowrap fs-14 text-black font-w500">
                      {post?.comments?.length} comments
                    </span>
                  </li>
                  <li className="text-nowrap mb-2">
                    <i
                      className="fa fa-star-o mr-2 scale5 text-warning"
                      aria-hidden="true"
                    />
                    <span className="text-nowrap fs-14 text-black font-w500">
                      {post?.interactions?.length} interactions
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <button
              className="btn btn-primary light btn-md ml-auto"
              onClick={() => openModal(post?._id, post?.user?._id)}
            >
              <i className="fa fa-trash scale5 mr-3" />
              Ban post
            </button>
          </div>
        ))
      ) : (
        <div>Không có kết quả</div>
      )}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center bg-blue-200 bg-opacity-80">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[500px] max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Nội dung của khóa bài viết
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit}>
                      <textarea
                        className="border w-full"
                        name="banPost"
                        id="banPost"
                        placeholder="Nhập nội dung"
                        required
                        rows={8}
                      ></textarea>
                      <div className="mt-4">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
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
  );
}
