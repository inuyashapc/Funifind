import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import img5 from "../../../../public/images/menus/5.png";
import img34 from "../../../../public/images/avatar/34.png";
export default function PostListAccepted({ posts }) {
  return (
    <div className="card-body loadmore-content dz-scroll" id="DietMenusContent">
      {posts?.map((post) => (
        <div
          key={post?._id}
          className="media border-bottom mb-3 pb-3 d-lg-flex d-block menu-list"
        >
          <Link href="/admin/list-post/detail">
            <Image
              className="rounded mr-3 mb-md-0 mb-3"
              src={img5}
              width={120}
              alt=""
            />
          </Link>
          <div className="media-body col-lg-8 pl-0">
            <h6 className="fs-16 font-w600">
              <Link href="/admin/list-post/detail" className="text-black">
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
          <Link
            href="#;"
            data-toggle="modal"
            data-target="#aAddDietMenus"
            className="btn btn-primary light btn-md ml-auto"
          >
            <i className="fa fa-plus scale5 mr-3" />
            Add Menu
          </Link>
        </div>
      ))}
    </div>
  );
}
