import Link from "next/link";
import React, { useState } from "react";

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(1);
  return (
    <div className="deznav h-auto">
      <div className="deznav-scroll">
        <ul className="metismenu" id="menu">
          <li>
            <a
              className="has-arrow ai-icon cursor-pointer"
              onClick={() => setSidebar(1)}
            >
              <i className="flaticon-381-networking" />
              <span className="nav-text">Post</span>
            </a>
            {sidebar === 1 && (
              <ul>
                <li>
                  <Link href={"/"}>User list</Link>
                </li>
                <li>
                  <Link href={"/admin/list-post"}>Post list</Link>
                </li>
                <li>
                  <Link href={"/admin/list-post/create"}>Create list</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a
              className="has-arrow ai-icon cursor-pointer"
              onClick={() => setSidebar(2)}
            >
              <i className="flaticon-381-television" />
              <span className="nav-text">Apps</span>
            </a>
            {sidebar === 2 && (
              <ul>
                <li>
                  <a href="./app-profile.html">Profile</a>
                </li>
                <li>
                  <a className="has-arrow" href="#">
                    Email
                  </a>
                  <ul>
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
              </ul>
            )}
          </li>
          <li>
            <a
              className="has-arrow ai-icon cursor-pointer"
              href="#"
              onClick={() => setSidebar(3)}
            >
              <i className="flaticon-381-controls-3" />
              <span className="nav-text">Charts</span>
            </a>
            {sidebar === 3 && (
              <ul>
                <li>
                  <a href="./chart-flot.html">Flot</a>
                </li>
                <li>
                  <a href="./chart-morris.html">Morris</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a
              className="has-arrow ai-icon"
              href="#"
              onClick={() => setSidebar(4)}
            >
              <i className="flaticon-381-internet" />
              <span className="nav-text">Bootstrap</span>
            </a>
            {sidebar === 4 && (
              <ul>
                <li>
                  <a href="./ui-accordion.html">Accordion</a>
                </li>
                <li>
                  <a href="./ui-alert.html">Alert</a>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <div className="copyright">
          <p>
            <strong>FUniFind</strong> © 2023 All Rights Reserved
          </p>
          <p>
            Made with <span className="heart" /> by Funifind team
          </p>
        </div>
      </div>
    </div>
  );
}
