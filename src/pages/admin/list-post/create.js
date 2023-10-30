import LayoutAdmin from "@/layouts/layoutAdmin";
import postService from "@/services/post.service";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function CreatePost() {
  // Add for post images

  const [imagesState, setImagesState] = useState([]);
  const [previewImages, setPriviewImages] = useState([]);

  /** Bắt đầu phần để call api cho save ảnh và preview ảnh */
  const selectFilesHandler = async (e) => {
    const imagesData = [];
    const previewImagesArray = [];
    const files = e.target.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const imageData = await readFileHandler(file);
      if (imageData != undefined) {
        imagesData.push(imageData);
      }

<<<<<<< HEAD
		// Set preview để người dùng xem trước ảnh
		setPriviewImages([...previewImagesArray]);

		// Set dữ liệu ảnh sẽ đăng.
		setImagesState((prevImages) => [...prevImages, ...imagesData]);
	};
=======
      if (file.type.startsWith("image/")) {
        previewImagesArray.push(URL.createObjectURL(file));
      }
    }

    // Ensure that you set the previewImages state to a new array with the current previews
    setPriviewImages([...previewImagesArray]);
>>>>>>> main

    // Update the images state to accumulate all selected images
    setImagesState((prevImages) => [...prevImages, ...imagesData]);
  };

  const readFileHandler = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagesState((curr) => [...curr, reader.result]);
      return reader.result;
    };
  };

  const uploadFilesHandler = async (postId) => {
    const data = JSON.parse(localStorage.getItem("user"));
    console.log(data);
    const formData = new FormData();
    for (let i = 0; i < imagesState.length; i++) {
      let file = imagesState[i];
      formData.append("file", file);
    }
    formData.append("postId", postId);
    formData.append("userId", data.id);
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + "images/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      // const data = false;
      if (data) {
        setImagesState([]);
        setPriviewImages([]);
      }
    } catch (e) {
      console.log(e);
    }
  };
  /** Kết thúc phần để call api cho save ảnh và preview ảnh */
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
        .then(async (response) => {
          if (imagesState && imagesState.length > 0) {
            await uploadFilesHandler(response.data._id);
          }
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
      <form onSubmit={handlePostSubmit}>
        <div className="form-group">
          <textarea
            name="post"
            className="form-control"
            placeholder="What's on your mind?"
            rows="3"
            required
          ></textarea>
          <input
            type="file"
            onChange={selectFilesHandler}
            accept="image/*"
            multiple="multiple"
          />
          <div>
            {previewImages.map((preview, index) => (
              <img
                key={index}
                src={preview}
                alt={`Preview ${index}`}
                style={{
                  width: "100px",
                  height: "100px",
                  margin: "5px",
                }}
              />
            ))}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </LayoutAdmin>
  );
}
