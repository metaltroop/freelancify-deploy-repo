import { useState, useEffect } from "react";
// import "./contactInfo.css"; // Import your CSS file for styling

const ContactInfo = () => {
  const [instagramLink, setInstagramLink ] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await fetch("https://freelancify-deploy-repo.vercel.app/user/current", {
          method: "GET",
          headers: {
            Authorization: localStorage.getItem("authToken"),
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setInstagramLink(userData.data.instagramLink || "");
          setLinkedinLink(userData.data.linkedinLink || "");
          setContactNo(userData.data.contactNo || "");
          setEmail(userData.data.email || "");
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchCurrentUser();
  }, []);

  const updateContactInfo = async (ev) => {
    ev.preventDefault();

    const data = {
      instagramLink,
      linkedinLink,
      contactNo,
      email,
    };

    try {
      const response = await fetch(`https://freelancify-deploy-repo.vercel.app/user/contact/${email}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("authToken"),
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Contact information updated successfully");
        console.log(email)
        alert("Contact information updated successfully");
        // Additional logic if needed after successful update
      } else {
        console.error("Failed to update contact information");
        alert("Failed to update contact information");
      }
    } catch (error) {
      console.error("Error updating contact information:", error);
    }
  };

  return (
    <div className="flex items-center justify-center p-10">
      <form onSubmit={updateContactInfo} className="w-[90%] rounded-[20px] p-10">
        <div className="bg-gray-200 flex flex-col justify-evenly rounded-[20px] bg-opacity-70  gap-10 border py-20 px-20">
          {/* Instagram Profile */}
          <div className="flex flex-row justify-start items-center gap-10">
            <div className="flex flex-row justify-evenly gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <h1 htmlFor="instagram" className="text-3xl w-auto font-semibold">
                Instagram Profile:
              </h1>
            </div>
            <input
              type="url"
              id="instagramLink"
              name="instagramLink"
              value={instagramLink}
              onChange={(ev) => setInstagramLink(ev.target.value)}
              className="py-5 px-[25%] rounded-lg"
              required
            />
          </div>

          {/* LinkedIn Profile */}
          <div className="flex flex-row justify-start items-center gap-10">
            <div className="flex flex-row justify-center gap-4 mr-5 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <h1 htmlFor="LinkedIn" className="text-3xl font-semibold">
                LinkedIn Profile:
              </h1>
            </div>
            <input
              type="url"
              id="linkedinLink"
              name="linkedinLink"
              value={linkedinLink}
              onChange={(ev) => setLinkedinLink(ev.target.value)}
              className="py-5 px-[25%] rounded-lg"
              required
            />
          </div>

          {/* Contact Number */}
          <div className="flex flex-row justify-start items-center gap-10">
            <div className="flex flex-row justify-center gap-4 mr-16 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="10" r="3" />
                <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
              </svg>
              <h1 htmlFor="contactNumber" className="text-3xl font-semibold">
                Contact Number:
              </h1>
            </div>
            <input
              type="tel"
              id="contactNo"
              name="contactNo"
              value={contactNo}
              onChange={(ev) => setContactNo(ev.target.value)}
              className="py-5 px-[25%] rounded-lg"
              required
            />
          </div>

          {/* Email ID */}
          <div className="flex flex-row justify-start items-center gap-10">
            <div className="flex flex-row justify-center gap-4 mr-36 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="10" r="3" />
                <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
              </svg>
              <h1 htmlFor="email" className="text-3xl font-semibold">
                Email ID:
              </h1>
            </div>
            <input
              type="email"
              id="email2"
              name="email"
              value={email}
              readOnly
              className="py-5 px-[25%] rounded-lg"
              required
            />
          </div>

          <div className="flex items-center justify-center ">
            <input
              type="submit"
              value="Submit"
             
              className="bg-blue-900 text-white font-semibold text-2xl py-6 px-20 rounded-full"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactInfo;
