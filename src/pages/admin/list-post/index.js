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

  const [postPending, setPostPending] = useState();

  const [tab, setTab] = useState(1);

  useEffect(() => {
    postService
      .getAllPost()
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [postPending]);

  useEffect(() => {
    postService
      .getListPostPending()
      .then((res) => {
        setPostPending(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
  return (
    <LayoutAdmin>
      <div className="d-sm-flex flex-wrap align-items-center d-block mb-md-3 mb-0">
        <div className="mr-auto pr-3 mb-3">
          <h4 className="text-black fs-20">Post list</h4>
        </div>
        <div className="input-group mb-3 diet-search mr-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search Menus here"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              <i className="fa fa-search" aria-hidden="true" />
            </button>
          </div>
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
      {tab === 1 && <PostListAccepted posts={posts} setPosts={setPosts} />}
      {tab === 2 && (
        <PostListNeedAccept
          postPending={postPending}
          setPostPending={setPostPending}
        />
      )}
    </LayoutAdmin>
  );
}
