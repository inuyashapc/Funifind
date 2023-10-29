import LayoutAdmin from "@/layouts/layoutAdmin";
import postService from "@/services/post.service";
import React, { useState } from "react";
import { toast } from "react-toastify";
import IconChevronUpDown from "../../../../public/Icons/IconChevronUpDown";
import IconCheck from "../../../../public/Icons/IconCheck";
import { Dialog, Transition, Menu, Listbox, Fragment } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";

export default function CreatePost({ locationList }) {
  // Add for post images
  const [selected, setSelected] = useState(
    locationList ? locationList[0] : [{ _id: 1, name: "Khu vực" }]
  );
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

      if (file.type.startsWith("image/")) {
        previewImagesArray.push(URL.createObjectURL(file));
      }
    }

    // Ensure that you set the previewImages state to a new array with the current previews
    setPriviewImages([...previewImagesArray]);

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
  const handleDeleteImg = (index) => {
    const oldArr = [...previewImages];
    oldArr.splice(index, 1);
    setPriviewImages([...oldArr]);
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
    <form onSubmit={handlePostSubmit}>
      <div className="form-group">
        <div>
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{selected.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <IconChevronUpDown />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-80"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {locationList?.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? "bg-amber-100 text-amber-900"
                            : "text-gray-900"
                        }`
                      }
                      value={person}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {person?.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <IconCheck />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
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
        <div className=" mt-2">
          {previewImages.map((preview, index) => (
            <div key={index} style={{ width: "100px", position: "relative" }}>
              <img
                src={preview}
                alt={`Preview ${index}`}
                style={{
                  width: "100px",
                  height: "100px",
                  margin: "10px",
                }}
              />
              <XMarkIcon
                className="h-5 w-5 absolute"
                aria-hidden="true"
                style={{
                  top: "-10px",
                  right: "-20px",
                  color: "red",
                  cursor: "pointer",
                }}
                onClick={() => handleDeleteImg(index)}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        type="submit"
        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        Post
      </button>
    </form>
  );
}
