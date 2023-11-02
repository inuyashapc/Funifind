import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import LayoutUser from "@/layouts/layoutUser";
import img1 from "../../../public/images/profile/profile.png";
import Link from "next/link";

export default function Profiles({ loggedInUserId }) {
  const router = useRouter();
  const { id } = router.query;
  const [userData, setUserData] = useState({});
  const [user, setUser] = useState({
    data: {
      name: '',
      email: '',
      phoneNumber: '',
      address: '',
    },
  });
  const [totalFollowing, setTotalFollowing] = useState(null);

  useEffect(() => {
    // Load user data from local storage
    const userDataStr = localStorage.getItem('user');
    if (userDataStr) {
      setUserData(JSON.parse(userDataStr));
    } else {
      console.error('No user data in local storage');
    }
  
    // Fetch user data and totalFollowing
    if (id && userData.accessToken) {
      const headers = {
        'x-access-token': userData.accessToken,
      };
  
      // Fetch user data
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}users/${id}`, {
        headers: headers, // Define headers here
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch user data');
          }
          return response.json();
        })
        .then((userData) => {
          setUser(userData);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
  
      // Fetch totalFollowing
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}follows/${id}`, {
        method: 'GET',
        headers: headers, // Define headers here
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch total following data');
          }
          return response.json();
        })
        .then((totalFollowingData) => {
          setTotalFollowing(totalFollowingData.totalFollowing);
        })
        .catch((error) => {
          console.error('Error fetching total following:', error);
        });
    }
  }, [id, userData.accessToken]);
  


  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser((prevUser) => ({
      data: {
        ...prevUser.data,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!userData.accessToken) {
      console.error('No access token available');
      return;
    }

    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': userData.accessToken,
    };

    const userUpdateData = {
      name: user.data.name,
      email: user.data.email,
      phoneNumber: user.data.phoneNumber,
      address: user.data.address,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}users/edit`,
        {
          method: 'PUT',
          headers,
          body: JSON.stringify(userUpdateData),
        }
      );

      if (response.ok) {
        console.log('User data updated successfully');
        // You can add code here to handle a successful update
      } else {
        console.error('Failed to update user data');
        // You can add code here to handle a failed update
      }
    } catch (error) {
      console.error('An error occurred while updating user data', error);
      // You can add code here to handle errors
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }


  return (
    <LayoutUser>

    {/* <> */}
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
                        <h2>{totalFollowing}</h2>
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
                      href={`/message/${id}`}
                      className="btn btn-primary mb-1">
                      Message
                    </Link>
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
                      className="form-control cursor-not-allowed"
                      id="email"
                      name="email"
                      value={user?.data?.email}
                      onChange={handleChange}
                      disabled
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
              {user?.data?.id === loggedInUserId && (
                <button type="submit" className="btn btn-success mb-1">
                  Update
                </button>
              )}
            </div>

          </div>
        </div>
      </div>
    {/* </> */}
    </LayoutUser>
  );
}
