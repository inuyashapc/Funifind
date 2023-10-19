import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/components/admin/navbar/navbar";
import Sidebar from "@/components/admin/navbar/sidebar";
import Footer from "@/components/admin/navbar/footer";
import avt from "../../public/images/profile/16.jpg";
import Image from "next/image";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
  const [user, setUser] = useState();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const listPost = [
    {
      id: 1,
      title: "Test name post quá độ dài của card",
      description: "This is first post",
    },
    {
      id: 2,
      title: "Post2",
      description: "This is first post",
    },
    {
      id: 3,
      title: "Post3",
      description: "This is first post",
    },
    {
      id: 4,
      title: "Post4",
      description: "This is first post",
    },
    {
      id: 1,
      title: "Post1",
      description: "This is first post",
    },
    {
      id: 2,
      title: "Post2",
      description: "This is first post",
    },
    {
      id: 3,
      title: "Post3",
      description: "This is first post",
    },
    {
      id: 4,
      title: "Post4",
      description: "This is first post",
    },
    {
      id: 1,
      title: "Post1",
      description: "This is first post",
    },
    {
      id: 2,
      title: "Post2",
      description: "This is first post",
    },
    {
      id: 3,
      title: "Post3",
      description: "This is first post",
    },
    {
      id: 4,
      title: "Post4",
      description: "This is first post",
    },
  ];
  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <div className="content row">
        <Sidebar />
        <div className="col container-fluid">
          <div class=" justify-center">
            <div class="card-header">
              <div className="flex items-center gap-2 justify-start">
                <Image
                  className="rounded-circle"
                  src={avt}
                  alt="logo"
                  style={{
                    height: "50px",
                    width: "50px",
                    cursor: "pointer",
                  }}
                />

                <button
                  type="button"
                  className="btn btn-outline-primary rounded-pill px-3 py-2 "
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Đăng bài
                </button>
              </div>
            </div>
          </div>
          <div className="row px-2">
            {listPost?.map((post) => (
              <div className="col-3 ">
                <div
                  className="card px-0 pt-0 shadow  mb-5 bg-white rounded"
                  // style={{ width: "18rem" }}
                >
                  <img
                    src="https://cosmic-nextjs-blog.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2Fbab6b030-ff1e-11ed-8fca-9b0db64c9b86-nasa-vhSz50AaFAs-unsplash.jpg%3Fw%3D1400%26auto%3Dformat&w=3840&q=75"
                    class="card-img-top"
                    alt="f"
                  />
                  <div style={{ padding: "10px 00px 0px 10px" }}>
                    <div className="flex items-center gap-2 ">
                      <Image
                        className="rounded-circle"
                        src={avt}
                        alt="logo"
                        style={{
                          height: "36px",
                          width: "36px",
                          cursor: "pointer",
                        }}
                      />

                      <div>
                        <a
                          href="#"
                          className="hover-decoration "
                          style={{ color: "black" }}
                        >
                          ThangNH
                        </a>
                        <div style={{ fontSize: "12px" }}>20:00</div>
                      </div>
                    </div>
                    <div
                      className="text-truncate text-truncate-multiline-ellipsis"
                      style={{
                        width: "90%",
                        overflowWrap: "break-word",
                      }}
                    >
                      <a
                        href="#"
                        className="card-title my-2 hover-decoration "
                        title={post.title}
                      >
                        {post.title}
                      </a>
                    </div>

                    <div className="flex select-none justify-start space-x-2 md:justify-start">
                      <div
                        className="flex rounded-full border border-zinc-200 bg-zinc-50 px-2 py-1 dark:border-zinc-700 white:bg-zinc-900"
                        style={{ cursor: "pointer" }}
                      >
                        <span className="pt-[3px] text-xs leading-none text-cyan-600 white:text-cyan-300">
                          Tag1
                        </span>
                      </div>
                      <div
                        className="flex rounded-full border border-zinc-200 bg-zinc-50 px-2 py-1 dark:border-zinc-700 white:bg-zinc-900"
                        style={{ cursor: "pointer" }}
                      >
                        <span className="pt-[3px] text-xs leading-none text-cyan-600 white:text-cyan-300">
                          Tag2
                        </span>
                      </div>
                    </div>
                    <p className="card-text">{post.description}</p>

                    <a
                      href="#"
                      className="card-link  text-primary hover-decoration "
                    >
                      View more
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
