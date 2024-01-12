import { useState , useEffect} from "react";
import { Link ,useNavigate } from "react-router-dom";
import user from "../assets/user.png";
import Logo from "../assets/with-text.png";
// import { useContext} from "react";
// import { UserContext } from "../UserContext";


const Sidebar = () => {

  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  // const authToken = localStorage.getItem('authToken');
  // const isLoggedIn = authToken !== null;

  const handleLogout = () => {
    // Clear authentication token from local storage
    localStorage.removeItem('authToken');
    // navigate('/');
    // You can also perform additional logout-related actions if needed
    // For example, redirecting to the login page or updating state in your app
  };

 
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("https://freelancify-deploy-repo.vercel.app/user/current", {
          method: "GET",
          headers: {
            Authorization: localStorage.getItem("authToken"),
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setUserInfo(userData.data);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

//   const { setUserInfo} = useContext(UserContext);

//   function logout() {
//     fetch("http://localhost:3001/logout", {
//       credentials: "include",
//       method: "POST",
//     });
//     setUserInfo(null);
//   }
  
  return (
    <>
      <div className="w-[20%] flex flex-col justify-between   bg-blue-400 h-screen rounded-r-3xl ">
        <div className="flex flex-row gap-5 p-5 ">
          <img
            src={user}
            alt="user"
            className="Ellipse2 w-20 h-20 item-center just  rounded-full border-2 border-black border-opacity-60"
          />
          <div className="flex flex-col pl-4 items-start justify-center ">
            <h2 className="text-2xl font-semibold">{userInfo.username}</h2>
            <h3 className="text-xl font-normal ">{userInfo.email}</h3>
          </div>
        </div>
        <div className="flex flex-col gap-10 pl-10 text-2xl font-semibold  ">
          <div className="flex flex-row items-center justify-start gap-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 27 27"
              fill="none"
            >
              <path
                d="M7.5 6.27778C7.5 4.74542 8.13214 3.27582 9.25736 2.19227C10.3826 1.10873 11.9087 0.5 13.5 0.5C15.0913 0.5 16.6174 1.10873 17.7426 2.19227C18.8679 3.27582 19.5 4.74542 19.5 6.27778C19.5 7.81014 18.8679 9.27974 17.7426 10.3633C16.6174 11.4468 15.0913 12.0556 13.5 12.0556C11.9087 12.0556 10.3826 11.4468 9.25736 10.3633C8.13214 9.27974 7.5 7.81014 7.5 6.27778ZM7.5 14.9444C5.51088 14.9444 3.60322 15.7054 2.1967 17.0598C0.790176 18.4142 0 20.2512 0 22.1667C0 23.3159 0.474106 24.4181 1.31802 25.2308C2.16193 26.0435 3.30653 26.5 4.5 26.5H22.5C23.6935 26.5 24.8381 26.0435 25.682 25.2308C26.5259 24.4181 27 23.3159 27 22.1667C27 20.2512 26.2098 18.4142 24.8033 17.0598C23.3968 15.7054 21.4891 14.9444 19.5 14.9444H7.5Z"
                fill="black"
              />
            </svg>
            <div>
              <Link to={"/dashboard"} onClick={() => navigate("/dashboard/:id")}>Profile</Link>
            </div>
          </div>
          
          <div className="flex flex-row items-center justify-start gap-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 25 18"
              fill="none"
            >
              <path
                d="M9.0332 10.7266C9.56217 11.0512 10.0382 11.4497 10.4614 11.9219C10.8846 12.3941 11.2508 12.9253 11.5601 13.5156C11.8693 14.1059 12.1012 14.7355 12.2559 15.4045C12.4105 16.0735 12.4919 16.772 12.5 17.5H10.9375C10.9375 16.7228 10.8154 15.9899 10.5713 15.3012C10.3271 14.6126 9.98942 14.0124 9.55811 13.5009C9.12679 12.9893 8.63037 12.5859 8.06885 12.2908C7.50732 11.9957 6.90104 11.8432 6.25 11.8333C5.6071 11.8333 5.00081 11.9809 4.43115 12.276C3.86149 12.5712 3.36507 12.9795 2.94189 13.5009C2.51872 14.0223 2.18506 14.6224 1.94092 15.3012C1.69678 15.98 1.57064 16.713 1.5625 17.5H0C0 16.7818 0.0813802 16.0883 0.244141 15.4193C0.406901 14.7503 0.638835 14.1207 0.939941 13.5304C1.24105 12.9401 1.60319 12.4089 2.02637 11.9366C2.44954 11.4644 2.92969 11.0611 3.4668 10.7266C2.87272 10.1953 2.40885 9.52633 2.0752 8.71962C1.74154 7.9129 1.57064 7.06192 1.5625 6.16667C1.5625 5.38947 1.68457 4.65654 1.92871 3.96788C2.17285 3.27922 2.51058 2.67911 2.94189 2.16753C3.37321 1.65596 3.86963 1.2526 4.43115 0.957465C4.99268 0.662326 5.59896 0.509838 6.25 0.5C6.8929 0.5 7.49919 0.647569 8.06885 0.942708C8.63851 1.23785 9.13493 1.64612 9.55811 2.16753C9.98128 2.68895 10.3149 3.28906 10.5591 3.96788C10.8032 4.6467 10.9294 5.37963 10.9375 6.16667C10.9375 7.06192 10.7707 7.9129 10.437 8.71962C10.1034 9.52633 9.63542 10.1953 9.0332 10.7266ZM3.125 6.16667C3.125 6.68808 3.20638 7.17506 3.36914 7.6276C3.5319 8.08015 3.7557 8.47859 4.04053 8.82292C4.32536 9.16724 4.65495 9.43779 5.0293 9.63455C5.40365 9.83131 5.81055 9.93461 6.25 9.94444C6.67318 9.94444 7.07601 9.84606 7.4585 9.64931C7.84098 9.45255 8.17057 9.182 8.44727 8.83767C8.72396 8.49334 8.94775 8.09491 9.11865 7.64236C9.28955 7.18981 9.375 6.69792 9.375 6.16667C9.375 5.65509 9.29362 5.16811 9.13086 4.70573C8.9681 4.24334 8.7443 3.84491 8.45947 3.51042C8.17464 3.17593 7.84098 2.90538 7.4585 2.69878C7.07601 2.49219 6.67318 2.38889 6.25 2.38889C5.81869 2.38889 5.41585 2.48727 5.0415 2.68403C4.66715 2.88079 4.33756 3.15133 4.05273 3.49566C3.7679 3.83999 3.54411 4.24334 3.38135 4.70573C3.21859 5.16811 3.13314 5.65509 3.125 6.16667ZM25 0.5V2.38889H14.0625V0.5H25ZM14.0625 8.05556H25V9.94444H14.0625V8.05556ZM14.0625 15.6111H25V17.5H14.0625V15.6111Z"
                fill="black"
              />
            </svg>

            <div>
              <Link to={"/dashboard/Contactinfo"} onClick={() => navigate("/dashboard/Contactinfo/:id")}>Contact Info</Link>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
            >
              <path
                d="M16.4167 4.875L14.8892 6.46125L17.6842 9.375H6.66666V11.625H17.6842L14.8892 14.5275L16.4167 16.125L21.8333 10.5L16.4167 4.875ZM2.33332 2.625H11V0.375H2.33332C1.14166 0.375 0.166656 1.3875 0.166656 2.625V18.375C0.166656 19.6125 1.14166 20.625 2.33332 20.625H11V18.375H2.33332V2.625Z"
                fill="black"
              />
            </svg>

            <div>
              {/* <Link to={"/landing"} onClick={logout} >Logout</Link> */}
              <Link to="/" onClick={handleLogout} >Logout</Link>

            </div>
          </div>
        </div>
        <div className="">
          <img className="p-10" src={Logo} alt="Logo" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
