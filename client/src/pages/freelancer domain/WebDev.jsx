import { useEffect, useState } from "react";
import profileplaceholder from "../../assets/profileplaceholder.png";

function WebDev() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("https://freelancify-deploy-repo.vercel.app/user/domain/Web-Dev")
      .then((response) => response.json())
      .then((data) => setUsers(data.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleHireClick = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const card = users.map((user) => (
    <div
      key={user._id}
      className="   bg-gray-200 rounded-3xl justify-center items-center mb-4 p-10 w-85 h-60"
    >
      <div className="flex justify-between">
        <div key={user._id} className="flex px-14  gap-6 justify-start ">
          {/* <div className="w-36 h-36 bg-slate-400 justify-center rounded-full"></div> */}
          <img src={profileplaceholder} className="w-36 h-36 bg-slate-400 justify-center rounded-full" alt="profileplaceholder" />
          <div className="flex flex-col  translate-y-[-15px] justify-evenly text-xl">
            <h1 className="text-start font-bold text-4xl">{user.fullName}</h1>
            <h2 className="text-start font-semibold text-2xl ">
              Years Of Experience : {user.yearsOfExperience}
            </h2>
            <h3 className="text-start font-semibold text-2xl ">
              {" "}
              Portfolio:{" "}
              <a
                className="text-blue-500"
                href={user.portfolioLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {user.username}
              </a>
            </h3>
          </div>
        </div>
        <div className="pt-[120px]">
          <button
            onClick={() => handleHireClick(user)}
            className="bg-blue-500 text-white px-10 py-2 rounded-2xl"
          >
            Hire
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
    <ul>{card}</ul>
    {showModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-20 items-center justify-center h-[60vh] rounded-3xl">
          {/* Modal Content */}
          <h2 className="text-3xl font-bold items-center justify-center">
            Contact Information for {selectedUser.fullName}
          </h2>
          <div className="grid grid-cols-2 p-2">
              <div className="grid-row-2 p-2 ">
                  <div className="flex flex-col m-2 border-[2px] hover:scale-105 rounded-3xl border-gray-800 hover:shadow-lg items-center  text-2xl  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-20 h-20 p-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                    
                    <p className="p-4 text-blue-500">{selectedUser.email}</p>
                  </div>
                  <div className="flex flex-col m-2 border-[2px] rounded-3xl border-gray-800 hover:scale-105 hover:shadow-lg items-center text-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-20 h-20 p-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                    <p className="p-4 text-blue-500"> {selectedUser.contactNo}</p>
                  </div>
              </div>
              <div className="grid-row-2 p-2">
                  <div className="flex flex-col m-2 border-[2px] rounded-3xl hover:scale-105 border-gray-800 hover:shadow-lg items-center  text-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide w-20 h-20 p-2 lucide-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    
                      <a
                        className="p-4 text-blue-500"
                        href={selectedUser.linkedinLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {selectedUser.username} s link
                      </a>
                  
                  </div>
                  <div className="flex flex-col m-2 border-[2px] rounded-3xl hover:scale-105 border-gray-800 hover:shadow-lg items-center  text-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-20 h-20 p-2 lucide lucide-instagram"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    
                      <a
                        href={selectedUser.instagramLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 text-blue-500"
                      >
                  
                        @{selectedUser.username}
                      </a>
                   
                  </div>
              </div>
          </div>
          <div className="flex justify-center">
              <button
                onClick={handleCloseModal}
                className="bg-blue-500 text-white justify-center items-center px-4 py-2 rounded-md mt-4"
              >
                Close
              </button>
          </div>
        </div>
      </div>
    )}
  </div>);
}

export default WebDev;
