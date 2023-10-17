import Link from "next/link";
import React, { useState } from "react";
import IconCard from "../../../../public/Icons/IconCard";
import IconDropdown from "../../../../public/Icons/IconDropdown";
import { sidebarList } from "@/utils/constant";

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(1);
  return (
    <div className="col-3 bg-white">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <div className="space-y-2 font-medium">
          {sidebarList.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => setSidebar(item.id)}
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <div className="w-5 h-5">
                  <IconCard />
                </div>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  {item.title}
                </span>
                <div
                  className={
                    sidebar === item.id
                      ? "-rotate-90 duration-300 w-4 h-4"
                      : "duration-300 w-4 h-4"
                  }
                >
                  <IconDropdown />
                </div>
              </button>
              {item.detail.map(
                (sidebarItem) =>
                  sidebar === item.id && (
                    <Link
                      key={sidebarItem.id}
                      href={sidebarItem.url}
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      {sidebarItem.title}
                    </Link>
                  )
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="copyright">
        <p>
          <strong>FUniFind</strong> © 2023 All Rights Reserved
        </p>
        <p>
          Made with <span className="heart" /> by Funifind team
        </p>
      </div>
    </div>
  );
}
