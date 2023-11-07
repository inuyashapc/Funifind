import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, Fragment } from "react";
import img5 from "../../../../public/images/menus/5.png";
import img34 from "../../../../public/images/avatar/34.png";
import postService from "@/services/post.service";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import { Dialog, Transition } from "@headlessui/react";
import io from "socket.io-client";
export default function PostListNeedAccept({ searchString }) {
  const [postPending, setPostPending] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPost, setTotalPost] = useState();
  const [socket, setSocket] = useState(null);
  const pageSize = 5;
  let [isOpen, setIsOpen] = useState(false);
  const [idPost, setIdPost] = useState();
  const loadDataPost = () => {
    postService
      .getListPostPending({ currentPage, pageSize, searchString })
      .then((res) => {
        setPostPending(res.data.listPostPending);
        setTotalPost(res.data.totalPost);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    loadDataPost();
  }, [currentPage, searchString]);

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

  const approvePost = (postID) => {
    postService
      .approve({ postID, isApprove: true })
      .then((res) => {
        toast.success("Approve successfully", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setPostPending((listPost) =>
          listPost.filter((post) => post._id !== res.data.data._id)
        );
        loadDataPost();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const rejectPost = (postID, refuseReason) => {
    postService
      .approve({ postID, isApprove: false, refuseReason })
      .then((res) => {
        toast.warn("Reject successfully", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
		socket.emit("notification", {message: `Your post is rejected because: ${refuseReason}`, userId: res.data.data.user._id})
        setPostPending((listPost) =>
          listPost.filter((post) => post._id !== res.data.data._id)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(id) {
    setIdPost(id);
    setIsOpen(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    rejectPost(idPost, e.target.banPost.value);
    setIsOpen(false);
  };
  return (
    <div className="card-body loadmore-content dz-scroll" id="DietMenusContent">
      {postPending?.map((post) => (
        <div
          key={post?._id}
          className="media border-bottom mb-3 pb-3 d-lg-flex d-block menu-list"
        >
          <Link href={`/admin/list-post/${post?._id}`}>
            <Image
              className="rounded mr-3 mb-md-0 mb-3"
              src={img5}
              width={120}
              alt=""
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
            <p className="fs-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </p>
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
            className="btn btn-success light btn-md ml-auto"
            onClick={() => approvePost(post?._id)}
          >
            Accept
          </button>
          <button
            className="btn btn-danger light btn-md ml-auto"
            onClick={() => openModal(post?._id)}
          >
            Reject
          </button>
        </div>
      ))}
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
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
