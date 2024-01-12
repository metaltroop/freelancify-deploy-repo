import { useState, useEffect } from "react";
import "./profile.css";
// import Poppins from "../../assets/fonts/Poppins-Regular.ttf"

const Profile = () => {
  const [fullName, setFullName] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [gender, setGender] = useState("");
  const [domain, setDomain] = useState("");
  const [portfolioLink, setPortfolioLink] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  // New state to store user email
  const handleFileChange = (ev) => {
    const selectedImage = ev.target.files[0];
    setImage(selectedImage);

    // Uncomment the following line if you want to show a preview of the selected image
    // setFormData({ ...formData, previewImage: URL.createObjectURL(selectedImage) });
  };

 
  const handleRemoveImage = () => {
    // Set the state to null to remove the selected image
    setImage(null);
    // Also, you may want to reset the previewImage in formData if needed
    // setFormData({ ...formData, previewImage: null });
  };
  useEffect(() => {
    // Fetch current user data when the component mounts
    const fetchCurrentUser = async () => {
      try {
        const response = await fetch("http://localhost:3001/user/current", {
          method: "GET",
          headers: {
            Authorization: localStorage.getItem("authToken"), // Include the JWT token in the headers
          },
        });

        if (response.ok) {
          const userData = await response.json();
          // Update the state with the fetched data
          setFullName(userData.data.fullName);
          setYearsOfExperience(userData.data.yearsOfExperience);
          setGender(userData.data.gender);
          setDomain(userData.data.domain);
          setPortfolioLink(userData.data.portfolioLink);
          setEmail(userData.data.email); // Set the email in the state
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchCurrentUser();
  }, []);

  const updateProfile = async (ev) => {
    ev.preventDefault();
  
    // Prepare data for updating the profile
    const data = {
      fullName,
      yearsOfExperience,
      gender,
      domain,
      portfolioLink,
    };
  
    try {
      const response = await fetch(`http://localhost:3001/user/${email}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("authToken"), // Include the JWT token in the headers
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        console.log("Profile updated successfully");
        alert("Profile information updated successfully");

        // Additional logic if needed after successful update
      } else {
        console.error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
  

  return (
    <div className=" ">
      <div className=" ">
        <form onSubmit={updateProfile} className="">
          <div className=" p-2 mt-20 ml-20 mb-20  gridfr">
            <div className="w-80 border translate-y-[-60px] ">
              <label
                htmlFor="image"
                className=" block py-2 text-start text-white text-2xl  font-semibold  "
              >
                Choose Profile Photo:
              </label>
              {!image && (
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleFileChange}
                  className=" w-inherit h-full word-wrap items-center "
                />
              )}
              {/* Uncomment the following block to show a preview of the selected image */}
              {image && (
                <>
                  <div className="border-[2px] relative">
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Preview"
                      className="p-2 object-cover"
                    />
                  </div>
                  <button
                    type="button"
                    className="absolute mt-2 mx-16 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 cursor-pointer"
                    onClick={handleRemoveImage}
                  >
                    Remove
                  </button>
                </>
              )}
            </div>

            <div className="ml-40 flex flex-col gap-12 justify-center">
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block py-2 text-start text-white text-2xl  font-semibold "
                >
                  Full Name:
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={fullName}
                  onChange={(ev) => setFullName(ev.target.value)}
                  required
                  className="border rounded-2xl text-2xl bg-gray-200 drop-shadow-2xl p-6  w-[86%]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block py-2 text-start text-white text-2xl  font-semibold"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}  // Add this line to set the value
                  readOnly
                  className="border rounded-2xl text-2xl bg-gray-200 drop-shadow-2xl p-6  w-[86%]"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col  mt-10 ml-20 mb justify-center ">
            <div className="grid grid-cols-2 gap-2 py-2">
              <div className="mx-4">
                <label
                  htmlFor="yearsOfExperience"
                  className="block py-2 text-start text-white text-2xl  font-semibold "
                >
                  Years of Experience:
                </label>
                <input
                  type="number"
                  id="yearsOfExperience"
                  name="yearsOfExperience"
                  value={yearsOfExperience}
                  onChange={(ev) => setYearsOfExperience(ev.target.value)}
                  min="0"
                  required
                  className="border rounded-2xl bg-gray-200 drop-shadow-2xl p-6  w-[80%]"
                />
              </div>
              <div className="mx-4">
                <label
                  htmlFor="gender"
                  className="block py-2 text-start text-white text-2xl  font-semibold"
                >
                  Gender:
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={gender}
                  onChange={(ev) => setGender(ev.target.value)}
                  required
                  className="border text-xl rounded-2xl bg-gray-200 drop-shadow-2xl p-6  w-[80%]"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 py-2">
              <div className="mx-4">
                <label
                  htmlFor="language"
                  className="block py-2 text-start  text-white text-2xl  font-semibold"
                >
                  Domain 
                </label>
                <select
                  id="Domain"
                  name="Domain"
                  value={domain}
                  onChange={(ev) => setDomain(ev.target.value)}
                  required
                  className="border rounded-2xl bg-gray-200 text-black drop-shadow-2xl p-6  w-[80%]"
                >
                  <option value=""></option>
                  <option value="Web-Dev">WebDev</option>
                  <option value="Video-Editing">Video Editing</option>
                  <option value="Python-Dev">Python Dev</option>
                  <option value="Logo-Design">Logo Design</option>
                </select>
              </div>
              <div className="mx-4 justify-center">
                <label
                  htmlFor="portfolioLink"
                  className="block py-2 text-start text-white text-2xl  font-semibold"
                >
                  Portfolio Link:
                </label>
                <input
                  type="url"
                  id="portfolioLink"
                  name="portfolioLink"
                  value={portfolioLink}
                  onChange={(ev) => setPortfolioLink(ev.target.value)}
                  required
                  className="border rounded-2xl bg-gray-200 drop-shadow-2xl p-6  w-[80%]"
                />
              </div>
            </div>
          </div>

          <div className="flex mt-10 justify-start ml-[42%]">
            <button
              type="submit"
              className=" bg-green-400 text-white py-2 rounded-full hover:bg-blue-900  font-semibold text-2xl px-16"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
