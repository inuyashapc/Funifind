import { HomeIcon, DocumentTextIcon } from "@heroicons/react/20/solid";

export const sidebarUserList = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon />,
    detail: [
      {
        id: 1,
        title: "Home",
        url: "/",
      },
    ],
  },
  {
    id: 2,
    title: "Post",
    icon: <DocumentTextIcon />,
    detail: [
      {
        id: 1,
        title: "Post list Request",
        url: "/listPostRequest",
      },
      {
        id: 2,
        title: "Post list Reject",
        url: "/listPostReject",
      },
      {
        id: 3,
        title: "Post list Accepted",
        url: "/listPostAccepted",
      },
    ],
  },
];
export const sidebarList = [
  {
    id: 1,
    title: "Post",
    detail: [
      {
        id: 1,
        title: "Post list",
        url: "/admin/list-post",
      },
    ],
  },
  {
    id: 2,
    title: "User",
    detail: [
      {
        id: 1,
        title: "User list",
        url: "/admin/list-user",
      },
    ],
  },
  {
    id: 3,
    title: "Reports",
    detail: [
      {
        id: 1,
        title: "Report post list",
        url: "/admin/list-report",
      },
      {
        id: 2,
        title: "Post list",
        url: "/admin/list-post",
      },
    ],
  },
  {
    id: 4,
    title: "Location",
    detail: [
      {
        id: 1,
        title: "Location list",
        url: "/admin/list-location",
      },
      {
        id: 2,
        title: "Create location",
        url: "/admin/list-location/create",
      },
    ],
  },
];
