import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import {} from '../../../public/images/profile'
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import LayoutAdmin from "@/layouts/layoutAdmin";
import img1 from "../../../public/images/profile/profile.png";
import Link from "next/link";
export default function Profiles() {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState({
    data: {
      name: '',
      email: '',
      phoneNumber: '',
      address: '',
    },
  });
  const [totalFollowing, setTotalFollowing]=useState(null);

  useEffect(() => {
    // Check if the id is defined before making the API requests
    if (id) {
      const fetchUser = async () => {
        const userResponse = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}users/${id}`
        );
        const userData = await userResponse.json();
        setUser(userData);
      };

      const fetchTotalFollowing = async () => {
        // Retrieve the token from Local Storage
        const token = localStorage.getItem('accessToken');

        if (token) {
          console.log("Dữ liệu từ Local Storage:", JSON.parse(token));
          setId(JSON.parse(token).id);
        } else {
          console.log("Không có dữ liệu trong Local Storage.");
          return
        }

        const totalFollowingResponse = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}follows/${id}`,
          {
            method: 'GET',
            headers: {
              'x-access-token': token, // Use 'x-access-token' instead of 'Authorization'
            },
          }
        );

        if (totalFollowingResponse.ok) {
          const totalFollowingData = await totalFollowingResponse.json();
          setTotalFollowing(totalFollowingData.totalFollowing);
        } else {
          console.error('Failed to fetch total following');
        }
      };

      fetchUser();
      fetchTotalFollowing();
    }
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser((prevUser) => ({
      data: {
        ...prevUser.data,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        "https://api.realworld.io/api/user",
        { user: userData },
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("userToken")}`,
          },
        }
      );
      const newToken = response.data.user.token;
      updateUser({ ...userData, token: newToken });
      localStorage.setItem("userToken", newToken);
      alert("Settings updated successfully!");
      nav(`/profiles/${userData.username}`);
    } catch (error) {
      console.error("Error updating settings:", error);
      alert("Failed to update settings. Please try again later.");
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <LayoutAdmin>
      <div className="row">
        <div className="col-lg-12">
          <div className="profile card card-body px-3 pt-3 pb-0">
            <div className="profile-head">
              <div className="photo-content">
                <div className="cover-photo" />
              </div>
              <div className="profile-info">
                <div className="profile-photo">
                  <Image className="img-fluid rounded-circle" src={img1} alt="img1" />
                  {/* <img src="" className="img-fluid rounded-circle" alt="" /> */}
                </div>
                <div className="profile-details">
                  <div className="profile-name px-3 pt-2">
                    <h4 className="text-primary mb-0">{user?.data?.name}</h4>
                  </div>
                  <div className="profile-email px-2 pt-2">
                    <h4 className="text-muted mb-0">{user?.data?.email}</h4>
                    <p>FPT mail</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-4">
          <div className="card">
            <div className="card-body">
              <div className="profile-statistics mb-5">
                <div className="text-center">
                  <div className="row">
                    <div className="col">
                      {totalFollowing !== null ? (
                        <p>Total Following: {totalFollowing}</p>
                      ) : (
                        <p>Loading Total Following...</p>
                      )}
                      <span>Followers</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a
                      href="javascript:void()"
                      className="btn btn-primary mb-1 mr-1"
                    >
                      Follow
                    </a>
                    <Link
                      href="/message/1"
                      className="btn btn-primary mb-1">
                      Message
                    </Link>

                  </div>
                </div>
                <div className="modal fade" id="sendMessageModal">
                  <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Send Message</h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                        >
                          <span>×</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          <div>
            <form onSubmit={handleSubmit}>
              <div className="about-me">
                <div className="about-me-left">
                  <div className="mb-3 px-2 pt-2">
                    <label htmlFor="name" className="form-label">
                      User Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={user?.data?.name ?? ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 px-2 pt-2">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phoneNumber"
                      value={user?.data?.phoneNumber ?? ""}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="about-me-right">
                  <div className="mb-3 px-2 pt-2">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="fptemail"
                      value={user?.data?.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 px-2 pt-2">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      name="address"
                      value={user?.data?.address ?? ""}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </form>
            <div className="mt-4">
              <button type="submit" className="btn btn-success mb-1">Update</button>
            </div>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
}
