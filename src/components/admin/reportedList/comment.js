import reportService from "@/services/report.service";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import img5 from "../../../../public/images/menus/5.png";
import img34 from "../../../../public/images/avatar/34.png";
import dayjs from "dayjs";
export default function CommentReportList() {
  const [startIndex, setStartIndex] = useState(1);
  const [reportComment, setReportComment] = useState();
  const size = 5;
  const getReportComment = async () => {
    try {
      const result = await reportService.getReportComment({
        startIndex,
        size,
      });
      console.log("🚀 ========= result:", result.data.data.data);
      setReportComment(result.data.data.data);
      return result;
    } catch (error) {
      console.log("🚀 ========= error:", error);
    }
  };
  useEffect(() => {
    getReportComment();
  }, []);
  return reportComment?.map((item) => (
    <div
      key={item?.id}
      className="card-body loadmore-content dz-scroll"
      id="DietMenusContent"
    >
      {reportComment?.map((comment) => (
        <div
          key={comment?._id}
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
              <Link
                href={`/admin/list-post/${comment?._id}`}
                className="text-black"
              >
                {comment?.content}
              </Link>
            </h6>
            <p className="fs-14">
              {comment?.images?.map((image, index) => (
                <div key={index}>
                  <img src={image.url} />
                </div>
              ))}
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
                  {comment?.user?.name}
                </span>
              </div>
              <ul className="d-flex flex-wrap mb-sm-0 mb-2">
                <li className="mb-2 mr-4 text-nowrap">
                  <i className="las la-clock scale5 mr-2" />
                  <span className="fs-14 text-black text-nowrap font-w500">
                    {dayjs(comment?.createdAt).format("DD/MM/YYYY")}
                  </span>
                </li>
                <li className="text-nowrap mb-2 mr-4">
                  <i
                    className="fa fa-star-o mr-2 scale5 text-warning"
                    aria-hidden="true"
                  />
                  <span className="text-nowrap fs-14 text-black font-w500">
                    {comment?.comments?.length} comments
                  </span>
                </li>
                <li className="text-nowrap mb-2">
                  <i
                    className="fa fa-star-o mr-2 scale5 text-warning"
                    aria-hidden="true"
                  />
                  <span className="text-nowrap fs-14 text-black font-w500">
                    {comment?.interactions?.length} interactions
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <button
            className="btn btn-primary light btn-md ml-auto"
            onClick={() => deletePost(comment?._id)}
          >
            <i className="fa fa-plus scale5 mr-3" />
            Delete comment
          </button>
        </div>
      ))}
      {/* <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        currentPage={currentPage}
        onPageChange={handlePageClick}
        className="flex gap-2 p-2"
        pageRangeDisplayed={pageSize}
        pageCount={
          totalPost % pageSize === 0
            ? totalPost / pageSize
            : Math.floor(totalPost / pageSize) + 1
        }
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />

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
      /> */}
    </div>
  ));
}
