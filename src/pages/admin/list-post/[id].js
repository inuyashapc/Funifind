import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import LayoutAdmin from "@/layouts/layoutAdmin";
import PostService from "../../../services/post.service";
import img2 from "../../../../public/images/product/2.jpg";
import commentService from "@/services/comment.service";
import readService from "@/services/read.service";

export default function PostDetail() {
  const router = useRouter();

  const { id } = router.query;
  console.log("🚀 ========= id:", id);

  const [postDetail, setPostDetail] = useState();

  const [userData, setUserData] = useState({});
  console.log("🚀 ========= userData:", userData);

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("user")));
  }, []);

  const handleDeleteComment = async (commentID) => {
    try {
      const result = await commentService.deleteComment(commentID);
      console.log("🚀 ========= result1234:", postDetail);

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
      // setPostDetail((postDetail) => {
      //   console.log("a", postDetail);
      //   return (
      //     postDetail &&
      //     postDetail[0]?.comments?.filter(
      //       (post) => post?._id !== result?.data?.data?.post
      //     )
      //   );
      // });
      setPostDetail((listPost) =>
        listPost.map((post) => {
          if (post._id === result?.data?.data?.post) {
            post.comments = post.comments.filter(
              (comment) => comment._id !== result?.data?.data?._id
            );
          }
          return post;
        })
      );
    } catch (error) {
      console.log("🚀 ========= error:", error);
    }
  };

  const DataDetailPost = () => {
    id &&
      PostService.getPostDetails({ postId: id, userId: userData.id })
        .then((res) => {
          console.log("🚀 ========= res1234:", res?.data?.data.read);
          if (!res?.data?.data?.read) {
            readService
              .read(id)
              .then((res) => console.log("check", res))
              .catch((error) => console.log("error", error));
          }
          setPostDetail(res?.data?.data);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  useEffect(() => {
    DataDetailPost();
  }, [id]);

  return !postDetail ? (
    <LayoutAdmin>
      <h4 className="text-center">Loading</h4>
    </LayoutAdmin>
  ) : (
    <LayoutAdmin>
      <div className="container-fluid">
        <div className="page-titles">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Layout</a>
            </li>
            <li className="breadcrumb-item active">
              <a href="#">Blank</a>
            </li>
          </ol>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-3 col-lg-6  col-md-6 col-xxl-5 ">
                    {/* Tab panes */}
                    <div className="tab-content">
                      <div
                        role="tabpanel"
                        className="tab-pane fade show active"
                        id="first"
                      >
                        {postDetail &&
                        postDetail?.images &&
                        postDetail?.images[0]?.url ? (
                          <div>
                            <Swiper
                              rewind={true}
                              spaceBetween={30}
                              centeredSlides={true}
                              autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                              }}
                              pagination={{
                                clickable: true,
                              }}
                              navigation={true}
                              modules={[Autoplay, Pagination, Navigation]}
                              className="mySwiper"
                            >
                              {postDetail?.images?.map((item, index) => (
                                <SwiperSlide key={index}>
                                  <img src={item?.url} alt="img1" />
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          </div>
                        ) : (
                          <Image src={img2} alt="img2" className="img-fluid" />
                        )}

                        {/* <Image src={img1} alt="img1" className="img-fluid" /> */}
                      </div>
                    </div>
                  </div>
                  {/*Tab slider End*/}
                  <div className="col-xl-9 col-lg-6  col-md-6 col-xxl-7 col-sm-12">
                    <div className="product-detail-content">
                      {/*Product details*/}
                      <div className="new-arrival-content pr">
                        <h4>{postDetail?.content}</h4>
                        <div className="review-text">
                          ({postDetail?.comments?.length} comments)
                        </div>
                        <p>
                          Author: <span>{postDetail?.user?.name}</span>
                        </p>
                        <p>
                          Create At:{" "}
                          <span>
                            {dayjs(postDetail?.createdAt).format(
                              "DD-MM-YYYY HH:mm:ss"
                            )}
                          </span>{" "}
                        </p>
                        <p>
                          Location:&nbsp;&nbsp;
                          <span className="badge badge-success light">
                            Alpha
                          </span>
                          <span className="badge badge-success light">
                            Alpha
                          </span>
                          <span className="badge badge-success light">
                            Alpha
                          </span>
                          <span className="badge badge-success light">
                            Alpha
                          </span>
                        </p>
                        <p className="text-content">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which dont look even slightly believable. If you are
                          going to use a passage of Lorem Ipsum, you need to be
                          sure there isnt anything embarrassing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <h4 className="mt-2">List comments</h4>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Comment content</th>
                  <th scope="col">User report</th>
                  <th scope="col">Create At</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {postDetail?.comments?.map((post, index) => (
                  <tr key={post?._id}>
                    <td scope="row">{index + 1}</td>
                    <td>{post?.content}</td>
                    <td>{post?.user?.name}</td>
                    <td>
                      {dayjs(post?.createdAt).format("DD-MM-YYYY HH:mm:ss")}
                    </td>
                    <td className="text-success">{post?.status}</td>
                    <td>
                      <button
                        className="p-3 bg-danger text-white"
                        onClick={() => handleDeleteComment(post?._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
}
