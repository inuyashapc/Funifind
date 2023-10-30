import React, { useState } from "react";

import TabButton from "@/components/admin/tabButton";
import LayoutAdmin from "@/layouts/layoutAdmin";
import PostReportList from "@/components/admin/reportedList/post";
import CommentReportList from "@/components/admin/reportedList/comment";

export default function ListReport() {
  const [tab, setTab] = useState(1);
  const [search, setSearch] = useState();
  const tabList = [
    {
      id: 1,
      title: "Post list reported",
    },
    {
      id: 2,
      title: "Comment list reported",
    },
  ];
  const handleSearch = (e) => {
    console.log("Search", e.target.value);
    setSearch(e.target.value);
  };
  return (
    <LayoutAdmin>
      <div className="card-header d-block pb-0 border-0">
        <div className="d-sm-flex flex-wrap align-items-center d-block mb-md-3 mb-0">
          <div className="mr-auto pr-3 mb-3">
            <h4 className="text-black fs-20">Post list</h4>
          </div>
          <div className="input-group mb-3 diet-search mr-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search Menus here"
              onChange={handleSearch}
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        {tabList.map((item) => (
          <TabButton
            key={item.id}
            id={item.id}
            title={item.title}
            tab={tab}
            setTab={setTab}
          />
        ))}
      </div>
      {tab === 1 && <PostReportList searchString={search} />}
      {tab === 2 && <CommentReportList searchString={search} />}
    </LayoutAdmin>
  );
}
