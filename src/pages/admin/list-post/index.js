import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import postService from "@/services/post.service";
import LayoutAdmin from "@/layouts/layoutAdmin";
import PostListAccepted from "@/components/admin/postList/postListAccepted";
import PostListNeedAccept from "@/components/admin/postList/postListNeedAccept";

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

  return (
    <LayoutAdmin>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 col-xxl-12">
              <div className="row">
                <div className="col-xl-12">
                  <div className="card">
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
                      <button
                        className={`btn btn-warning mr-3 mb-2 ${
                          tab !== 1 && "light"
                        }`}
                        onClick={() => setTab(1)}
                      >
                        Post list accepted
                      </button>
                      <button
                        className={`btn btn-warning mr-3 mb-2 ${
                          tab === 1 && "light"
                        }`}
                        onClick={() => setTab(2)}
                      >
                        Post list need to accept
                      </button>
                    </div>
                    {/* Trung thêm prop setPosts để cập nhật comment sau khi người dung comment */}
                    {tab === 1 && (
                      <PostListAccepted posts={posts} setPosts={setPosts} />
                    )}
                    {tab === 2 && (
                      <PostListNeedAccept
                        postPending={postPending}
                        setPostPending={setPostPending}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
}
