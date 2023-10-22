import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import img34 from "../../../../public/images/avatar/34.png";
/** Bắt đầu phần TrungNQ thêm mới thư viện phần comment với socketIO */
import io from "socket.io-client";
import commentService from "@/services/comment.service";
import postService from "@/services/post.service";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";
import locationService from "@/services/location.service";
/** Kết thúc phần TrungNQ thêm mới thư viện phần comment */

export default function BannedPost({ searchString, location }) {
  //Pagination
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPost, setTotalPost] = useState(1);
  const [postPagination, setPostPagination] = useState();
  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };

  const loadDataPost = () => {
    postService
      .getBannedPost({
        currentPage,
        pageSize,
        searchString,
        location,
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
        toast.success("Delete successfully", {
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
      {postPagination?.map((post) => (
        <div
          key={post?._id}
          className="media border-bottom mb-3 pb-3 d-lg-flex d-block menu-list"
        >
          <Link href="/admin/list-post/detail">
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
            onClick={() => banPost(post?._id)}
          >
            <i className="fa fa-check-circle scale5 mr-3" />
            Active post
          </button>
        </div>
      ))}
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
