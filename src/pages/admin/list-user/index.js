import React from "react";
import Image from "next/image";
import logo from "../../../../public/images/logo.png";
import logoText from "../../../../public/images/logo-text.png";
import Navbar from "@/components/admin/navbar/navbar";
export default function ListUser() {
  return (
    <div>
      <Navbar />
      <div className="chatbox">
        <div className="chatbox-close" />
        <div className="custom-tab-1">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#notes">
                Notes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#alerts">
                Alerts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#chat">
                Chat
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div
              className="tab-pane fade active show"
              id="chat"
              role="tabpanel"
            >
              <div className="card mb-sm-3 mb-md-0 contacts_card dz-chat-user-box">
                <div className="card-header chat-list-header text-center">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="18px"
                      height="18px"
                      viewBox="0 0 24 24"
                      version="1.1"
                    >
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <rect
                          fill="#000000"
                          x={4}
                          y={11}
                          width={16}
                          height={2}
                          rx={1}
                        />
                        <rect
                          fill="#000000"
                          opacity="0.3"
                          transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) "
                          x={4}
                          y={11}
                          width={16}
                          height={2}
                          rx={1}
                        />
                      </g>
                    </svg>
                  </a>
                  <div>
                    <h6 className="mb-1">Chat List</h6>
                    <p className="mb-0">Show All</p>
                  </div>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="18px"
                      height="18px"
                      viewBox="0 0 24 24"
                      version="1.1"
                    >
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <rect x={0} y={0} width={24} height={24} />
                        <circle fill="#000000" cx={5} cy={12} r={2} />
                        <circle fill="#000000" cx={12} cy={12} r={2} />
                        <circle fill="#000000" cx={19} cy={12} r={2} />
                      </g>
                    </svg>
                  </a>
                </div>
                <div
                  className="card-body contacts_body p-0 dz-scroll  "
                  id="DZ_W_Contacts_Body"
                >
                  <ul className="contacts">
                    <li className="name-first-letter">A</li>
                    <li className="active dz-chat-user">
                      <div className="d-flex bd-highlight">
                        <div className="img_cont">
                          <img
                            src="images/avatar/1.jpg"
                            className="rounded-circle user_img"
                            alt=""
                          />
                          <span className="online_icon" />
                        </div>
                        <div className="user_info">
                          <span>Archie Parker</span>
                          <p>Kalid is online</p>
                        </div>
                      </div>
                    </li>
                    <li className="dz-chat-user">
                      <div className="d-flex bd-highlight">
                        <div className="img_cont">
                          <img
                            src="images/avatar/2.jpg"
                            className="rounded-circle user_img"
                            alt=""
                          />
                          <span className="online_icon offline" />
                        </div>
                        <div className="user_info">
                          <span>Alfie Mason</span>
                          <p>Taherah left 7 mins ago</p>
                        </div>
                      </div>
                    </li>
                    <li className="dz-chat-user">
                      <div className="d-flex bd-highlight">
                        <div className="img_cont">
                          <img
                            src="images/avatar/3.jpg"
                            className="rounded-circle user_img"
                            alt=""
                          />
                          <span className="online_icon" />
                        </div>
                        <div className="user_info">
                          <span>AharlieKane</span>
                          <p>Sami is online</p>
                        </div>
                      </div>
                    </li>
                    <li className="dz-chat-user">
                      <div className="d-flex bd-highlight">
                        <div className="img_cont">
                          <img
                            src="images/avatar/4.jpg"
                            className="rounded-circle user_img"
                            alt=""
                          />
                          <span className="online_icon offline" />
                        </div>
                        <div className="user_info">
                          <span>Athan Jacoby</span>
                          <p>Nargis left 30 mins ago</p>
                        </div>
                      </div>
                    </li>
                    <li className="name-first-letter">B</li>
                    <li className="dz-chat-user">
                      <div className="d-flex bd-highlight">
                        <div className="img_cont">
                          <img
                            src="images/avatar/5.jpg"
                            className="rounded-circle user_img"
                            alt=""
                          />
                          <span className="online_icon offline" />
                        </div>
                        <div className="user_info">
                          <span>Bashid Samim</span>
                          <p>Rashid left 50 mins ago</p>
                        </div>
                      </div>
                    </li>
                    <li className="dz-chat-user">
                      <div className="d-flex bd-highlight">
                        <div className="img_cont">
                          <img
                            src="images/avatar/1.jpg"
                            className="rounded-circle user_img"
                            alt=""
                          />
                          <span className="online_icon" />
                        </div>
                        <div className="user_info">
                          <span>Breddie Ronan</span>
                          <p>Kalid is online</p>
                        </div>
                      </div>
                    </li>
                    <li className="dz-chat-user">
                      <div className="d-flex bd-highlight">
                        <div className="img_cont">
                          <img
                            src="images/avatar/2.jpg"
                            className="rounded-circle user_img"
                            alt=""
                          />
                          <span className="online_icon offline" />
                        </div>
                        <div className="user_info">
                          <span>Ceorge Carson</span>
                          <p>Taherah left 7 mins ago</p>
                        </div>
                      </div>
                    </li>
                    <li className="name-first-letter">D</li>
                    <li className="dz-chat-user">
                      <div className="d-flex bd-highlight">
                        <div className="img_cont">
                          <img
                            src="images/avatar/3.jpg"
                            className="rounded-circle user_img"
                            alt=""
                          />
                          <span className="online_icon" />
                        </div>
                        <div className="user_info">
                          <span>Darry Parker</span>
                          <p>Sami is online</p>
                        </div>
                      </div>
                    </li>
                    <li className="dz-chat-user">
                      <div className="d-flex bd-highlight">
                        <div className="img_cont">
                          <img
                            src="images/avatar/4.jpg"
                            className="rounded-circle user_img"
                            alt=""
                          />
                          <span className="online_icon offline" />
                        </div>
                        <div className="user_info">
                          <span>Denry Hunter</span>
                          <p>Nargis left 30 mins ago</p>
                        </div>
                      </div>
                    </li>
                    <li className="name-first-letter">J</li>
                    <li className="dz-chat-user">
                      <div className="d-flex bd-highlight">
                        <div className="img_cont">
                          <img
                            src="images/avatar/5.jpg"
                            className="rounded-circle user_img"
                            alt=""
                          />
                          <span className="online_icon offline" />
                        </div>
                        <div className="user_info">
                          <span>Jack Ronan</span>
                          <p>Rashid left 50 mins ago</p>
                        </div>
                      </div>
                    </li>
                    <li className="dz-chat-user">
                      <div className="d-flex bd-highlight">
                        <div className="img_cont">
                          <img
                            src="images/avatar/1.jpg"
                            className="rounded-circle user_img"
                            alt=""
                          />
                          <span className="online_icon" />
                        </div>
                        <div className="user_info">
                          <span>Jacob Tucker</span>
                          <p>Kalid is online</p>
                        </div>
                      </div>
                    </li>
                    <li className="dz-chat-user">
                      <div className="d-flex bd-highlight">
                        <div className="img_cont">
                          <img
                            src="images/avatar/2.jpg"
                            className="rounded-circle user_img"
                            alt=""
                          />
                          <span className="online_icon offline" />
                        </div>
                        <div className="user_info">
                          <span>James Logan</span>
                          <p>Taherah left 7 mins ago</p>
                        </div>
                      </div>
                    </li>
                    <li className="dz-chat-user">
                      <div className="d-flex bd-highlight">
                        <div className="img_cont">
                          <img
                            src="images/avatar/3.jpg"
                            className="rounded-circle user_img"
                            alt=""
                          />
                          <span className="online_icon" />
                        </div>
                        <div className="user_info">
                          <span>Joshua Weston</span>
                          <p>Sami is online</p>
                        </div>
                      </div>
                    </li>
                    <li className="name-first-letter">O</li>
                    <li className="dz-chat-user">
                      <div className="d-flex bd-highlight">
                        <div className="img_cont">
                          <img
                            src="images/avatar/4.jpg"
                            className="rounded-circle user_img"
                            alt=""
                          />
                          <span className="online_icon offline" />
                        </div>
                        <div className="user_info">
                          <span>Oliver Acker</span>
                          <p>Nargis left 30 mins ago</p>
                        </div>
                      </div>
                    </li>
                    <li className="dz-chat-user">
                      <div className="d-flex bd-highlight">
                        <div className="img_cont">
                          <img
                            src="images/avatar/5.jpg"
                            className="rounded-circle user_img"
                            alt=""
                          />
                          <span className="online_icon offline" />
                        </div>
                        <div className="user_info">
                          <span>Oscar Weston</span>
                          <p>Rashid left 50 mins ago</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card chat dz-chat-history-box d-none">
                <div className="card-header chat-list-header text-center">
                  <a href="#" className="dz-chat-history-back">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="18px"
                      height="18px"
                      viewBox="0 0 24 24"
                      version="1.1"
                    >
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <polygon points="0 0 24 0 24 24 0 24" />
                        <rect
                          fill="#000000"
                          opacity="0.3"
                          transform="translate(15.000000, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-15.000000, -12.000000) "
                          x={14}
                          y={7}
                          width={2}
                          height={10}
                          rx={1}
                        />
                        <path
                          d="M3.7071045,15.7071045 C3.3165802,16.0976288 2.68341522,16.0976288 2.29289093,15.7071045 C1.90236664,15.3165802 1.90236664,14.6834152 2.29289093,14.2928909 L8.29289093,8.29289093 C8.67146987,7.914312 9.28105631,7.90106637 9.67572234,8.26284357 L15.6757223,13.7628436 C16.0828413,14.136036 16.1103443,14.7686034 15.7371519,15.1757223 C15.3639594,15.5828413 14.7313921,15.6103443 14.3242731,15.2371519 L9.03007346,10.3841355 L3.7071045,15.7071045 Z"
                          fill="#000000"
                          fillRule="nonzero"
                          transform="translate(9.000001, 11.999997) scale(-1, -1) rotate(90.000000) translate(-9.000001, -11.999997) "
                        />
                      </g>
                    </svg>
                  </a>
                  <div>
                    <h6 className="mb-1">Chat with Khelesh</h6>
                    <p className="mb-0 text-success">Online</p>
                  </div>
                  <div className="dropdown">
                    <a href="#" data-toggle="dropdown" aria-expanded="false">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect x={0} y={0} width={24} height={24} />
                          <circle fill="#000000" cx={5} cy={12} r={2} />
                          <circle fill="#000000" cx={12} cy={12} r={2} />
                          <circle fill="#000000" cx={19} cy={12} r={2} />
                        </g>
                      </svg>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right">
                      <li className="dropdown-item">
                        <i className="fa fa-user-circle text-primary mr-2" />{" "}
                        View profile
                      </li>
                      <li className="dropdown-item">
                        <i className="fa fa-users text-primary mr-2" /> Add to
                        close friends
                      </li>
                      <li className="dropdown-item">
                        <i className="fa fa-plus text-primary mr-2" /> Add to
                        group
                      </li>
                      <li className="dropdown-item">
                        <i className="fa fa-ban text-primary mr-2" /> Block
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="card-body msg_card_body dz-scroll"
                  id="DZ_W_Contacts_Body3"
                >
                  <div className="d-flex justify-content-start mb-4">
                    <div className="img_cont_msg">
                      <img
                        src="images/avatar/1.jpg"
                        className="rounded-circle user_img_msg"
                        alt=""
                      />
                    </div>
                    <div className="msg_cotainer">
                      Hi, how are you samim?
                      <span className="msg_time">8:40 AM, Today</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end mb-4">
                    <div className="msg_cotainer_send">
                      Hi Khalid i am good tnx how about you?
                      <span className="msg_time_send">8:55 AM, Today</span>
                    </div>
                    <div className="img_cont_msg">
                      <img
                        src="images/avatar/2.jpg"
                        className="rounded-circle user_img_msg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-start mb-4">
                    <div className="img_cont_msg">
                      <img
                        src="images/avatar/1.jpg"
                        className="rounded-circle user_img_msg"
                        alt=""
                      />
                    </div>
                    <div className="msg_cotainer">
                      I am good too, thank you for your chat template
                      <span className="msg_time">9:00 AM, Today</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end mb-4">
                    <div className="msg_cotainer_send">
                      You are welcome
                      <span className="msg_time_send">9:05 AM, Today</span>
                    </div>
                    <div className="img_cont_msg">
                      <img
                        src="images/avatar/2.jpg"
                        className="rounded-circle user_img_msg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-start mb-4">
                    <div className="img_cont_msg">
                      <img
                        src="images/avatar/1.jpg"
                        className="rounded-circle user_img_msg"
                        alt=""
                      />
                    </div>
                    <div className="msg_cotainer">
                      I am looking for your next templates
                      <span className="msg_time">9:07 AM, Today</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end mb-4">
                    <div className="msg_cotainer_send">
                      Ok, thank you have a good day
                      <span className="msg_time_send">9:10 AM, Today</span>
                    </div>
                    <div className="img_cont_msg">
                      <img
                        src="images/avatar/2.jpg"
                        className="rounded-circle user_img_msg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-start mb-4">
                    <div className="img_cont_msg">
                      <img
                        src="images/avatar/1.jpg"
                        className="rounded-circle user_img_msg"
                        alt=""
                      />
                    </div>
                    <div className="msg_cotainer">
                      Bye, see you
                      <span className="msg_time">9:12 AM, Today</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start mb-4">
                    <div className="img_cont_msg">
                      <img
                        src="images/avatar/1.jpg"
                        className="rounded-circle user_img_msg"
                        alt=""
                      />
                    </div>
                    <div className="msg_cotainer">
                      Hi, how are you samim?
                      <span className="msg_time">8:40 AM, Today</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end mb-4">
                    <div className="msg_cotainer_send">
                      Hi Khalid i am good tnx how about you?
                      <span className="msg_time_send">8:55 AM, Today</span>
                    </div>
                    <div className="img_cont_msg">
                      <img
                        src="images/avatar/2.jpg"
                        className="rounded-circle user_img_msg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-start mb-4">
                    <div className="img_cont_msg">
                      <img
                        src="images/avatar/1.jpg"
                        className="rounded-circle user_img_msg"
                        alt=""
                      />
                    </div>
                    <div className="msg_cotainer">
                      I am good too, thank you for your chat template
                      <span className="msg_time">9:00 AM, Today</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end mb-4">
                    <div className="msg_cotainer_send">
                      You are welcome
                      <span className="msg_time_send">9:05 AM, Today</span>
                    </div>
                    <div className="img_cont_msg">
                      <img
                        src="images/avatar/2.jpg"
                        className="rounded-circle user_img_msg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-start mb-4">
                    <div className="img_cont_msg">
                      <img
                        src="images/avatar/1.jpg"
                        className="rounded-circle user_img_msg"
                        alt=""
                      />
                    </div>
                    <div className="msg_cotainer">
                      I am looking for your next templates
                      <span className="msg_time">9:07 AM, Today</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end mb-4">
                    <div className="msg_cotainer_send">
                      Ok, thank you have a good day
                      <span className="msg_time_send">9:10 AM, Today</span>
                    </div>
                    <div className="img_cont_msg">
                      <img
                        src="images/avatar/2.jpg"
                        className="rounded-circle user_img_msg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-start mb-4">
                    <div className="img_cont_msg">
                      <img
                        src="images/avatar/1.jpg"
                        className="rounded-circle user_img_msg"
                        alt=""
                      />
                    </div>
                    <div className="msg_cotainer">
                      Bye, see you
                      <span className="msg_time">9:12 AM, Today</span>
                    </div>
                  </div>
                </div>
                <div className="card-footer type_msg">
                  <div className="input-group">
                    <textarea
                      className="form-control"
                      placeholder="Type your message..."
                      defaultValue={""}
                    />
                    <div className="input-group-append">
                      <button type="button" className="btn btn-primary">
                        <i className="fa fa-location-arrow" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="alerts" role="tabpanel">
              <div className="card mb-sm-3 mb-md-0 contacts_card">
                <div className="card-header chat-list-header text-center">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="18px"
                      height="18px"
                      viewBox="0 0 24 24"
                      version="1.1"
                    >
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <rect x={0} y={0} width={24} height={24} />
                        <circle fill="#000000" cx={5} cy={12} r={2} />
                        <circle fill="#000000" cx={12} cy={12} r={2} />
                        <circle fill="#000000" cx={19} cy={12} r={2} />
                      </g>
                    </svg>
                  </a>
                  <div>
                    <h6 className="mb-1">Notications</h6>
                    <p className="mb-0">Show All</p>
                  </div>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="18px"
                      height="18px"
                      viewBox="0 0 24 24"
                      version="1.1"
                    >
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <rect x={0} y={0} width={24} height={24} />
                        <path
                          d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                          fill="#000000"
                          fillRule="nonzero"
                          opacity="0.3"
                        />
                        <path
                          d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                          fill="#000000"
                          fillRule="nonzero"
                        />
                      </g>
                    </svg>
                  </a>
                </div>
                <div
                  className="card-body contacts_body p-0 dz-scroll"
                  id="DZ_W_Contacts_Body1"
                >
                  <ul className="contacts">
                    <li className="name-first-letter">SEVER STATUS</li>
                    <li className="active">
                      <div className="d-flex bd-highlight">
                        <div className="img_cont primary">KK</div>
                        <div className="user_info">
                          <span>David Nester Birthday</span>
                          <p className="text-primary">Today</p>
                        </div>
                      </div>
                    </li>
                    <li className="name-first-letter">SOCIAL</li>
                    <li>
                      <div className="d-flex bd-highlight">
                        <div className="img_cont success">
                          RU
                          <i className="icon fa-birthday-cake" />
                        </div>
                        <div className="user_info">
                          <span>Perfection Simplified</span>
                          <p>Jame Smith commented on your status</p>
                        </div>
                      </div>
                    </li>
                    <li className="name-first-letter">SEVER STATUS</li>
                    <li>
                      <div className="d-flex bd-highlight">
                        <div className="img_cont primary">
                          AU
                          <i className="icon fa fa-user-plus" />
                        </div>
                        <div className="user_info">
                          <span>AharlieKane</span>
                          <p>Sami is online</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex bd-highlight">
                        <div className="img_cont info">
                          MO
                          <i className="icon fa fa-user-plus" />
                        </div>
                        <div className="user_info">
                          <span>Athan Jacoby</span>
                          <p>Nargis left 30 mins ago</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="card-footer" />
              </div>
            </div>
            <div className="tab-pane fade" id="notes">
              <div className="card mb-sm-3 mb-md-0 note_card">
                <div className="card-header chat-list-header text-center">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="18px"
                      height="18px"
                      viewBox="0 0 24 24"
                      version="1.1"
                    >
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <rect
                          fill="#000000"
                          x={4}
                          y={11}
                          width={16}
                          height={2}
                          rx={1}
                        />
                        <rect
                          fill="#000000"
                          opacity="0.3"
                          transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) "
                          x={4}
                          y={11}
                          width={16}
                          height={2}
                          rx={1}
                        />
                      </g>
                    </svg>
                  </a>
                  <div>
                    <h6 className="mb-1">Notes</h6>
                    <p className="mb-0">Add New Nots</p>
                  </div>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="18px"
                      height="18px"
                      viewBox="0 0 24 24"
                      version="1.1"
                    >
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <rect x={0} y={0} width={24} height={24} />
                        <path
                          d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                          fill="#000000"
                          fillRule="nonzero"
                          opacity="0.3"
                        />
                        <path
                          d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                          fill="#000000"
                          fillRule="nonzero"
                        />
                      </g>
                    </svg>
                  </a>
                </div>
                <div
                  className="card-body contacts_body p-0 dz-scroll"
                  id="DZ_W_Contacts_Body2"
                >
                  <ul className="contacts">
                    <li className="active">
                      <div className="d-flex bd-highlight">
                        <div className="user_info">
                          <span>New order placed..</span>
                          <p>10 Aug 2020</p>
                        </div>
                        <div className="ml-auto">
                          <a
                            href="#"
                            className="btn btn-primary btn-xs sharp mr-1"
                          >
                            <i className="fa fa-pencil" />
                          </a>
                          <a href="#" className="btn btn-danger btn-xs sharp">
                            <i className="fa fa-trash" />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex bd-highlight">
                        <div className="user_info">
                          <span>Youtube, a video-sharing website..</span>
                          <p>10 Aug 2020</p>
                        </div>
                        <div className="ml-auto">
                          <a
                            href="#"
                            className="btn btn-primary btn-xs sharp mr-1"
                          >
                            <i className="fa fa-pencil" />
                          </a>
                          <a href="#" className="btn btn-danger btn-xs sharp">
                            <i className="fa fa-trash" />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex bd-highlight">
                        <div className="user_info">
                          <span>john just buy your product..</span>
                          <p>10 Aug 2020</p>
                        </div>
                        <div className="ml-auto">
                          <a
                            href="#"
                            className="btn btn-primary btn-xs sharp mr-1"
                          >
                            <i className="fa fa-pencil" />
                          </a>
                          <a href="#" className="btn btn-danger btn-xs sharp">
                            <i className="fa fa-trash" />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex bd-highlight">
                        <div className="user_info">
                          <span>Athan Jacoby</span>
                          <p>10 Aug 2020</p>
                        </div>
                        <div className="ml-auto">
                          <a
                            href="#"
                            className="btn btn-primary btn-xs sharp mr-1"
                          >
                            <i className="fa fa-pencil" />
                          </a>
                          <a href="#" className="btn btn-danger btn-xs sharp">
                            <i className="fa fa-trash" />
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header">
        <div className="header-content">
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
              <div className="header-left">
                <div className="dashboard_bar">Customers</div>
              </div>
              <ul className="navbar-nav header-right">
                <li className="nav-item">
                  <div className="input-group search-area d-xl-inline-flex d-none">
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <a href="javascript:void(0)">
                          <i className="flaticon-381-search-2" />
                        </a>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search here..."
                    />
                  </div>
                </li>
                <li className="nav-item dropdown notification_dropdown">
                  <a
                    className="nav-link  ai-icon"
                    href="javascript:void(0)"
                    role="button"
                    data-toggle="dropdown"
                  >
                    <svg
                      width={28}
                      height={28}
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.75 15.8385V13.0463C22.7471 10.8855 21.9385 8.80353 20.4821 7.20735C19.0258 5.61116 17.0264 4.61555 14.875 4.41516V2.625C14.875 2.39294 14.7828 2.17038 14.6187 2.00628C14.4546 1.84219 14.2321 1.75 14 1.75C13.7679 1.75 13.5454 1.84219 13.3813 2.00628C13.2172 2.17038 13.125 2.39294 13.125 2.625V4.41534C10.9736 4.61572 8.97429 5.61131 7.51794 7.20746C6.06159 8.80361 5.25291 10.8855 5.25 13.0463V15.8383C4.26257 16.0412 3.37529 16.5784 2.73774 17.3593C2.10019 18.1401 1.75134 19.1169 1.75 20.125C1.75076 20.821 2.02757 21.4882 2.51969 21.9803C3.01181 22.4724 3.67904 22.7492 4.375 22.75H9.71346C9.91521 23.738 10.452 24.6259 11.2331 25.2636C12.0142 25.9013 12.9916 26.2497 14 26.2497C15.0084 26.2497 15.9858 25.9013 16.7669 25.2636C17.548 24.6259 18.0848 23.738 18.2865 22.75H23.625C24.321 22.7492 24.9882 22.4724 25.4803 21.9803C25.9724 21.4882 26.2492 20.821 26.25 20.125C26.2486 19.117 25.8998 18.1402 25.2622 17.3594C24.6247 16.5786 23.7374 16.0414 22.75 15.8385ZM7 13.0463C7.00232 11.2113 7.73226 9.45223 9.02974 8.15474C10.3272 6.85726 12.0863 6.12732 13.9212 6.125H14.0788C15.9137 6.12732 17.6728 6.85726 18.9703 8.15474C20.2677 9.45223 20.9977 11.2113 21 13.0463V15.75H7V13.0463ZM14 24.5C13.4589 24.4983 12.9316 24.3292 12.4905 24.0159C12.0493 23.7026 11.716 23.2604 11.5363 22.75H16.4637C16.284 23.2604 15.9507 23.7026 15.5095 24.0159C15.0684 24.3292 14.5411 24.4983 14 24.5ZM23.625 21H4.375C4.14298 20.9999 3.9205 20.9076 3.75644 20.7436C3.59237 20.5795 3.50014 20.357 3.5 20.125C3.50076 19.429 3.77757 18.7618 4.26969 18.2697C4.76181 17.7776 5.42904 17.5008 6.125 17.5H21.875C22.571 17.5008 23.2382 17.7776 23.7303 18.2697C24.2224 18.7618 24.4992 19.429 24.5 20.125C24.4999 20.357 24.4076 20.5795 24.2436 20.7436C24.0795 20.9076 23.857 20.9999 23.625 21Z"
                        fill="#0B2A97"
                      />
                    </svg>
                    <div className="pulse-css" />
                  </a>
                  <div className="dropdown-menu rounded dropdown-menu-right">
                    <div
                      id="DZ_W_Notification1"
                      className="widget-media dz-scroll p-3 height380"
                    >
                      <ul className="timeline">
                        <li>
                          <div className="timeline-panel">
                            <div className="media mr-2">
                              <img
                                alt="image"
                                width={50}
                                src="images/avatar/1.jpg"
                              />
                            </div>
                            <div className="media-body">
                              <h6 className="mb-1">
                                Dr sultads Send you Photo
                              </h6>
                              <small className="d-block">
                                29 July 2020 - 02:26 PM
                              </small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media mr-2 media-info">KG</div>
                            <div className="media-body">
                              <h6 className="mb-1">
                                Resport created successfully
                              </h6>
                              <small className="d-block">
                                29 July 2020 - 02:26 PM
                              </small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media mr-2 media-success">
                              <i className="fa fa-home" />
                            </div>
                            <div className="media-body">
                              <h6 className="mb-1">
                                Reminder : Treatment Time!
                              </h6>
                              <small className="d-block">
                                29 July 2020 - 02:26 PM
                              </small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media mr-2">
                              <img
                                alt="image"
                                width={50}
                                src="images/avatar/1.jpg"
                              />
                            </div>
                            <div className="media-body">
                              <h6 className="mb-1">
                                Dr sultads Send you Photo
                              </h6>
                              <small className="d-block">
                                29 July 2020 - 02:26 PM
                              </small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media mr-2 media-danger">KG</div>
                            <div className="media-body">
                              <h6 className="mb-1">
                                Resport created successfully
                              </h6>
                              <small className="d-block">
                                29 July 2020 - 02:26 PM
                              </small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media mr-2 media-primary">
                              <i className="fa fa-home" />
                            </div>
                            <div className="media-body">
                              <h6 className="mb-1">
                                Reminder : Treatment Time!
                              </h6>
                              <small className="d-block">
                                29 July 2020 - 02:26 PM
                              </small>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <a className="all-notification" href="javascript:void(0)">
                      See all notifications <i className="ti-arrow-right" />
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown notification_dropdown">
                  <a
                    className="nav-link bell bell-link"
                    href="javascript:void(0)"
                  >
                    <svg
                      width={28}
                      height={28}
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.4605 3.84888H5.31688C4.64748 3.84961 4.00571 4.11586 3.53237 4.58919C3.05903 5.06253 2.79279 5.7043 2.79205 6.3737V18.1562C2.79279 18.8256 3.05903 19.4674 3.53237 19.9407C4.00571 20.4141 4.64748 20.6803 5.31688 20.6811C5.54005 20.6812 5.75404 20.7699 5.91184 20.9277C6.06964 21.0855 6.15836 21.2995 6.15849 21.5227V23.3168C6.15849 23.6215 6.24118 23.9204 6.39774 24.1818C6.5543 24.4431 6.77886 24.6571 7.04747 24.8009C7.31608 24.9446 7.61867 25.0128 7.92298 24.9981C8.22729 24.9834 8.52189 24.8863 8.77539 24.7173L14.6173 20.8224C14.7554 20.7299 14.918 20.6807 15.0842 20.6811H19.187C19.7383 20.68 20.2743 20.4994 20.7137 20.1664C21.1531 19.8335 21.4721 19.3664 21.6222 18.8359L24.8966 7.05011C24.9999 6.67481 25.0152 6.28074 24.9414 5.89856C24.8675 5.51637 24.7064 5.15639 24.4707 4.84663C24.235 4.53687 23.931 4.28568 23.5823 4.11263C23.2336 3.93957 22.8497 3.84931 22.4605 3.84888ZM23.2733 6.60304L20.0006 18.3847C19.95 18.5614 19.8432 18.7168 19.6964 18.8275C19.5496 18.9381 19.3708 18.9979 19.187 18.9978H15.0842C14.5856 18.9972 14.0981 19.1448 13.6837 19.4219L7.84171 23.3168V21.5227C7.84097 20.8533 7.57473 20.2115 7.10139 19.7382C6.62805 19.2648 5.98628 18.9986 5.31688 18.9978C5.09371 18.9977 4.87972 18.909 4.72192 18.7512C4.56412 18.5934 4.4754 18.3794 4.47527 18.1562V6.3737C4.4754 6.15054 4.56412 5.93655 4.72192 5.77874C4.87972 5.62094 5.09371 5.53223 5.31688 5.5321H22.4605C22.5905 5.53243 22.7188 5.56277 22.8353 5.62076C22.9517 5.67875 23.0532 5.76283 23.1318 5.86646C23.2105 5.97008 23.2642 6.09045 23.2887 6.21821C23.3132 6.34597 23.308 6.47766 23.2733 6.60304Z"
                        fill="#0B2A97"
                      />
                      <path
                        d="M7.84173 11.4233H12.0498C12.273 11.4233 12.4871 11.3347 12.6449 11.1768C12.8027 11.019 12.8914 10.8049 12.8914 10.5817C12.8914 10.3585 12.8027 10.1444 12.6449 9.98661C12.4871 9.82878 12.273 9.74011 12.0498 9.74011H7.84173C7.61852 9.74011 7.40446 9.82878 7.24662 9.98661C7.08879 10.1444 7.00012 10.3585 7.00012 10.5817C7.00012 10.8049 7.08879 11.019 7.24662 11.1768C7.40446 11.3347 7.61852 11.4233 7.84173 11.4233Z"
                        fill="#0B2A97"
                      />
                      <path
                        d="M15.4162 13.1066H7.84173C7.61852 13.1066 7.40446 13.1952 7.24662 13.3531C7.08879 13.5109 7.00012 13.725 7.00012 13.9482C7.00012 14.1714 7.08879 14.3855 7.24662 14.5433C7.40446 14.7011 7.61852 14.7898 7.84173 14.7898H15.4162C15.6394 14.7898 15.8535 14.7011 16.0113 14.5433C16.1692 14.3855 16.2578 14.1714 16.2578 13.9482C16.2578 13.725 16.1692 13.5109 16.0113 13.3531C15.8535 13.1952 15.6394 13.1066 15.4162 13.1066Z"
                        fill="#0B2A97"
                      />
                    </svg>
                    <div className="pulse-css" />
                  </a>
                </li>
                <li className="nav-item dropdown notification_dropdown">
                  <a
                    className="nav-link"
                    href="javascript:void(0)"
                    data-toggle="dropdown"
                  >
                    <svg
                      width={28}
                      height={28}
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.625 6.12506H22.75V2.62506C22.75 2.47268 22.7102 2.32295 22.6345 2.19068C22.5589 2.05841 22.45 1.94819 22.3186 1.87093C22.1873 1.79367 22.0381 1.75205 21.8857 1.75019C21.7333 1.74832 21.5831 1.78629 21.4499 1.86031L14 5.99915L6.55007 1.86031C6.41688 1.78629 6.26667 1.74832 6.11431 1.75019C5.96194 1.75205 5.8127 1.79367 5.68136 1.87093C5.55002 1.94819 5.44113 2.05841 5.36547 2.19068C5.28981 2.32295 5.25001 2.47268 5.25 2.62506V6.12506H4.375C3.67904 6.12582 3.01181 6.40263 2.51969 6.89475C2.02757 7.38687 1.75076 8.0541 1.75 8.75006V11.3751C1.75076 12.071 2.02757 12.7383 2.51969 13.2304C3.01181 13.7225 3.67904 13.9993 4.375 14.0001H5.25V23.6251C5.25076 24.321 5.52757 24.9882 6.01969 25.4804C6.51181 25.9725 7.17904 26.2493 7.875 26.2501H20.125C20.821 26.2493 21.4882 25.9725 21.9803 25.4804C22.4724 24.9882 22.7492 24.321 22.75 23.6251V14.0001H23.625C24.321 13.9993 24.9882 13.7225 25.4803 13.2304C25.9724 12.7383 26.2492 12.071 26.25 11.3751V8.75006C26.2492 8.0541 25.9724 7.38687 25.4803 6.89475C24.9882 6.40263 24.321 6.12582 23.625 6.12506ZM21 6.12506H17.3769L21 4.11256V6.12506ZM7 4.11256L10.6231 6.12506H7V4.11256ZM7 23.6251V14.0001H13.125V24.5001H7.875C7.64303 24.4998 7.42064 24.4075 7.25661 24.2434C7.09258 24.0794 7.0003 23.857 7 23.6251ZM21 23.6251C20.9997 23.857 20.9074 24.0794 20.7434 24.2434C20.5794 24.4075 20.357 24.4998 20.125 24.5001H14.875V14.0001H21V23.6251ZM24.5 11.3751C24.4997 11.607 24.4074 11.8294 24.2434 11.9934C24.0794 12.1575 23.857 12.2498 23.625 12.2501H4.375C4.14303 12.2498 3.92064 12.1575 3.75661 11.9934C3.59258 11.8294 3.5003 11.607 3.5 11.3751V8.75006C3.5003 8.51809 3.59258 8.2957 3.75661 8.13167C3.92064 7.96764 4.14303 7.87536 4.375 7.87506H23.625C23.857 7.87536 24.0794 7.96764 24.2434 8.13167C24.4074 8.2957 24.4997 8.51809 24.5 8.75006V11.3751Z"
                        fill="#0B2A97"
                      />
                    </svg>
                    <div className="pulse-css" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right rounded">
                    <div
                      id="DZ_W_TimeLine11Home"
                      className="widget-timeline dz-scroll style-1 p-3 height370 ps ps--active-y"
                    >
                      <ul className="timeline">
                        <li>
                          <div className="timeline-badge primary" />
                          <a className="timeline-panel text-muted" href="#">
                            <span>10 minutes ago</span>
                            <h6 className="mb-0">
                              Youtube, a video-sharing website, goes live{" "}
                              <strong className="text-primary">$500</strong>.
                            </h6>
                          </a>
                        </li>
                        <li>
                          <div className="timeline-badge info"></div>
                          <a className="timeline-panel text-muted" href="#">
                            <span>20 minutes ago</span>
                            <h6 className="mb-0">
                              New order placed{" "}
                              <strong className="text-info">#XF-2356.</strong>
                            </h6>
                            <p className="mb-0">
                              Quisque a consequat ante Sit amet magna at
                              volutapt...
                            </p>
                          </a>
                        </li>
                        <li>
                          <div className="timeline-badge danger"></div>
                          <a className="timeline-panel text-muted" href="#">
                            <span>30 minutes ago</span>
                            <h6 className="mb-0">
                              john just buy your product{" "}
                              <strong className="text-warning">
                                Sell $250
                              </strong>
                            </h6>
                          </a>
                        </li>
                        <li>
                          <div className="timeline-badge success"></div>
                          <a className="timeline-panel text-muted" href="#">
                            <span>15 minutes ago</span>
                            <h6 className="mb-0">
                              StumbleUpon is acquired by eBay.{" "}
                            </h6>
                          </a>
                        </li>
                        <li>
                          <div className="timeline-badge warning"></div>
                          <a className="timeline-panel text-muted" href="#">
                            <span>20 minutes ago</span>
                            <h6 className="mb-0">
                              Mashable, a news website and blog, goes live.
                            </h6>
                          </a>
                        </li>
                        <li>
                          <div className="timeline-badge dark"></div>
                          <a className="timeline-panel text-muted" href="#">
                            <span>20 minutes ago</span>
                            <h6 className="mb-0">
                              Mashable, a news website and blog, goes live.
                            </h6>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown header-profile">
                  <a
                    className="nav-link"
                    href="javascript:void(0)"
                    role="button"
                    data-toggle="dropdown"
                  >
                    <img src="images/profile/17.jpg" width={20} alt="" />
                    <div className="header-info">
                      <span className="text-black">
                        <strong>Peter Parkur</strong>
                      </span>
                      <p className="fs-12 mb-0">Super Admin</p>
                    </div>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      href="./app-profile.html"
                      className="dropdown-item ai-icon"
                    >
                      <svg
                        id="icon-user1"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-primary"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>
                      <span className="ml-2">Profile </span>
                    </a>
                    <a
                      href="./email-inbox.html"
                      className="dropdown-item ai-icon"
                    >
                      <svg
                        id="icon-inbox"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-success"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <span className="ml-2">Inbox </span>
                    </a>
                    <a
                      href="./page-login.html"
                      className="dropdown-item ai-icon"
                    >
                      <svg
                        id="icon-logout"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-danger"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1={21} y1={12} x2={9} y2={12} />
                      </svg>
                      <span className="ml-2">Logout </span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="deznav">
        <div className="deznav-scroll">
          <ul className="metismenu" id="menu">
            <li>
              <a
                className="has-arrow ai-icon"
                href="javascript:void()"
                aria-expanded="false"
              >
                <i className="flaticon-381-networking" />
                <span className="nav-text">Dashboard</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="index.html">Dashboard</a>
                </li>
                <li>
                  <a href="workout-statistic.html">Workout Statistic</a>
                </li>
                <li>
                  <a href="workoutplan.html">Workout Plan</a>
                </li>
                <li>
                  <a href="distance-map.html">Distance Map</a>
                </li>
                <li>
                  <a href="food-menu.html">Diet Food Menu</a>
                </li>
                <li>
                  <a href="personal-record.html">Personal Record</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                className="has-arrow ai-icon"
                href="javascript:void()"
                aria-expanded="false"
              >
                <i className="flaticon-381-television" />
                <span className="nav-text">Apps</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="./app-profile.html">Profile</a>
                </li>
                <li>
                  <a
                    className="has-arrow"
                    href="javascript:void()"
                    aria-expanded="false"
                  >
                    Email
                  </a>
                  <ul aria-expanded="false">
                    <li>
                      <a href="./email-compose.html">Compose</a>
                    </li>
                    <li>
                      <a href="./email-inbox.html">Inbox</a>
                    </li>
                    <li>
                      <a href="./email-read.html">Read</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="./app-calender.html">Calendar</a>
                </li>
                <li>
                  <a
                    className="has-arrow"
                    href="javascript:void()"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <ul aria-expanded="false">
                    <li>
                      <a href="./ecom-product-grid.html">Product Grid</a>
                    </li>
                    <li>
                      <a href="./ecom-product-list.html">Product List</a>
                    </li>
                    <li>
                      <a href="./ecom-product-detail.html">Product Details</a>
                    </li>
                    <li>
                      <a href="./ecom-product-order.html">Order</a>
                    </li>
                    <li>
                      <a href="./ecom-checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="./ecom-invoice.html">Invoice</a>
                    </li>
                    <li>
                      <a href="./ecom-customers.html">Customers</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a
                className="has-arrow ai-icon"
                href="javascript:void()"
                aria-expanded="false"
              >
                <i className="flaticon-381-controls-3" />
                <span className="nav-text">Charts</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="./chart-flot.html">Flot</a>
                </li>
                <li>
                  <a href="./chart-morris.html">Morris</a>
                </li>
                <li>
                  <a href="./chart-chartjs.html">Chartjs</a>
                </li>
                <li>
                  <a href="./chart-chartist.html">Chartist</a>
                </li>
                <li>
                  <a href="./chart-sparkline.html">Sparkline</a>
                </li>
                <li>
                  <a href="./chart-peity.html">Peity</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                className="has-arrow ai-icon"
                href="javascript:void()"
                aria-expanded="false"
              >
                <i className="flaticon-381-internet" />
                <span className="nav-text">Bootstrap</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="./ui-accordion.html">Accordion</a>
                </li>
                <li>
                  <a href="./ui-alert.html">Alert</a>
                </li>
                <li>
                  <a href="./ui-badge.html">Badge</a>
                </li>
                <li>
                  <a href="./ui-button.html">Button</a>
                </li>
                <li>
                  <a href="./ui-modal.html">Modal</a>
                </li>
                <li>
                  <a href="./ui-button-group.html">Button Group</a>
                </li>
                <li>
                  <a href="./ui-list-group.html">List Group</a>
                </li>
                <li>
                  <a href="./ui-media-object.html">Media Object</a>
                </li>
                <li>
                  <a href="./ui-card.html">Cards</a>
                </li>
                <li>
                  <a href="./ui-carousel.html">Carousel</a>
                </li>
                <li>
                  <a href="./ui-dropdown.html">Dropdown</a>
                </li>
                <li>
                  <a href="./ui-popover.html">Popover</a>
                </li>
                <li>
                  <a href="./ui-progressbar.html">Progressbar</a>
                </li>
                <li>
                  <a href="./ui-tab.html">Tab</a>
                </li>
                <li>
                  <a href="./ui-typography.html">Typography</a>
                </li>
                <li>
                  <a href="./ui-pagination.html">Pagination</a>
                </li>
                <li>
                  <a href="./ui-grid.html">Grid</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                className="has-arrow ai-icon"
                href="javascript:void()"
                aria-expanded="false"
              >
                <i className="flaticon-381-heart" />
                <span className="nav-text">Plugins</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="./uc-select2.html">Select 2</a>
                </li>
                <li>
                  <a href="./uc-nestable.html">Nestedable</a>
                </li>
                <li>
                  <a href="./uc-noui-slider.html">Noui Slider</a>
                </li>
                <li>
                  <a href="./uc-sweetalert.html">Sweet Alert</a>
                </li>
                <li>
                  <a href="./uc-toastr.html">Toastr</a>
                </li>
                <li>
                  <a href="./map-jqvmap.html">Jqv Map</a>
                </li>
                <li>
                  <a href="./uc-lightgallery.html">Lightgallery</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="widget-basic.html"
                className="ai-icon"
                aria-expanded="false"
              >
                <i className="flaticon-381-settings-2" />
                <span className="nav-text">Widget</span>
              </a>
            </li>
            <li>
              <a
                className="has-arrow ai-icon"
                href="javascript:void()"
                aria-expanded="false"
              >
                <i className="flaticon-381-notepad" />
                <span className="nav-text">Forms</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="./form-element.html">Form Elements</a>
                </li>
                <li>
                  <a href="./form-wizard.html">Wizard</a>
                </li>
                <li>
                  <a href="./form-editor-summernote.html">Summernote</a>
                </li>
                <li>
                  <a href="form-pickers.html">Pickers</a>
                </li>
                <li>
                  <a href="form-validation-jquery.html">Jquery Validate</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                className="has-arrow ai-icon"
                href="javascript:void()"
                aria-expanded="false"
              >
                <i className="flaticon-381-network" />
                <span className="nav-text">Table</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="table-bootstrap-basic.html">Bootstrap</a>
                </li>
                <li>
                  <a href="table-datatable-basic.html">Datatable</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                className="has-arrow ai-icon"
                href="javascript:void()"
                aria-expanded="false"
              >
                <i className="flaticon-381-layer-1" />
                <span className="nav-text">Pages</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="./page-register.html">Register</a>
                </li>
                <li>
                  <a href="./page-login.html">Login</a>
                </li>
                <li>
                  <a
                    className="has-arrow"
                    href="javascript:void()"
                    aria-expanded="false"
                  >
                    Error
                  </a>
                  <ul aria-expanded="false">
                    <li>
                      <a href="./page-error-400.html">Error 400</a>
                    </li>
                    <li>
                      <a href="./page-error-403.html">Error 403</a>
                    </li>
                    <li>
                      <a href="./page-error-404.html">Error 404</a>
                    </li>
                    <li>
                      <a href="./page-error-500.html">Error 500</a>
                    </li>
                    <li>
                      <a href="./page-error-503.html">Error 503</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="./page-lock-screen.html">Lock Screen</a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="add-menu-sidebar">
            <img
              src="../../../public/images/calendar.png"
              alt=""
              className="mr-3"
            />
            <p className="	font-w500 mb-0">Create Workout Plan Now</p>
          </div>
          <div className="copyright">
            <p>
              <strong>Gymove Fitness Admin Dashboard</strong> © 2020 All Rights
              Reserved
            </p>
            <p>
              Made with <span className="heart" /> by DexignZone
            </p>
          </div>
        </div>
      </div>
      <div className="content-body">
        <div className="container-fluid">
          <div className="page-titles">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="javascript:void(0)">Shop</a>
              </li>
              <li className="breadcrumb-item active">
                <a href="javascript:void(0)">Customers</a>
              </li>
            </ol>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-responsive-lg mb-0 table-striped">
                      <thead>
                        <tr>
                          <th className="">
                            <div className="custom-control custom-checkbox mx-2">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="checkAll"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="checkAll"
                              />
                            </div>
                          </th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th className="pl-5 width200">Billing Address</th>
                          <th>Joined</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody id="customers">
                        <tr className="btn-reveal-trigger">
                          <td>
                            <div className="custom-control custom-checkbox mx-2">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="checkbox1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="checkbox1"
                              />
                            </div>
                          </td>
                          <td className="py-3">
                            <a href="#">
                              <div className="media d-flex align-items-center">
                                <div className="avatar avatar-xl mr-2">
                                  <div className="">
                                    <img
                                      className="rounded-circle img-fluid"
                                      src="./images/avatar/5.png"
                                      width={30}
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="media-body">
                                  <h5 className="mb-0 fs--1">Ricky Antony</h5>
                                </div>
                              </div>
                            </a>
                          </td>
                          <td className="py-2">
                            <a href="mailto:ricky@example.com">
                              info@example.com
                            </a>
                          </td>
                          <td className="py-2">
                            {" "}
                            <a href="tel:2012001851">(201) 200-1851</a>
                          </td>
                          <td className="py-2 pl-5 wspace-no">
                            2392 Main Avenue, Penasauka
                          </td>
                          <td className="py-2">30/03/2018</td>
                          <td className="py-2 text-right">
                            <div className="dropdown">
                              <button
                                className="btn btn-primary tp-btn-light sharp"
                                type="button"
                                data-toggle="dropdown"
                              >
                                <span className="fs--1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="18px"
                                    height="18px"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <rect
                                        x={0}
                                        y={0}
                                        width={24}
                                        height={24}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={5}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={12}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={19}
                                        cy={12}
                                        r={2}
                                      />
                                    </g>
                                  </svg>
                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-right border py-0">
                                <div className="py-2">
                                  <a className="dropdown-item" href="#!">
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#!"
                                  >
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="btn-reveal-trigger">
                          <td className="py-2">
                            <div className="custom-control custom-checkbox mx-2">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="checkbox2"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="checkbox2"
                              />
                            </div>
                          </td>
                          <td className="py-3">
                            <a href="#">
                              <div className="media d-flex align-items-center">
                                <div className="avatar avatar-xl mr-2">
                                  <img
                                    className="rounded-circle img-fluid"
                                    src="./images/avatar/1.png"
                                    alt=""
                                    width={30}
                                  />
                                </div>
                                <div className="media-body">
                                  <h5 className="mb-0 fs--1">Emma Watson</h5>
                                </div>
                              </div>
                            </a>
                          </td>
                          <td className="py-2">
                            <a href="mailto:emma@example.com">
                              info@example.com
                            </a>
                          </td>
                          <td className="py-2">
                            {" "}
                            <a href="tel:2122288403">(212) 228-8403</a>
                          </td>
                          <td className="py-2 pl-5 wspace-no">
                            2289 5th Avenue, New York
                          </td>
                          <td className="py-2">11/07/2017</td>
                          <td className="py-2 text-right">
                            <div className="dropdown">
                              <button
                                className="btn btn-primary tp-btn-light sharp"
                                type="button"
                                data-toggle="dropdown"
                              >
                                <span className="fs--1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="18px"
                                    height="18px"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <rect
                                        x={0}
                                        y={0}
                                        width={24}
                                        height={24}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={5}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={12}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={19}
                                        cy={12}
                                        r={2}
                                      />
                                    </g>
                                  </svg>
                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-right border py-0">
                                <div className="py-2">
                                  <a className="dropdown-item" href="#!">
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#!"
                                  >
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="btn-reveal-trigger">
                          <td className="py-2">
                            <div className="custom-control custom-checkbox mx-2">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="checkbox3"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="checkbox3"
                              />
                            </div>
                          </td>
                          <td className="py-3">
                            <a href="#">
                              <div className="media d-flex align-items-center">
                                <div className="avatar avatar-xl mr-2">
                                  <div className="">
                                    <img
                                      className="rounded-circle img-fluid"
                                      src="./images/avatar/5.png"
                                      width={30}
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="media-body">
                                  <h5 className="mb-0 fs--1">Rowen Atkinson</h5>
                                </div>
                              </div>
                            </a>
                          </td>
                          <td className="py-2">
                            <a href="mailto:rown@example.com">
                              info@example.com
                            </a>
                          </td>
                          <td className="py-2">
                            {" "}
                            <a href="tel:2012001851">(201) 200-1851</a>
                          </td>
                          <td className="py-2 pl-5 wspace-no">
                            112 Bostwick Avenue, Jersey City
                          </td>
                          <td className="py-2">05/04/2016</td>
                          <td className="py-2 text-right">
                            <div className="dropdown">
                              <button
                                className="btn btn-primary tp-btn-light sharp"
                                type="button"
                                data-toggle="dropdown"
                              >
                                <span className="fs--1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="18px"
                                    height="18px"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <rect
                                        x={0}
                                        y={0}
                                        width={24}
                                        height={24}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={5}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={12}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={19}
                                        cy={12}
                                        r={2}
                                      />
                                    </g>
                                  </svg>
                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-right border py-0">
                                <div className="py-2">
                                  <a className="dropdown-item" href="#!">
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#!"
                                  >
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="btn-reveal-trigger">
                          <td className="py-2">
                            <div className="custom-control custom-checkbox mx-2">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="checkbox4"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="checkbox4"
                              />
                            </div>
                          </td>
                          <td className="py-3">
                            <a href="#">
                              <div className="media d-flex align-items-center">
                                <div className="avatar avatar-xl mr-2">
                                  <img
                                    className="rounded-circle img-fluid"
                                    src="./images/avatar/1.png"
                                    alt=""
                                    width={30}
                                  />
                                </div>
                                <div className="media-body">
                                  <h5 className="mb-0 fs--1">Antony Hopkins</h5>
                                </div>
                              </div>
                            </a>
                          </td>
                          <td className="py-2">
                            <a href="mailto:antony@example.com">
                              info@example.com
                            </a>
                          </td>
                          <td className="py-2">
                            {" "}
                            <a href="tel:9013243127">(901) 324-3127</a>
                          </td>
                          <td className="py-2 pl-5 wspace-no">
                            3448 Ile De France St #242,{" "}
                          </td>
                          <td className="py-2">05/04/2018</td>
                          <td className="py-2 text-right">
                            <div className="dropdown">
                              <button
                                className="btn btn-primary tp-btn-light sharp"
                                type="button"
                                data-toggle="dropdown"
                              >
                                <span className="fs--1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="18px"
                                    height="18px"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <rect
                                        x={0}
                                        y={0}
                                        width={24}
                                        height={24}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={5}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={12}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={19}
                                        cy={12}
                                        r={2}
                                      />
                                    </g>
                                  </svg>
                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-right border py-0">
                                <div className="py-2">
                                  <a className="dropdown-item" href="#!">
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#!"
                                  >
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="btn-reveal-trigger">
                          <td className="py-2">
                            <div className="custom-control custom-checkbox mx-2">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="checkbox5"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="checkbox5"
                              />
                            </div>
                          </td>
                          <td className="py-3">
                            <a href="#">
                              <div className="media d-flex align-items-center">
                                <div className="avatar avatar-xl mr-2">
                                  <img
                                    className="rounded-circle img-fluid"
                                    src="./images/avatar/1.png"
                                    alt=""
                                    width={30}
                                  />
                                </div>
                                <div className="media-body">
                                  <h5 className="mb-0 fs--1">
                                    Jennifer Schramm
                                  </h5>
                                </div>
                              </div>
                            </a>
                          </td>
                          <td className="py-2">
                            <a href="mailto:jennifer@example.com">
                              info@example.com
                            </a>
                          </td>
                          <td className="py-2">
                            {" "}
                            <a href="tel:8283829631">(828) 382-9631</a>
                          </td>
                          <td className="py-2 pl-5 wspace-no">
                            659 Hannah Street, Charlotte
                          </td>
                          <td className="py-2">17/03/2016</td>
                          <td className="py-2 text-right">
                            <div className="dropdown">
                              <button
                                className="btn btn-primary tp-btn-light sharp"
                                type="button"
                                data-toggle="dropdown"
                              >
                                <span className="fs--1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="18px"
                                    height="18px"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <rect
                                        x={0}
                                        y={0}
                                        width={24}
                                        height={24}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={5}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={12}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={19}
                                        cy={12}
                                        r={2}
                                      />
                                    </g>
                                  </svg>
                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-right border py-0">
                                <div className="py-2">
                                  <a className="dropdown-item" href="#!">
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#!"
                                  >
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="btn-reveal-trigger">
                          <td className="py-2">
                            <div className="custom-control custom-checkbox mx-2">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="checkbox6"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="checkbox6"
                              />
                            </div>
                          </td>
                          <td className="py-3">
                            <a href="#">
                              <div className="media d-flex align-items-center">
                                <div className="avatar avatar-xl mr-2">
                                  <div className="">
                                    <img
                                      className="rounded-circle img-fluid"
                                      src="./images/avatar/5.png"
                                      width={30}
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="media-body">
                                  <h5 className="mb-0 fs--1">Raymond Mims</h5>
                                </div>
                              </div>
                            </a>
                          </td>
                          <td className="py-2">
                            <a href="mailto:raymond@example.com">
                              info@example.com
                            </a>
                          </td>
                          <td className="py-2">
                            {" "}
                            <a href="tel:5624685646">(562) 468-5646</a>
                          </td>
                          <td className="py-2 pl-5 wspace-no">
                            2298 Locust Court, Artesia
                          </td>
                          <td className="py-2">12/07/2014</td>
                          <td className="py-2 text-right">
                            <div className="dropdown">
                              <button
                                className="btn btn-primary tp-btn-light sharp"
                                type="button"
                                data-toggle="dropdown"
                              >
                                <span className="fs--1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="18px"
                                    height="18px"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <rect
                                        x={0}
                                        y={0}
                                        width={24}
                                        height={24}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={5}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={12}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={19}
                                        cy={12}
                                        r={2}
                                      />
                                    </g>
                                  </svg>
                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-right border py-0">
                                <div className="py-2">
                                  <a className="dropdown-item" href="#!">
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#!"
                                  >
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="btn-reveal-trigger">
                          <td className="py-2">
                            <div className="custom-control custom-checkbox mx-2">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="checkbox7"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="checkbox7"
                              />
                            </div>
                          </td>
                          <td className="py-3">
                            <a href="#">
                              <div className="media d-flex align-items-center">
                                <div className="avatar avatar-xl mr-2">
                                  <img
                                    className="rounded-circle img-fluid"
                                    src="./images/avatar/1.png"
                                    alt=""
                                    width={30}
                                  />
                                </div>
                                <div className="media-body">
                                  <h5 className="mb-0 fs--1">
                                    Michael Jenkins
                                  </h5>
                                </div>
                              </div>
                            </a>
                          </td>
                          <td className="py-2">
                            <a href="mailto:jenkins@example.com">
                              info@example.com
                            </a>
                          </td>
                          <td className="py-2">
                            {" "}
                            <a href="tel:3026138829">(302) 613-8829</a>
                          </td>
                          <td className="py-2 pl-5 wspace-no">
                            4678 Maud Street, Philadelphia
                          </td>
                          <td className="py-2">15/06/2014</td>
                          <td className="py-2 text-right">
                            <div className="dropdown">
                              <button
                                className="btn btn-primary tp-btn-light sharp"
                                type="button"
                                data-toggle="dropdown"
                              >
                                <span className="fs--1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="18px"
                                    height="18px"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <rect
                                        x={0}
                                        y={0}
                                        width={24}
                                        height={24}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={5}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={12}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={19}
                                        cy={12}
                                        r={2}
                                      />
                                    </g>
                                  </svg>
                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-right border py-0">
                                <div className="py-2">
                                  <a className="dropdown-item" href="#!">
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#!"
                                  >
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="btn-reveal-trigger">
                          <td className="py-2">
                            <div className="custom-control custom-checkbox mx-2">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="checkbox8"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="checkbox8"
                              />
                            </div>
                          </td>
                          <td className="py-3">
                            <a href="#">
                              <div className="media d-flex align-items-center">
                                <div className="avatar avatar-xl mr-2">
                                  <img
                                    className="rounded-circle img-fluid"
                                    src="./images/avatar/1.png"
                                    alt=""
                                    width={30}
                                  />
                                </div>
                                <div className="media-body">
                                  <h5 className="mb-0 fs--1">
                                    Kristine Cadena
                                  </h5>
                                </div>
                              </div>
                            </a>
                          </td>
                          <td className="py-2">
                            <a href="mailto:cadena@example.com">
                              info@example.com
                            </a>
                          </td>
                          <td className="py-2">
                            {" "}
                            <a href="tel:3172737814">(317) 273-7814</a>
                          </td>
                          <td className="py-2 pl-5 wspace-no">
                            3412 Crestview Manor, Indianapolis
                          </td>
                          <td className="py-2">15/04/2015</td>
                          <td className="py-2 text-right">
                            <div className="dropdown">
                              <button
                                className="btn btn-primary tp-btn-light sharp"
                                type="button"
                                data-toggle="dropdown"
                              >
                                <span className="fs--1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="18px"
                                    height="18px"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <rect
                                        x={0}
                                        y={0}
                                        width={24}
                                        height={24}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={5}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={12}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={19}
                                        cy={12}
                                        r={2}
                                      />
                                    </g>
                                  </svg>
                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-right border py-0">
                                <div className="py-2">
                                  <a className="dropdown-item" href="#!">
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#!"
                                  >
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="btn-reveal-trigger">
                          <td className="py-2">
                            <div className="custom-control custom-checkbox mx-2">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="checkbox9"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="checkbox9"
                              />
                            </div>
                          </td>
                          <td className="py-3">
                            <a href="#">
                              <div className="media d-flex align-items-center">
                                <div className="avatar avatar-xl mr-2">
                                  <div className="">
                                    <img
                                      className="rounded-circle img-fluid"
                                      src="./images/avatar/5.png"
                                      width={30}
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="media-body">
                                  <h5 className="mb-0 fs--1">Ricky Antony</h5>
                                </div>
                              </div>
                            </a>
                          </td>
                          <td className="py-2">
                            <a href="mailto:ricky@example.com">
                              info@example.com
                            </a>
                          </td>
                          <td className="py-2">
                            {" "}
                            <a href="tel:2012001851">(201) 200-1851</a>
                          </td>
                          <td className="py-2 pl-5 wspace-no">
                            2392 Main Avenue, Penasauka
                          </td>
                          <td className="py-2">30/03/2018</td>
                          <td className="py-2 text-right">
                            <div className="dropdown">
                              <button
                                className="btn btn-primary tp-btn-light sharp"
                                type="button"
                                data-toggle="dropdown"
                              >
                                <span className="fs--1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="18px"
                                    height="18px"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <rect
                                        x={0}
                                        y={0}
                                        width={24}
                                        height={24}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={5}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={12}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={19}
                                        cy={12}
                                        r={2}
                                      />
                                    </g>
                                  </svg>
                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-right border py-0">
                                <div className="py-2">
                                  <a className="dropdown-item" href="#!">
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#!"
                                  >
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="btn-reveal-trigger">
                          <td className="py-2">
                            <div className="custom-control custom-checkbox mx-2">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="checkbox10"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="checkbox10"
                              />
                            </div>
                          </td>
                          <td className="py-3">
                            <a href="#">
                              <div className="media d-flex align-items-center">
                                <div className="avatar avatar-xl mr-2">
                                  <img
                                    className="rounded-circle img-fluid"
                                    src="./images/avatar/1.png"
                                    alt=""
                                    width={30}
                                  />
                                </div>
                                <div className="media-body">
                                  <h5 className="mb-0 fs--1">Emma Watson</h5>
                                </div>
                              </div>
                            </a>
                          </td>
                          <td className="py-2">
                            <a href="mailto:emma@example.com">
                              info@example.com
                            </a>
                          </td>
                          <td className="py-2">
                            {" "}
                            <a href="tel:2122288403">(212) 228-8403</a>
                          </td>
                          <td className="py-2 pl-5 wspace-no">
                            2289 5th Avenue, New York
                          </td>
                          <td className="py-2">11/07/2017</td>
                          <td className="py-2 text-right">
                            <div className="dropdown">
                              <button
                                className="btn btn-primary tp-btn-light sharp"
                                type="button"
                                data-toggle="dropdown"
                              >
                                <span className="fs--1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="18px"
                                    height="18px"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <rect
                                        x={0}
                                        y={0}
                                        width={24}
                                        height={24}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={5}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={12}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={19}
                                        cy={12}
                                        r={2}
                                      />
                                    </g>
                                  </svg>
                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-right border py-0">
                                <div className="py-2">
                                  <a className="dropdown-item" href="#!">
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#!"
                                  >
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="btn-reveal-trigger">
                          <td className="py-2">
                            <div className="custom-control custom-checkbox mx-2">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="checkbox11"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="checkbox11"
                              />
                            </div>
                          </td>
                          <td className="py-3">
                            <a href="#">
                              <div className="media d-flex align-items-center">
                                <div className="avatar avatar-xl mr-2">
                                  <div className="">
                                    <img
                                      className="rounded-circle img-fluid"
                                      src="./images/avatar/5.png"
                                      width={30}
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="media-body">
                                  <h5 className="mb-0 fs--1">Rowen Atkinson</h5>
                                </div>
                              </div>
                            </a>
                          </td>
                          <td className="py-2">
                            <a href="mailto:rown@example.com">
                              info@example.com
                            </a>
                          </td>
                          <td className="py-2">
                            {" "}
                            <a href="tel:2012001851">(201) 200-1851</a>
                          </td>
                          <td className="py-2 pl-5 wspace-no">
                            112 Bostwick Avenue, Jersey City
                          </td>
                          <td className="py-2">05/04/2016</td>
                          <td className="py-2 text-right">
                            <div className="dropdown">
                              <button
                                className="btn btn-primary tp-btn-light sharp"
                                type="button"
                                data-toggle="dropdown"
                              >
                                <span className="fs--1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="18px"
                                    height="18px"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <rect
                                        x={0}
                                        y={0}
                                        width={24}
                                        height={24}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={5}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={12}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={19}
                                        cy={12}
                                        r={2}
                                      />
                                    </g>
                                  </svg>
                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-right border py-0">
                                <div className="py-2">
                                  <a className="dropdown-item" href="#!">
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#!"
                                  >
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="btn-reveal-trigger">
                          <td className="py-2">
                            <div className="custom-control custom-checkbox mx-2">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="checkbox12"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="checkbox12"
                              />
                            </div>
                          </td>
                          <td className="py-3">
                            <a href="#">
                              <div className="media d-flex align-items-center">
                                <div className="avatar avatar-xl mr-2">
                                  <img
                                    className="rounded-circle img-fluid"
                                    src="./images/avatar/1.png"
                                    alt=""
                                    width={30}
                                  />
                                </div>
                                <div className="media-body">
                                  <h5 className="mb-0 fs--1">Antony Hopkins</h5>
                                </div>
                              </div>
                            </a>
                          </td>
                          <td className="py-2">
                            <a href="mailto:antony@example.com">
                              info@example.com
                            </a>
                          </td>
                          <td className="py-2">
                            {" "}
                            <a href="tel:9013243127">(901) 324-3127</a>
                          </td>
                          <td className="py-2 pl-5 wspace-no">
                            3448 Ile De France St #242
                          </td>
                          <td className="py-2">05/04/2018</td>
                          <td className="py-2 text-right">
                            <div className="dropdown">
                              <button
                                className="btn btn-primary tp-btn-light sharp"
                                type="button"
                                data-toggle="dropdown"
                              >
                                <span className="fs--1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="18px"
                                    height="18px"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <rect
                                        x={0}
                                        y={0}
                                        width={24}
                                        height={24}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={5}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={12}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={19}
                                        cy={12}
                                        r={2}
                                      />
                                    </g>
                                  </svg>
                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-right border py-0">
                                <div className="py-2">
                                  <a className="dropdown-item" href="#!">
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#!"
                                  >
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="btn-reveal-trigger">
                          <td className="py-2">
                            <div className="custom-control custom-checkbox mx-2">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="checkbox13"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="checkbox13"
                              />
                            </div>
                          </td>
                          <td className="py-3">
                            <a href="#">
                              <div className="media d-flex align-items-center">
                                <div className="avatar avatar-xl mr-2">
                                  <img
                                    className="rounded-circle img-fluid"
                                    src="./images/avatar/1.png"
                                    alt=""
                                    width={30}
                                  />
                                </div>
                                <div className="media-body">
                                  <h5 className="mb-0 fs--1">
                                    Jennifer Schramm
                                  </h5>
                                </div>
                              </div>
                            </a>
                          </td>
                          <td className="py-2">
                            <a href="mailto:jennifer@example.com">
                              info@example.com
                            </a>
                          </td>
                          <td className="py-2">
                            {" "}
                            <a href="tel:8283829631">(828) 382-9631</a>
                          </td>
                          <td className="py-2 pl-5 wspace-no">
                            659 Hannah Street, Charlotte
                          </td>
                          <td className="py-2">17/03/2016</td>
                          <td className="py-2 text-right">
                            <div className="dropdown">
                              <button
                                className="btn btn-primary tp-btn-light sharp"
                                type="button"
                                data-toggle="dropdown"
                              >
                                <span className="fs--1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="18px"
                                    height="18px"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <rect
                                        x={0}
                                        y={0}
                                        width={24}
                                        height={24}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={5}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={12}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={19}
                                        cy={12}
                                        r={2}
                                      />
                                    </g>
                                  </svg>
                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-right border py-0">
                                <div className="py-2">
                                  <a className="dropdown-item" href="#!">
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#!"
                                  >
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="btn-reveal-trigger">
                          <td className="py-2">
                            <div className="custom-control custom-checkbox mx-2">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="checkbox14"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="checkbox14"
                              />
                            </div>
                          </td>
                          <td className="py-3">
                            <a href="#">
                              <div className="media d-flex align-items-center">
                                <div className="avatar avatar-xl mr-2">
                                  <div className="">
                                    <img
                                      className="rounded-circle img-fluid"
                                      src="./images/avatar/5.png"
                                      width={30}
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="media-body">
                                  <h5 className="mb-0 fs--1">Raymond Mims</h5>
                                </div>
                              </div>
                            </a>
                          </td>
                          <td className="py-2">
                            <a href="mailto:raymond@example.com">
                              info@example.com
                            </a>
                          </td>
                          <td className="py-2">
                            {" "}
                            <a href="tel:5624685646">(562) 468-5646</a>
                          </td>
                          <td className="py-2 pl-5 wspace-no">
                            2298 Locust Court, Artesia
                          </td>
                          <td className="py-2">12/07/2014</td>
                          <td className="py-2 text-right">
                            <div className="dropdown">
                              <button
                                className="btn btn-primary tp-btn-light sharp"
                                type="button"
                                data-toggle="dropdown"
                              >
                                <span className="fs--1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="18px"
                                    height="18px"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <rect
                                        x={0}
                                        y={0}
                                        width={24}
                                        height={24}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={5}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={12}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={19}
                                        cy={12}
                                        r={2}
                                      />
                                    </g>
                                  </svg>
                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-right border py-0">
                                <div className="py-2">
                                  <a className="dropdown-item" href="#!">
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#!"
                                  >
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="btn-reveal-trigger">
                          <td className="py-2">
                            <div className="custom-control custom-checkbox mx-2">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="checkbox15"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="checkbox15"
                              />
                            </div>
                          </td>
                          <td className="py-3">
                            <a href="#">
                              <div className="media d-flex align-items-center">
                                <div className="avatar avatar-xl mr-2">
                                  <img
                                    className="rounded-circle img-fluid"
                                    src="./images/avatar/1.png"
                                    alt=""
                                    width={30}
                                  />
                                </div>
                                <div className="media-body">
                                  <h5 className="mb-0 fs--1">
                                    Michael Jenkins
                                  </h5>
                                </div>
                              </div>
                            </a>
                          </td>
                          <td className="py-2">
                            <a href="mailto:jenkins@example.com">
                              info@example.com
                            </a>
                          </td>
                          <td className="py-2">
                            {" "}
                            <a href="tel:3026138829">(302) 613-8829</a>
                          </td>
                          <td className="py-2 pl-5 wspace-no">
                            4678 Maud Street, Philadelphia
                          </td>
                          <td className="py-2">15/06/2014</td>
                          <td className="py-2 text-right">
                            <div className="dropdown">
                              <button
                                className="btn btn-primary tp-btn-light sharp"
                                type="button"
                                data-toggle="dropdown"
                              >
                                <span className="fs--1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="18px"
                                    height="18px"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <rect
                                        x={0}
                                        y={0}
                                        width={24}
                                        height={24}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={5}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={12}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={19}
                                        cy={12}
                                        r={2}
                                      />
                                    </g>
                                  </svg>
                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-right border py-0">
                                <div className="py-2">
                                  <a className="dropdown-item" href="#!">
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#!"
                                  >
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="btn-reveal-trigger">
                          <td className="py-2">
                            <div className="custom-control custom-checkbox mx-2">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="checkbox16"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="checkbox16"
                              />
                            </div>
                          </td>
                          <td className="py-3">
                            <a href="#">
                              <div className="media d-flex align-items-center">
                                <div className="avatar avatar-xl mr-2">
                                  <img
                                    className="rounded-circle img-fluid"
                                    src="./images/avatar/1.png"
                                    alt=""
                                    width={30}
                                  />
                                </div>
                                <div className="media-body">
                                  <h5 className="mb-0 fs--1">
                                    Kristine Cadena
                                  </h5>
                                </div>
                              </div>
                            </a>
                          </td>
                          <td className="py-2">
                            <a href="mailto:cadena@example.com">
                              info@example.com
                            </a>
                          </td>
                          <td className="py-2">
                            {" "}
                            <a href="tel:3172737814">(317) 273-7814</a>
                          </td>
                          <td className="py-2 pl-5 wspace-no">
                            3412 Crestview Manor, Indianapolis
                          </td>
                          <td className="py-2">15/04/2015</td>
                          <td className="py-2 text-right">
                            <div className="dropdown">
                              <button
                                className="btn btn-primary tp-btn-light sharp"
                                type="button"
                                data-toggle="dropdown"
                              >
                                <span className="fs--1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="18px"
                                    height="18px"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <rect
                                        x={0}
                                        y={0}
                                        width={24}
                                        height={24}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={5}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={12}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={19}
                                        cy={12}
                                        r={2}
                                      />
                                    </g>
                                  </svg>
                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-right border py-0">
                                <div className="py-2">
                                  <a className="dropdown-item" href="#!">
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#!"
                                  >
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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