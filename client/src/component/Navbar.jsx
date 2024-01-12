import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import Logo from '../assets/with-text.png';

const Navbar = () => {
  const location = useLocation();
  const isLoginPage = location.pathname.toLowerCase() === "/login";
  const isRegisterPage = location.pathname.toLowerCase() === "/register";
  const isSigninPage = location.pathname.toLowerCase() === "/signin";
  const isSignupPage = location.pathname.toLowerCase() === "/signup";

  // Check if auth token is present in local storage
  const authToken = localStorage.getItem('authToken');
  const isLoggedIn = authToken !== null;

  // const navigate = useNavigate();
  // Function to handle logout
  const handleLogout = () => {
    // Clear authentication token from local storage
    localStorage.removeItem('authToken');
    // navigate('/');
    // You can also perform additional logout-related actions if needed
    // For example, redirecting to the login page or updating state in your app
  };

  if (isLoginPage || isRegisterPage || isSigninPage || isSignupPage) {
    return null; // Hide the Navbar on specific pages
  }

  return (
    <nav className="bg-[#ffffffd8] border-opacity-25 rounded-full flex justify-between items-center fixed w-[90%] z-20 shadow-xl mt-4 ml-28">
      <div>
        <img src={Logo} alt="logo" className="w-20px h-20"/>
      </div>
      <div className="border-gray-900">
        <ul className="font-medium flex gap-10 p-4  rounded-lg">
          <li><Link to="/landing" className="text-gray-700 ">Home</Link></li>
          <li><Link to="/hire" className="text-gray-700">Find Freelancers</Link></li>
          <li><ScrollLink to="aboutus" spy={true} smooth={true} duration={500} className="text-gray-700">About Us</ScrollLink></li>
          <li><ScrollLink to="contactus" spy={true} smooth={true} duration={500} className="text-gray-700">Contact Us</ScrollLink></li>
        </ul>
      </div>
      <div className="flex justify-between items-center mr-6">
        <ul className="flex gap-3">
          {isLoggedIn ? (
            // Show Logout button if user is logged in
            <li>
              <Link to="/" onClick={handleLogout} className="rounded-full bg-red-500 text-white px-4 py-2">Logout</Link>
            </li>
          ) : (
            // Show Register and Login buttons if user is not logged in
            <>
              <li>
                <Link to="/signup" className="rounded-full bg-blue-500 text-white px-4 py-2">Register</Link>
              </li>
              <li>
                <Link to="/signin" className="rounded-full bg-green-500 text-white px-4 py-2">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
