import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import img5 from "../../../../public/images/menus/5.png";
import img34 from "../../../../public/images/avatar/34.png";
/** Bắt đầu phần TrungNQ thêm mới thư viện phần comment với socketIO */
import io from "socket.io-client";
import commentService from "@/services/comment.service";
import postService from "@/services/post.service";
/** Kết thúc phần TrungNQ thêm mới thư viện phần comment */

export default function PostListAccepted({ posts, setPosts }) {
  //----------------------------------------------------------
  /** Bắt đầu phần Trung sửa kết nối socket và tạo comment */
  const [socket, setSocket] = useState(null);
  // Kết nối tới sever socket
  useEffect(() => {
    const newSocket = io(process.env.NEXT_PUBLIC_SOCKET_SERVER);
    setSocket(newSocket);
  }, []);

  // Chạy khi socket change ( có dữ liệu chuyển từ server xuống );
  useEffect(() => {
    if (socket) {
      // Khi có một người comment, những người khác sẽ nhận được data của comment thông qua đây
      socket.on("getComment", (response) => {
        // Thêm comment vừa thêm ngay lập tức tới tất cả user đang xem bài post:
        if (response.data && setPosts) {
          setPosts((listPost) =>
            listPost.map((post) => {
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
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  /** Kết thúc phần Trung sửa kết nối socket và tạo comment */
  //----------------------------------------------------------
  //Xóa post
  const deletePost = (postID) => {
    if (window.confirm("Are you sure to delete this post? ")) {
      postService
        .deletePost(postID)
        .then((response) => {
          setPosts((oldPost) => oldPost.filter((post) => post._id !== postID));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
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
              <Link
                href={`/admin/list-post/${post?._id}`}
                className="text-black"
              >
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
            {/* Hiển thị danh sách comment */}
            {post.comments.map((comment) => (
              <div key={comment?._id}>{comment.content}</div>
            ))}
            {/* Tạo comment */}
            <form className="" onSubmit={(e) => handleComment(e, post._id)}>
              <input type="text" name="content" />
              <button>Submit</button>
            </form>
          </div>
          <button
            className="btn btn-primary light btn-md ml-auto"
            onClick={() => deletePost(post?._id)}
          >
            <i className="fa fa-plus scale5 mr-3" />
            Delete post
          </button>
        </div>
      ))}
    </div>
  );
}
