import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import LayoutAdmin from "@/layouts/layoutAdmin";
import PostService from "../../../services/post.service";
import img1 from "../../../../public/images/product/1.jpg";
import img2 from "../../../../public/images/product/2.jpg";
import img3 from "../../../../public/images/product/3.jpg";
import img4 from "../../../../public/images/product/4.jpg";

export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [postDetail, setPostDetail] = useState();
  console.log("🚀 ========= id:", id);
  // const getPostDetails = async () => {
  //   try {
  //     const detail = await PostService.getPostDetails({ postId: id });
  //     console.log("🚀 ========= detail:", detail);
  //     return detail;
  //   } catch (error) {
  //     console.log("🚀 ========= error:", error);
  //   }
  // };
  // useEffect(() => {
  //   const result = getPostDetails();
  //   console.log("🚀 ========= result:", result);
  //   setDetail(result);
  // }, []);

  useEffect(() => {
    id &&
      PostService.getPostDetails({ postId: id })
        .then((res) => {
          console.log("🚀 ========= res:", res);
          setPostDetail(res?.data?.data);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [id]);
  return !postDetail ? (
    <LayoutAdmin>
      <h4 className="text-center">Loading</h4>
    </LayoutAdmin>
  ) : (
    <LayoutAdmin>
      <div className="content-body">
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
                          <Image src={img1} alt="img1" className="img-fluid" />
                        </div>
                        <div
                          role="tabpanel"
                          className="tab-pane fade"
                          id="second"
                        >
                          <Image src={img2} alt="img2" className="img-fluid" />
                        </div>
                        <div
                          role="tabpanel"
                          className="tab-pane fade"
                          id="third"
                        >
                          <Image src={img3} alt="img3" className="img-fluid" />
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="for">
                          <Image src={img4} alt="img4" className="img-fluid" />
                        </div>
                      </div>
                    </div>
                    {/*Tab slider End*/}
                    <div className="col-xl-9 col-lg-6  col-md-6 col-xxl-7 col-sm-12">
                      <div className="product-detail-content">
                        {/*Product details*/}
                        <div className="new-arrival-content pr">
                          <h4>{postDetail[0]?.content}</h4>
                          <div className="comment-review star-rating">
                            <ul>
                              <li>
                                <i className="fa fa-star" />
                              </li>
                              <li>
                                <i className="fa fa-star" />
                              </li>
                              <li>
                                <i className="fa fa-star" />
                              </li>
                              <li>
                                <i className="fa fa-star-half-empty" />
                              </li>
                              <li>
                                <i className="fa fa-star-half-empty" />
                              </li>
                            </ul>
                            <span className="review-text">(34 reviews) / </span>
                            <a
                              className="product-review"
                              href=""
                              data-toggle="modal"
                              data-target="#reviewModal"
                            >
                              Write a review?
                            </a>
                          </div>
                          <div className="d-table mb-2">
                            <p className="price float-left d-block">$325.00</p>
                          </div>
                          <p>
                            Availability:{" "}
                            <span className="item">
                              {" "}
                              In stock <i className="fa fa-shopping-basket" />
                            </span>
                          </p>
                          <p>
                            Product code: <span className="item">0405689</span>{" "}
                          </p>
                          <p>
                            Brand: <span className="item">Lee</span>
                          </p>
                          <p>
                            Product tags:&nbsp;&nbsp;
                            <span className="badge badge-success light">
                              bags
                            </span>
                            <span className="badge badge-success light">
                              clothes
                            </span>
                            <span className="badge badge-success light">
                              shoes
                            </span>
                            <span className="badge badge-success light">
                              dresses
                            </span>
                          </p>
                          <p className="text-content">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which dont look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isnt anything embarrassing.
                          </p>
                        </div>
                      </div>
                    </div>
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
