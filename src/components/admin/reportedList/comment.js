import reportService from "@/services/report.service";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import ReactPaginate from "react-paginate";

import img5 from "../../../../public/images/menus/5.png";
import img34 from "../../../../public/images/avatar/34.png";

export default function CommentReportList({ searchString }) {
  console.log("🚀 ========= searchString:", searchString);
  const [reportComment, setReportComment] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalReportComment, setTotalReportComment] = useState();
  const pageSize = 5;

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };

  const getReportComment = async () => {
    try {
      const result = await reportService.getReportComment({
        currentPage,
        pageSize,
        searchString,
      });
      setReportComment(result.data.data.data);
      setTotalReportComment(result.data.data.totalReport);
      return result;
    } catch (error) {
      console.log("🚀 ========= error:", error);
    }
  };

  useEffect(() => {
    getReportComment();
  }, [currentPage, searchString]);

  return (
    <div>
      {reportComment?.map((comment) => (
        <div key={comment?._id} className="card-body" id="DietMenusContent">
          <div className="media border-bottom mb-3 pb-3 d-lg-flex d-block menu-list">
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
                    <Image src={image.url} alt="" />
                  </div>
                ))}
              </p>
              <div>
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

                <div>{comment?.description}</div>
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
        </div>
      ))}
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={pageSize}
        marginPagesDisplayed={2}
        pageCount={
          totalReportComment % pageSize === 0
            ? totalReportComment / pageSize
            : Math.floor(totalReportComment / pageSize) + 1
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
