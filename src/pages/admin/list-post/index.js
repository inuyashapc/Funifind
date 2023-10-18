import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import postService from "@/services/post.service";
import LayoutAdmin from "@/layouts/layoutAdmin";
import PostListAccepted from "@/components/admin/postList/postListAccepted";
import PostListNeedAccept from "@/components/admin/postList/postListNeedAccept";
import TabButton from "@/components/admin/tabButton";

export default function PostList() {
  const [posts, setPosts] = useState();

  const [tab, setTab] = useState(1);

  const [search, setSearch] = useState();

  const tabList = [
    {
      id: 1,
      title: "Post list accepted",
    },
    {
      id: 2,
      title: "Post list need to accept",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.search.value);
  };
  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  return (
    <LayoutAdmin>
      <div className="d-sm-flex flex-wrap align-items-center d-block mb-md-3 mb-0">
        <div className="mr-auto pr-3 mb-3">
          <h4 className="text-black fs-20">Post list</h4>
        </div>
        <div className="input-group mb-3 diet-search mr-4">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Search Menus here"
              onChange={handleSearch}
              name="search"
              id="search"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="submit">
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
        <Link
          className="btn rounded btn-primary mb-3"
          href={"list-post/create"}
        >
          Create post
        </Link>
      </div>
      {tabList &&
        tabList.map((item) => (
          <TabButton
            key={item.id}
            id={item.id}
            title={item.title}
            tab={tab}
            setTab={setTab}
          />
        ))}
      {/* Trung thêm prop setPosts để cập nhật comment sau khi người dung comment */}
      {tab === 1 && (
        <PostListAccepted
          posts={posts}
          setPosts={setPosts}
          searchString={search}
        />
      )}
      {tab === 2 && <PostListNeedAccept searchString={search} />}
    </LayoutAdmin>
  );
}
