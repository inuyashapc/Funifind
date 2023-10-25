import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import io from "socket.io-client";
import img34 from "../../../../public/images/avatar/34.png";
/** Bắt đầu phần TrungNQ thêm mới thư viện phần comment với socketIO */
import commentService from "@/services/comment.service";
import postService from "@/services/post.service";
/** Kết thúc phần TrungNQ thêm mới thư viện phần comment */

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
  const [locationList, setLocationList] = useState();
  // console.log("🚀 ========= totalPost:", totalPost);
  //----------------------------------------------------------
  /** Bắt đầu phần Trung sửa kết nối socket và tạo comment */
  const [socket, setSocket] = useState(null);
  // Kết nối tới sever socket
  useEffect(() => {
    const newSocket = io(process.env.NEXT_PUBLIC_BASE_URL);
    setSocket(newSocket);
  }, []);

  // Chạy khi socket change ( có dữ liệu chuyển từ server xuống );
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

  // Comment ở một post
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
  };
  /** Kết thúc phần Trung sửa kết nối socket và tạo comment */
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
        console.log("🚀 ========= response:", response);
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
        console.log("🚀 ========= response:", response);
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
              {/* <Image
              className="rounded mr-3 mb-md-0 mb-3"
              src={img5}
              width={120}
              alt=""
            /> */}
              {/* <Image
              className="rounded mr-3 mb-md-0 mb-3"
              src={post?.images.length != 0 ? post?.images[0]?.url : img5}
              width={120}
              height={120}
              alt=""
            /> */}
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
              {/* Hiển thị danh sách comment */}
              {post.comments.map((comment) => (
                <div key={comment?._id}>{comment.content}</div>
              ))}
              {/* Tạo comment */}
              <form className="" onSubmit={(e) => handleComment(e, post._id)}>
                <input
                  className="border border-black rounded-md p-2 me-2"
                  type="text"
                  name="content"
                />
                <button className="border bg-blue-500 rounded-md p-2 text-white">
                  Comment
                </button>
              </form>
            </div>
            <button
              className="btn btn-primary light btn-md ml-auto"
              onClick={() => banPost(post?._id)}
            >
              <i className="fa fa-trash scale5 mr-3" />
              Ban post
            </button>
          </div>
        ))
      ) : (
        <div>Không có kết quả</div>
      )}
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
