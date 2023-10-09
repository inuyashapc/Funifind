import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import img5 from "../../../../public/images/menus/5.png";
import img34 from "../../../../public/images/avatar/34.png";
import postService from "@/services/post.service";
import { toast } from "react-toastify";
export default function PostListNeedAccept({ postPending, setPostPending }) {
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const rejectPost = (postID) => {
    postService
      .approve({ postID, isApprove: false })
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
        setPostPending((listPost) =>
          listPost.filter((post) => post._id !== res.data.data._id)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="card-body loadmore-content dz-scroll" id="DietMenusContent">
      {postPending?.map((post) => (
        <div
          key={post?._id}
          className="media border-bottom mb-3 pb-3 d-lg-flex d-block menu-list"
        >
          <Link href="ecom-product-detail.html">
            <Image
              className="rounded mr-3 mb-md-0 mb-3"
              src={img5}
              width={120}
              alt=""
            />
          </Link>
          <div className="media-body col-lg-8 pl-0">
            <h6 className="fs-16 font-w600">
              <Link href="ecom-product-detail.html" className="text-black">
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
            onClick={() => rejectPost(post?._id)}
          >
            Reject
          </button>
        </div>
      ))}
    </div>
  );
}