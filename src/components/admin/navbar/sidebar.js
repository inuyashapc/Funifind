import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className="deznav">
      <div className="deznav-scroll">
        <ul className="metismenu" id="menu">
          <li>
            <a className="has-arrow ai-icon">
              <i className="flaticon-381-networking" />
              <span className="nav-text">Dashboard</span>
            </a>
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
          </li>
          <li>
            <a className="has-arrow ai-icon">
              <i className="flaticon-381-television" />
              <span className="nav-text">Apps</span>
            </a>
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
          </li>
          <li>
            <a className="has-arrow ai-icon" href="#">
              <i className="flaticon-381-controls-3" />
              <span className="nav-text">Charts</span>
            </a>
            <ul>
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
            <a className="has-arrow ai-icon" href="#">
              <i className="flaticon-381-internet" />
              <span className="nav-text">Bootstrap</span>
            </a>
            <ul>
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
        </ul>
        <div className="add-menu-sidebar">
          <img src="images/calendar.png" alt="" className="mr-3" />
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
  );
}
