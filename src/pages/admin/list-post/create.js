import LayoutAdmin from "@/layouts/layoutAdmin";
import postService from "@/services/post.service";
import React from "react";
import { toast } from "react-toastify";

export default function CreatePost() {
  const handleShowToast = (message) => {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const handlePostSubmit = async (e) => {
    e.preventDefault();
    const newPost = e.target.post.value; // Get the new post text from the form
    if (newPost) {
      postService
        .createPost(newPost)
        .then((response) => {
          handleShowToast(
            "Post created successfully! Waiting for admin approve."
          );
          e.target.reset(); // Clear the form
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <LayoutAdmin>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 col-xxl-12">
              <div className="row">
                <div className="col-xl-12">
                  <div className="card p-8">
                    <form onSubmit={handlePostSubmit}>
                      <div className="form-group">
                        <textarea
                          name="post"
                          className="form-control"
                          placeholder="What's on your mind?"
                          rows="3"
                          required
                        ></textarea>
                        <input type="file" id="myFile" name="filename"></input>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Post
                      </button>
                    </form>
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
