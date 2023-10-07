import Navbar from "@/components/admin/navbar/navbar";
import Sidebar from "@/components/admin/navbar/sidebar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import img5 from "../../../../public/images/menus/5.png";
import img34 from "../../../../public/images/avatar/34.png";
import postService from "@/services/post.service";
import dayjs from "dayjs";
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
  }, []);

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
    <div>
      <Navbar />
      
      <Sidebar />
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-9 col-xxl-8">
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
                        <button className="btn rounded btn-primary mb-3">
                          Create post
                        </button>
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
                    {tab === 1 && (
                      <div
                        className="card-body loadmore-content dz-scroll height750"
                        id="DietMenusContent"
                      >
                        {posts?.map((post) => (
                          <div
                            key={post?.id}
                            className="media border-bottom mb-3 pb-3 d-lg-flex d-block menu-list"
                          >
                            <a href="ecom-product-detail.html">
                              <Image
                                className="rounded mr-3 mb-md-0 mb-3"
                                src={img5}
                                width={120}
                                alt=""
                              />
                            </a>
                            <div className="media-body col-lg-8 pl-0">
                              <h6 className="fs-16 font-w600">
                                <a
                                  href="ecom-product-detail.html"
                                  className="text-black"
                                >
                                  {post?.content}
                                </a>
                              </h6>
                              <p className="fs-14">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip
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
                                      {dayjs(post?.createdAt).format(
                                        "DD/MM/YYYY"
                                      )}
                                    </span>
                                  </li>
                                  <li className="text-nowrap mb-2">
                                    <i
                                      className="fa fa-star-o mr-2 scale5 text-warning"
                                      aria-hidden="true"
                                    />
                                    <span className="text-nowrap fs-14 text-black font-w500">
                                      {post?.comments?.length} comments
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <a
                              href="#;"
                              data-toggle="modal"
                              data-target="#aAddDietMenus"
                              className="btn btn-primary light btn-md ml-auto"
                            >
                              <i className="fa fa-plus scale5 mr-3" />
                              Add Menu
                            </a>
                          </div>
                        ))}
                      </div>
                    )}
                    {tab === 2 && (
                      <div
                        className="card-body loadmore-content dz-scroll height750"
                        id="DietMenusContent"
                      >
                        {postPending?.map((post) => (
                          <div
                            key={post?.id}
                            className="media border-bottom mb-3 pb-3 d-lg-flex d-block menu-list"
                          >
                            <a href="ecom-product-detail.html">
                              <Image
                                className="rounded mr-3 mb-md-0 mb-3"
                                src={img5}
                                width={120}
                                alt=""
                              />
                            </a>
                            <div className="media-body col-lg-8 pl-0">
                              <h6 className="fs-16 font-w600">
                                <a
                                  href="ecom-product-detail.html"
                                  className="text-black"
                                >
                                  {post?.content}
                                </a>
                              </h6>
                              <p className="fs-14">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip
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
                                      {dayjs(post?.createdAt).format(
                                        "DD/MM/YYYY"
                                      )}
                                    </span>
                                  </li>
                                  <li className="text-nowrap mb-2">
                                    <i
                                      className="fa fa-star-o mr-2 scale5 text-warning"
                                      aria-hidden="true"
                                    />
                                    <span className="text-nowrap fs-14 text-black font-w500">
                                      {post?.comments?.length} comments
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <a
                              href="#;"
                              data-toggle="modal"
                              data-target="#aAddDietMenus"
                              className="btn btn-primary light btn-md ml-auto"
                            >
                              <i className="fa fa-plus scale5 mr-3" />
                              Add Menu
                            </a>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-xxl-4">
              <div className="row">
                <div className="col-xl-12 col-md-6">
                  <div className="card">
                    <div className="card-header border-0">
                      <div className="mr-auto pr-3">
                        <h4 className="text-black fs-20">Current Diet Menu</h4>
                        <p className="fs-13 mb-0">Lorem ipsum dolor sit ame</p>
                      </div>
                      <a
                        href="#;"
                        data-toggle="modal"
                        data-target="#aAddDietMenus"
                        className="plus-icon text-white rounded bg-primary"
                      >
                        <i className="las la-plus scale-2" />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="media mb-3">
                        <a href="ecom-product-detail.html">
                          <img
                            src="images/menus/8.png"
                            alt=""
                            className="rounded mr-3"
                            width={86}
                          />
                        </a>
                        <div className="media-body">
                          <h6 className="fs-16 font-w500">
                            <a
                              href="ecom-product-detail.html"
                              className="text-black"
                            >
                              Hearty Italian-Style White Bean Soup
                            </a>
                          </h6>
                          <span className="fs-14">by Andrew</span>
                        </div>
                      </div>
                      <ul className="m-md-auto mt-2 pr-4">
                        <li className="mb-2 text-nowrap">
                          <i className="las la-clock scale5 mr-3" />
                          <span className="fs-14 text-black text-nowrap font-w500">
                            4-6 mins{" "}
                          </span>
                        </li>
                        <li className="mb-2 text-nowrap">
                          <i className="las la-calendar-alt scale5 mr-3" />
                          <span className="fs-14 text-black  font-w500">
                            Breakfast (Monday, Tuesday)
                          </span>
                        </li>
                        <li className="mb-2 text-nowrap">
                          <i className="las la-prescription-bottle scale5 mr-3" />
                          <span className="text-nowrap fs-14 text-primary font-w500">
                            8 Ingridients
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-md-6">
                  <div className="card">
                    <div className="card-header d-sm-flex d-block border-0 pb-4">
                      <div className="mr-auto pr-3">
                        <h4 className="text-black fs-20">
                          Trending Ingridients
                        </h4>
                        <p className="fs-13 mb-0">
                          Lorem ipsum dolor sit amet, consectetur
                        </p>
                      </div>
                    </div>
                    <div
                      className="card-body loadmore-content dz-scroll pb-0 pt-0 height320 ps ps--active-y"
                      id="TrendingIngridientsContent"
                    >
                      <div className="media border-bottom py-3">
                        <a href="ecom-product-detail.html">
                          <img
                            src="images/menus/9.png"
                            alt=""
                            className="rounded mr-3"
                            width={50}
                          />
                        </a>
                        <div className="pr-3 mr-auto media-body">
                          <h6 className="fs-16 font-w600 mb-0">
                            <a
                              href="ecom-product-detail.html"
                              className="text-black"
                            >
                              Strawberry Fruit
                            </a>
                          </h6>
                          <span className="fs-12">Vitamin A, B, C</span>
                        </div>
                        <div className="text-center">
                          <span className="d-block">
                            <svg
                              width={19}
                              height={9}
                              viewBox="0 0 18 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9 0L0 9H18L9 0Z" fill="#0B2A97" />
                            </svg>
                          </span>
                          <span className="d-block fs-16 text-black font-w600">
                            #1
                          </span>
                        </div>
                      </div>
                      <div className="media border-bottom py-3">
                        <a href="ecom-product-detail.html">
                          <img
                            src="images/menus/10.png"
                            alt=""
                            className="rounded mr-3"
                            width={50}
                          />
                        </a>
                        <div className="pr-3 mr-auto media-body">
                          <h6 className="fs-16 font-w600 mb-0">
                            <a
                              href="ecom-product-detail.html"
                              className="text-black"
                            >
                              Bananas Fruit
                            </a>
                          </h6>
                          <span className="fs-12">Vitamin A, B, C</span>
                        </div>
                        <div className="text-center">
                          <span className="d-block">
                            <svg
                              width={19}
                              height={9}
                              viewBox="0 0 18 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9 0L0 9H18L9 0Z" fill="#0B2A97" />
                            </svg>
                          </span>
                          <span className="d-block fs-16 text-black font-w600">
                            #2
                          </span>
                        </div>
                      </div>
                      <div className="media border-bottom py-3">
                        <a href="ecom-product-detail.html">
                          <img
                            src="images/menus/11.png"
                            alt=""
                            className="rounded mr-3"
                            width={50}
                          />
                        </a>
                        <div className="pr-3 mr-auto media-body">
                          <h6 className="fs-16 font-w600 mb-0">
                            <a
                              href="ecom-product-detail.html"
                              className="text-black"
                            >
                              Orange Fruit
                            </a>
                          </h6>
                          <span className="fs-12">Vitamin A, B, C</span>
                        </div>
                        <div className="text-center">
                          <span className="d-block">
                            <svg
                              width={19}
                              height={9}
                              viewBox="0 0 18 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 9.00006L18 6.10352e-05H9L0 6.10352e-05L9 9.00006Z"
                                fill="#C51E1E"
                              />
                            </svg>
                          </span>
                          <span className="d-block fs-16 text-black font-w600">
                            #3
                          </span>
                        </div>
                      </div>
                      <div className="media border-bottom py-3">
                        <a href="ecom-product-detail.html">
                          <img
                            src="images/menus/12.png"
                            alt=""
                            className="rounded mr-3"
                            width={50}
                          />
                        </a>
                        <div className="pr-3 mr-auto media-body">
                          <h6 className="fs-16 font-w600 mb-0">
                            <a
                              href="ecom-product-detail.html"
                              className="text-black"
                            >
                              Grapes Fruit
                            </a>
                          </h6>
                          <span className="fs-12">Vitamin A, B, C</span>
                        </div>
                        <div className="text-center">
                          <span className="d-block">
                            <svg
                              width={19}
                              height={9}
                              viewBox="0 0 18 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9 0L0 9H18L9 0Z" fill="#0B2A97" />
                            </svg>
                          </span>
                          <span className="d-block fs-16 text-black font-w600">
                            #4
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer text-center border-0 pt-3 pb-4">
                      <a
                        className="text-primary dz-load-more"
                        id="TrendingIngridients"
                        rel="ajax/trending-ingridients.html"
                        href="#;"
                      >
                        View more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="copyright">
          <p>
            Copyright © Designed &amp; Developed by{" "}
            <a href="http://dexignzone.com/" target="_blank">
              DexignZone
            </a>{" "}
            2020
          </p>
        </div>
      </div>
    </div>
  );
}
