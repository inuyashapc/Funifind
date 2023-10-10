import React from 'react'
// import {} from '../../../public/images/profile'
import Image from 'next/image'
import logo from '../../../public/images/logo.png'
import LayoutAdmin from '@/layouts/layoutAdmin'
export default function Profiles() {
    return (
        <LayoutAdmin>
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-9">
                    <div className="profile card card-body px-3 pt-3 pb-0">
                        <div className="profile-head">
                            <div className="photo-content">
                                <div className="cover-photo" />
                            </div>
                            <div className="profile-info">
                                <div className="profile-photo">
                                    <img
                                        src="images/profile/profile.png"
                                        className="img-fluid rounded-circle"
                                        alt=""
                                    />
                                </div>
                                <div className="profile-details">
                                    <div className="profile-name px-3 pt-2">
                                        <h4 className="text-primary mb-0">Mitchell C. Shay</h4>
                                    </div>
                                    <div className="profile-email px-2 pt-2">
                                        <h4 className="text-muted mb-0">info@fpt.edu.vn</h4>
                                        <p>FPT mail</p>
                                    </div>
                                    {/* <div className='followers'>
                                        <h3 className="m-b-0">150</h3>
                                    <span>Followers</span>
                                    </div>
                                    <div className="mt-4">
                                        <a href="javascript:void()" className="btn btn-primary mb-1 mr-1">
                                            Follow
                                        </a>
                                        <a
                                            href="javascript:void()"
                                            className="btn btn-primary mb-1"
                                            data-toggle="modal"
                                            data-target="#sendMessageModal"
                                        >
                                            Send Message
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className='col-xl-3'></div>
                <div className="col-xl-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="profile-statistics mb-5">
                                <div className="text-center">
                                    <div className="row">
                                        <div className="col">
                                            <h3 className="m-b-0">150</h3>
                                            <span>Followers</span>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <a href="javascript:void()" className="btn btn-primary mb-1 mr-1">
                                            Follow
                                        </a>
                                        <a
                                            href="javascript:void()"
                                            className="btn btn-primary mb-1"
                                            data-toggle="modal"
                                            data-target="#sendMessageModal"
                                        >
                                            Send Message
                                        </a>
                                    </div>
                                </div>
                                {/* Modal */}
                                <div className="modal fade" id="sendMessageModal">
                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Send Message</h5>
                                                <button type="button" className="close" data-dismiss="modal">
                                                    <span>×</span>
                                                </button>
                                            </div>
                                            {/* <div className="modal-body">
                                                <form className="comment-form">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <label className="text-black font-w600">
                                                                    Name <span className="required">*</span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    defaultValue="Author"
                                                                    name="Author"
                                                                    placeholder="Author"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <label className="text-black font-w600">
                                                                    Email <span className="required">*</span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    defaultValue="Email"
                                                                    placeholder="Email"
                                                                    name="Email"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label className="text-black font-w600">
                                                                    Comment
                                                                </label>
                                                                <textarea
                                                                    rows={8}
                                                                    className="form-control"
                                                                    name="comment"
                                                                    placeholder="Comment"
                                                                    defaultValue={""}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-group mb-0">
                                                                <input
                                                                    type="submit"
                                                                    defaultValue="Post Comment"
                                                                    className="submit btn btn-primary"
                                                                    name="submit"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="profile-blog mb-5">
                                <h5 className="text-primary d-inline">Today Highlights</h5>
                                <a href="javascript:void()" className="pull-right f-s-16">
                                    More
                                </a>
                                <img
                                    src="images/profile/1.jpg"
                                    alt=""
                                    className="img-fluid mt-4 mb-4 w-100"
                                />
                                <h4>
                                    <a href="post-details.html" className="text-black">
                                        Darwin Creative Agency Theme
                                    </a>
                                </h4>
                                <p className="mb-0">
                                    A small river named Duden flows by their place and supplies it with
                                    the necessary regelialia. It is a paradisematic country, in which
                                    roasted parts of sentences fly into your mouth.
                                </p>
                            </div> */}
                            {/* <div className="profile-interest mb-5">
                                <h5 className="text-primary d-inline">Interest</h5>
                                <div className="row mt-4 sp4" id="lightgallery">
                                    <a
                                        href="images/profile/2.jpg"
                                        data-exthumbimage="images/profile/2.jpg"
                                        data-src="images/profile/2.jpg"
                                        className="mb-1 col-lg-4 col-xl-3 col-sm-4 col-6"
                                    >
                                        <img src="images/profile/2.jpg" alt="" className="img-fluid" />
                                    </a>
                                    <a
                                        href="images/profile/3.jpg"
                                        data-exthumbimage="images/profile/3.jpg"
                                        data-src="images/profile/3.jpg"
                                        className="mb-1 col-lg-4 col-xl-3 col-sm-4 col-6"
                                    >
                                        <img src="images/profile/3.jpg" alt="" className="img-fluid" />
                                    </a>
                                    <a
                                        href="images/profile/4.jpg"
                                        data-exthumbimage="images/profile/4.jpg"
                                        data-src="images/profile/4.jpg"
                                        className="mb-1 col-lg-4 col-xl-3 col-sm-4 col-6"
                                    >
                                        <img src="images/profile/4.jpg" alt="" className="img-fluid" />
                                    </a>
                                    <a
                                        href="images/profile/3.jpg"
                                        data-exthumbimage="images/profile/3.jpg"
                                        data-src="images/profile/3.jpg"
                                        className="mb-1 col-lg-4 col-xl-3 col-sm-4 col-6"
                                    >
                                        <img src="images/profile/3.jpg" alt="" className="img-fluid" />
                                    </a>
                                    <a
                                        href="images/profile/4.jpg"
                                        data-exthumbimage="images/profile/4.jpg"
                                        data-src="images/profile/4.jpg"
                                        className="mb-1 col-lg-4 col-xl-3 col-sm-4 col-6"
                                    >
                                        <img src="images/profile/4.jpg" alt="" className="img-fluid" />
                                    </a>
                                    <a
                                        href="images/profile/2.jpg"
                                        data-exthumbimage="images/profile/2.jpg"
                                        data-src="images/profile/2.jpg"
                                        className="mb-1 col-lg-4 col-xl-3 col-sm-4 col-6"
                                    >
                                        <img src="images/profile/2.jpg" alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="profile-news">
                                <h5 className="text-primary d-inline">Our Latest News</h5>
                                <div className="media pt-3 pb-3">
                                    <img
                                        src="images/profile/5.jpg"
                                        alt="image"
                                        className="mr-3 rounded"
                                        width={75}
                                    />
                                    <div className="media-body">
                                        <h5 className="m-b-5">
                                            <a href="post-details.html" className="text-black">
                                                Collection of textile samples
                                            </a>
                                        </h5>
                                        <p className="mb-0">
                                            I shared this on my fb wall a few months back, and I thought.
                                        </p>
                                    </div>
                                </div>
                                <div className="media pt-3 pb-3">
                                    <img
                                        src="images/profile/6.jpg"
                                        alt="image"
                                        className="mr-3 rounded"
                                        width={75}
                                    />
                                    <div className="media-body">
                                        <h5 className="m-b-5">
                                            <a href="post-details.html" className="text-black">
                                                Collection of textile samples
                                            </a>
                                        </h5>
                                        <p className="mb-0">
                                            I shared this on my fb wall a few months back, and I thought.
                                        </p>
                                    </div>
                                </div>
                                <div className="media pt-3 pb-3">
                                    <img
                                        src="images/profile/7.jpg"
                                        alt="image"
                                        className="mr-3 rounded"
                                        width={75}
                                    />
                                    <div className="media-body">
                                        <h5 className="m-b-5">
                                            <a href="post-details.html" className="text-black">
                                                Collection of textile samples
                                            </a>
                                        </h5>
                                        <p className="mb-0">
                                            I shared this on my fb wall a few months back, and I thought.
                                        </p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="profile-tab">
                                <div className="custom-tab-1">
                                    <ul className="nav nav-tabs">
                                        <li className="nav-item">
                                            <a
                                                href="#my-posts"
                                                data-toggle="tab"
                                                className="nav-link active show"
                                            >
                                                Posts
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#about-me" data-toggle="tab" className="nav-link">
                                                About Me
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="#profile-settings"
                                                data-toggle="tab"
                                                className="nav-link"
                                            >
                                                Setting
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div id="my-posts" className="tab-pane fade active show">
                                            <div className="my-post-content pt-3">
                                                <div className="post-input">
                                                    <textarea
                                                        name="textarea"
                                                        id="textarea"
                                                        cols={30}
                                                        rows={5}
                                                        className="form-control bg-transparent"
                                                        placeholder="Please type what you want...."
                                                        defaultValue={""}
                                                    />
                                                    <a
                                                        href="javascript:void()"
                                                        className="btn btn-primary light px-3"
                                                    >
                                                        <i className="fa fa-link" />{" "}
                                                    </a>
                                                    <a
                                                        href="javascript:void()"
                                                        className="btn btn-primary light mr-1 px-3"
                                                    >
                                                        <i className="fa fa-camera" />{" "}
                                                    </a>
                                                    <a href="javascript:void()" className="btn btn-primary">
                                                        Post
                                                    </a>
                                                </div>
                                                <div className="profile-uoloaded-post border-bottom-1 pb-5">
                                                    <img
                                                        src="images/profile/8.jpg"
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                    <a className="post-title" href="post-details.html">
                                                        <h3 className="text-black">
                                                            Collection of textile samples lay spread
                                                        </h3>
                                                    </a>
                                                    <p>
                                                        A wonderful serenity has take possession of my entire soul
                                                        like these sweet morning of spare which enjoy whole
                                                        heart.A wonderful serenity has take possession of my
                                                        entire soul like these sweet morning of spare which enjoy
                                                        whole heart.
                                                    </p>
                                                    <button className="btn btn-primary mr-2">
                                                        <span className="mr-2">
                                                            <i className="fa fa-heart" />
                                                        </span>
                                                        Like
                                                    </button>
                                                    <button
                                                        className="btn btn-secondary"
                                                        data-toggle="modal"
                                                        data-target="#replyModal"
                                                    >
                                                        <span className="mr-2">
                                                            <i className="fa fa-reply" />
                                                        </span>
                                                        Reply
                                                    </button>
                                                </div>
                                                <div className="profile-uoloaded-post border-bottom-1 pb-5">
                                                    <img
                                                        src="images/profile/9.jpg"
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                    <a className="post-title" href="post-details.html">
                                                        <h3 className="text-black">
                                                            Collection of textile samples lay spread
                                                        </h3>
                                                    </a>
                                                    <p>
                                                        A wonderful serenity has take possession of my entire soul
                                                        like these sweet morning of spare which enjoy whole
                                                        heart.A wonderful serenity has take possession of my
                                                        entire soul like these sweet morning of spare which enjoy
                                                        whole heart.
                                                    </p>
                                                    <button className="btn btn-primary mr-2">
                                                        <span className="mr-2">
                                                            <i className="fa fa-heart" />
                                                        </span>
                                                        Like
                                                    </button>
                                                    <button
                                                        className="btn btn-secondary"
                                                        data-toggle="modal"
                                                        data-target="#replyModal"
                                                    >
                                                        <span className="mr-2">
                                                            <i className="fa fa-reply" />
                                                        </span>
                                                        Reply
                                                    </button>
                                                </div>
                                                <div className="profile-uoloaded-post pb-3">
                                                    <img
                                                        src="images/profile/8.jpg"
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                    <a className="post-title" href="post-details.html">
                                                        <h3 className="text-black">
                                                            Collection of textile samples lay spread
                                                        </h3>
                                                    </a>
                                                    <p>
                                                        A wonderful serenity has take possession of my entire soul
                                                        like these sweet morning of spare which enjoy whole
                                                        heart.A wonderful serenity has take possession of my
                                                        entire soul like these sweet morning of spare which enjoy
                                                        whole heart.
                                                    </p>
                                                    <button className="btn btn-primary mr-2">
                                                        <span className="mr-2">
                                                            <i className="fa fa-heart" />
                                                        </span>
                                                        Like
                                                    </button>
                                                    <button
                                                        className="btn btn-secondary"
                                                        data-toggle="modal"
                                                        data-target="#replyModal"
                                                    >
                                                        <span className="mr-2">
                                                            <i className="fa fa-reply" />
                                                        </span>
                                                        Reply
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="about-me" className="tab-pane fade">
                                            <div className="profile-about-me">
                                                <div className="pt-4 border-bottom-1 pb-3">
                                                    <h4 className="text-primary">About Me</h4>
                                                    <p className="mb-2">
                                                        A wonderful serenity has taken possession of my entire
                                                        soul, like these sweet mornings of spring which I enjoy
                                                        with my whole heart. I am alone, and feel the charm of
                                                        existence was created for the bliss of souls like mine.I
                                                        am so happy, my dear friend, so absorbed in the exquisite
                                                        sense of mere tranquil existence, that I neglect my
                                                        talents.
                                                    </p>
                                                    <p>
                                                        A collection of textile samples lay spread out on the
                                                        table - Samsa was a travelling salesman - and above it
                                                        there hung a picture that he had recently cut out of an
                                                        illustrated magazine and housed in a nice, gilded frame.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="profile-skills mb-5">
                                                <h4 className="text-primary mb-2">Skills</h4>
                                                <a
                                                    href="javascript:void()"
                                                    className="btn btn-primary light btn-xs mb-1"
                                                >
                                                    Admin
                                                </a>
                                                <a
                                                    href="javascript:void()"
                                                    className="btn btn-primary light btn-xs mb-1"
                                                >
                                                    Dashboard
                                                </a>
                                                <a
                                                    href="javascript:void()"
                                                    className="btn btn-primary light btn-xs mb-1"
                                                >
                                                    Photoshop
                                                </a>
                                                <a
                                                    href="javascript:void()"
                                                    className="btn btn-primary light btn-xs mb-1"
                                                >
                                                    Bootstrap
                                                </a>
                                                <a
                                                    href="javascript:void()"
                                                    className="btn btn-primary light btn-xs mb-1"
                                                >
                                                    Responsive
                                                </a>
                                                <a
                                                    href="javascript:void()"
                                                    className="btn btn-primary light btn-xs mb-1"
                                                >
                                                    Crypto
                                                </a>
                                            </div>
                                            <div className="profile-lang  mb-5">
                                                <h4 className="text-primary mb-2">Language</h4>
                                                <a
                                                    href="javascript:void()"
                                                    className="text-muted pr-3 f-s-16"
                                                >
                                                    <i className="flag-icon flag-icon-us" /> English
                                                </a>
                                                <a
                                                    href="javascript:void()"
                                                    className="text-muted pr-3 f-s-16"
                                                >
                                                    <i className="flag-icon flag-icon-fr" /> French
                                                </a>
                                                <a
                                                    href="javascript:void()"
                                                    className="text-muted pr-3 f-s-16"
                                                >
                                                    <i className="flag-icon flag-icon-bd" /> Bangla
                                                </a>
                                            </div>
                                            <div className="profile-personal-info">
                                                <h4 className="text-primary mb-4">Personal Information</h4>
                                                <div className="row mb-2">
                                                    <div className="col-sm-3 col-5">
                                                        <h5 className="f-w-500">
                                                            Name <span className="pull-right">:</span>
                                                        </h5>
                                                    </div>
                                                    <div className="col-sm-9 col-7">
                                                        <span>Mitchell C.Shay</span>
                                                    </div>
                                                </div>
                                                <div className="row mb-2">
                                                    <div className="col-sm-3 col-5">
                                                        <h5 className="f-w-500">
                                                            Email <span className="pull-right">:</span>
                                                        </h5>
                                                    </div>
                                                    <div className="col-sm-9 col-7">
                                                        <span>example@examplel.com</span>
                                                    </div>
                                                </div>
                                                <div className="row mb-2">
                                                    <div className="col-sm-3 col-5">
                                                        <h5 className="f-w-500">
                                                            Availability <span className="pull-right">:</span>
                                                        </h5>
                                                    </div>
                                                    <div className="col-sm-9 col-7">
                                                        <span>Full Time (Free Lancer)</span>
                                                    </div>
                                                </div>
                                                <div className="row mb-2">
                                                    <div className="col-sm-3 col-5">
                                                        <h5 className="f-w-500">
                                                            Age <span className="pull-right">:</span>
                                                        </h5>
                                                    </div>
                                                    <div className="col-sm-9 col-7">
                                                        <span>27</span>
                                                    </div>
                                                </div>
                                                <div className="row mb-2">
                                                    <div className="col-sm-3 col-5">
                                                        <h5 className="f-w-500">
                                                            Location <span className="pull-right">:</span>
                                                        </h5>
                                                    </div>
                                                    <div className="col-sm-9 col-7">
                                                        <span>Rosemont Avenue Melbourne, Florida</span>
                                                    </div>
                                                </div>
                                                <div className="row mb-2">
                                                    <div className="col-sm-3 col-5">
                                                        <h5 className="f-w-500">
                                                            Year Experience <span className="pull-right">:</span>
                                                        </h5>
                                                    </div>
                                                    <div className="col-sm-9 col-7">
                                                        <span>07 Year Experiences</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="profile-settings" className="tab-pane fade">
                                            <div className="pt-3">
                                                <div className="settings-form">
                                                    <h4 className="text-primary">Account Setting</h4>
                                                    <form>
                                                        <div className="form-row">
                                                            <div className="form-group col-md-6">
                                                                <label>Email</label>
                                                                <input
                                                                    type="email"
                                                                    placeholder="Email"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label>Password</label>
                                                                <input
                                                                    type="password"
                                                                    placeholder="Password"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Address</label>
                                                            <input
                                                                type="text"
                                                                placeholder="1234 Main St"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Address 2</label>
                                                            <input
                                                                type="text"
                                                                placeholder="Apartment, studio, or floor"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="form-group col-md-6">
                                                                <label>City</label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                            <div className="form-group col-md-4">
                                                                <label>State</label>
                                                                <select
                                                                    className="form-control default-select"
                                                                    id="inputState"
                                                                >
                                                                    <option selected="">Choose...</option>
                                                                    <option>Option 1</option>
                                                                    <option>Option 2</option>
                                                                    <option>Option 3</option>
                                                                </select>
                                                            </div>
                                                            <div className="form-group col-md-2">
                                                                <label>Zip</label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="custom-control custom-checkbox">
                                                                <input
                                                                    type="checkbox"
                                                                    className="custom-control-input"
                                                                    id="gridCheck"
                                                                />
                                                                <label
                                                                    className="custom-control-label"
                                                                    htmlFor="gridCheck"
                                                                >
                                                                    {" "}
                                                                    Check me out
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <button className="btn btn-primary" type="submit">
                                                            Sign in
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Modal */}
                                <div className="modal fade" id="replyModal">
                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Post Reply</h5>
                                                <button type="button" className="close" data-dismiss="modal">
                                                    <span>×</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <form>
                                                    <textarea
                                                        className="form-control"
                                                        rows={4}
                                                        defaultValue={"Message"}
                                                    />
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button
                                                    type="button"
                                                    className="btn btn-danger light"
                                                    data-dismiss="modal"
                                                >
                                                    Close
                                                </button>
                                                <button type="button" className="btn btn-primary">
                                                    Reply
                                                </button>
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
    )
}