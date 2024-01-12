import "./signin.css";
import Logo from "../../assets/with-text.png";

import { useState } from "react";

const Signin = () => {

  const [btnState, setBtnState] = useState(false);

  function handleClick() {
    setBtnState((btnState) => !btnState);
  }

  let toggleClassCheck = btnState ? "active" : "";
  let toggleFormCheck = btnState ? "Form" : "";
  let toggleTranslateCheck = btnState ? "100" : "200";

  return (
    <div className="Background h-[100vh] overflow-x-clip">
    <div
      className={`translate-x-${toggleTranslateCheck} transition-all duration-500`}
    >
      <div className=" z-[5] absolute w-[600px] h-screen rounded-[50px_50px_50px_50px] bg-[#5d97ca] "></div>
    </div>

    <div className="">
      <div className={`Register${toggleFormCheck}`}>
        <div className="flex">
          <div id="logintext" className=" z-[10] flex LoginOverlay flex-col justify-center items-center w-[35%] h-[100vh] rounded-[0px_50px_50px_0px] transition-all duration-500 ">
            <img src={Logo} alt="logo" width={200} className="mr-4" />
            <h1 className="text-gray-700 font-semibold font-sans text-5xl">
              Welcome Back
            </h1>
            <p className="text-gray-600 text-md font-medium pt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className=" LoginForm w-[65%] flex justify-center items-center">
            <div className="flex flex-col justify-between bg-white bg-opacity-90 w-[38%] h-[50%] rounded-[30px] p-8">
              <div  className="flex gap-2 flex-col">
                <h1 className="text-3xl text-gray-700">Login</h1>
                <p className="text-gray-600 text-md font-medium">
                  Don t Have an Account?{" "}
                  <button
                    id="btngtregister"
                    onClick={handleClick}
                    className="text-blue-600 font-medium hover:text-blue-500"
                  >
                    Go to Register?
                  </button>
                </p>
              </div>
              <div className="flex flex-col gap-8 justify-center">
                <div className="flex gap-2 items-center p-5 border-4 border-opacity-25 border-[#545454] rounded-md bg-slate-300 h-16 text-black">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    id="profile"
                  >
                    <path
                      fill="#200E32"
                      d="M5.84846399,13.5498221 C7.28813318,13.433801 8.73442297,13.433801 10.1740922,13.5498221 C10.9580697,13.5955225 11.7383286,13.6935941 12.5099314,13.8434164 C14.1796238,14.1814947 15.2696821,14.7330961 15.73685,15.6227758 C16.0877167,16.317132 16.0877167,17.1437221 15.73685,17.8380783 C15.2696821,18.727758 14.2228801,19.3149466 12.4926289,19.6174377 C11.7216312,19.7729078 10.9411975,19.873974 10.1567896,19.9199288 C9.43008411,20 8.70337858,20 7.96802179,20 L6.64437958,20 C6.36753937,19.9644128 6.09935043,19.9466192 5.83981274,19.9466192 C5.05537891,19.9062698 4.27476595,19.8081536 3.50397353,19.6530249 C1.83428106,19.3327402 0.744222763,18.7633452 0.277054922,17.8736655 C0.0967111971,17.5290284 0.00163408158,17.144037 0.000104217816,16.752669 C-0.00354430942,16.3589158 0.0886574605,15.9704652 0.268403665,15.6227758 C0.72692025,14.7330961 1.81697855,14.1548043 3.50397353,13.8434164 C4.27816255,13.6914539 5.06143714,13.5933665 5.84846399,13.5498221 Z M8.00262682,-1.16351373e-13 C10.9028467,-1.16351373e-13 13.2539394,2.41782168 13.2539394,5.40035587 C13.2539394,8.38289006 10.9028467,10.8007117 8.00262682,10.8007117 C5.10240696,10.8007117 2.75131423,8.38289006 2.75131423,5.40035587 C2.75131423,2.41782168 5.10240696,-1.16351373e-13 8.00262682,-1.16351373e-13 Z"
                      transform="translate(4 2)"
                    ></path>
                  </svg>
                  <input
                    type="text"
                    className="bg-transparent p-2 focus:outline-none"
                    placeholder="James Bond"
                  />
                </div>
                <div className="flex-col justify-start  gap-2">
                  <div className="flex gap-2 items-center p-5 border-4 border-opacity-25 border-[#545454] rounded-md bg-slate-300 h-16 text-black">
                    {" "}
                    <div className="w-[24px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        id="lock"
                        fill="#200E32"
                      >
                        <path d="M4.45001,14.17999v13.91998c0,1.88,1.52997,3.40002,3.39996,3.40002h16.30005c1.87,0,3.39996-1.52002,3.39996-3.40002V14.17999c0-1.87-1.52997-3.40002-3.39996-3.40002h-0.29004V8.35999C23.85999,4.01996,20.33002,0.5,16,0.5S8.14001,4.01996,8.14001,8.35999v2.41998H7.84998C5.97998,10.77997,4.45001,12.31,4.45001,14.17999z M16,18.70001c1.34998,0,2.44,1.08997,2.44,2.44c0,1.34998-1.09003,2.43994-2.44,2.43994s-2.44-1.08997-2.44-2.43994C13.56,19.78998,14.65002,18.70001,16,18.70001z M11.14001,8.35999C11.14001,5.67999,13.32001,3.5,16,3.5s4.85999,2.17999,4.85999,4.85999v2.41998h-9.71997V8.35999z"></path>
                      </svg>
                    </div>
                      <div >
                        <input
                          type="password"
                          className="bg-transparent p-2 focus:outline-none"
                          placeholder="Password"
                        />
                      </div>
                  </div>
                  <div> <p id="wplogin" className="flex items-center"></p> </div>
                </div>
                <div className="px-4 flex gap-4">
                  <input type="checkbox" value="Bike" />{" "}
                  <label htmlFor="">Keep me sign in</label>
                </div>
              </div>
              <button className="p-2 shadow-2xl text-slate-200 bg-slate-600 rounded-md">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`RegisterForm${toggleClassCheck}`}>
        <div className="w-[100%] flex h-screen fixed">
          <div className="mt-60 ml-80 w-[65%]  justify-center items-center">
            <div className="  flex  flex-col gap-5  justify-between bg-white bg-opacity-90 w-[38%] h-[75%] rounded-[30px] p-6">
              <div id="" className="flex gap-2 flex-col">
                <h1 className="text-3xl text-gray-700">Register</h1>
                <p className="text-gray-600 text-md font-medium">
                  Already Have an Account?{" "}
                  <button
                    id="btngtlogin"
                    onClick={handleClick}
                    className="text-blue-600 font-medium hover:text-blue-500"
                  >
                    Go to Login?
                  </button>
                </p>
              </div>
              <div className="flex flex-col gap-4 justify-center">
                <div className="flex gap-2 items-center p-5 border-4 border-opacity-25 border-[#545454] rounded-md bg-slate-300 h-16 text-black">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 100 100"
                    id="email"
                  >
                    <path d="M34.05 50 9 66.31V33.69L34.05 50zm31.9 0L91 66.31V33.69L65.95 50zm-3.66 2.39-11.2 7.29c-.33.21-.71.32-1.09.32s-.76-.11-1.09-.32l-11.2-7.29L10.66 70l-1.57 1.02C9.58 73.84 12.04 76 15 76h70c2.96 0 5.42-2.15 5.91-4.98L89.33 70 62.29 52.39zM50 55.61 89.33 30l1.58-1.02C90.42 26.15 87.96 24 85 24H15c-2.96 0-5.42 2.16-5.91 4.98L10.66 30 50 55.61z"></path>
                  </svg>
                  <input
                    type="Email"
                    className="bg-transparent p-2 focus:outline-none"
                    placeholder=" Email Address"
                  />
                </div>
                <div className="flex gap-2 items-center p-5 border-4 border-opacity-25 border-[#545454] rounded-md bg-slate-300 h-16 text-black">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    id="profile"
                  >
                    <path
                      fill="#200E32"
                      d="M5.84846399,13.5498221 C7.28813318,13.433801 8.73442297,13.433801 10.1740922,13.5498221 C10.9580697,13.5955225 11.7383286,13.6935941 12.5099314,13.8434164 C14.1796238,14.1814947 15.2696821,14.7330961 15.73685,15.6227758 C16.0877167,16.317132 16.0877167,17.1437221 15.73685,17.8380783 C15.2696821,18.727758 14.2228801,19.3149466 12.4926289,19.6174377 C11.7216312,19.7729078 10.9411975,19.873974 10.1567896,19.9199288 C9.43008411,20 8.70337858,20 7.96802179,20 L6.64437958,20 C6.36753937,19.9644128 6.09935043,19.9466192 5.83981274,19.9466192 C5.05537891,19.9062698 4.27476595,19.8081536 3.50397353,19.6530249 C1.83428106,19.3327402 0.744222763,18.7633452 0.277054922,17.8736655 C0.0967111971,17.5290284 0.00163408158,17.144037 0.000104217816,16.752669 C-0.00354430942,16.3589158 0.0886574605,15.9704652 0.268403665,15.6227758 C0.72692025,14.7330961 1.81697855,14.1548043 3.50397353,13.8434164 C4.27816255,13.6914539 5.06143714,13.5933665 5.84846399,13.5498221 Z M8.00262682,-1.16351373e-13 C10.9028467,-1.16351373e-13 13.2539394,2.41782168 13.2539394,5.40035587 C13.2539394,8.38289006 10.9028467,10.8007117 8.00262682,10.8007117 C5.10240696,10.8007117 2.75131423,8.38289006 2.75131423,5.40035587 C2.75131423,2.41782168 5.10240696,-1.16351373e-13 8.00262682,-1.16351373e-13 Z"
                      transform="translate(4 2)"
                    ></path>
                  </svg>
                  <input
                    type="text"
                    className="bg-transparent p-2 focus:outline-none"
                    placeholder="Username"
                  />
                </div>
                <div className="flex gap-2 items-center p-5 border-4 border-opacity-25 border-[#545454] rounded-md bg-slate-300 h-16 text-black">
                  {" "}
                  <div className="w-[24px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      id="lock"
                      fill="#200E32"
                    >
                      <path d="M4.45001,14.17999v13.91998c0,1.88,1.52997,3.40002,3.39996,3.40002h16.30005c1.87,0,3.39996-1.52002,3.39996-3.40002V14.17999c0-1.87-1.52997-3.40002-3.39996-3.40002h-0.29004V8.35999C23.85999,4.01996,20.33002,0.5,16,0.5S8.14001,4.01996,8.14001,8.35999v2.41998H7.84998C5.97998,10.77997,4.45001,12.31,4.45001,14.17999z M16,18.70001c1.34998,0,2.44,1.08997,2.44,2.44c0,1.34998-1.09003,2.43994-2.44,2.43994s-2.44-1.08997-2.44-2.43994C13.56,19.78998,14.65002,18.70001,16,18.70001z M11.14001,8.35999C11.14001,5.67999,13.32001,3.5,16,3.5s4.85999,2.17999,4.85999,4.85999v2.41998h-9.71997V8.35999z"></path>
                    </svg>
                  </div>
                  <input
                    type="password"
                    className="bg-transparent p-2 focus:outline-none"
                    placeholder="Password"
                  />
                </div>  
                <div className="px-4 flex gap-4">
                  <input type="checkbox" value="Bike" />{" "}
                  <label htmlFor=""> I agree the terms and conditions</label>
                </div>
              </div>
              <button className="p-2 shadow-2xl text-slate-200 bg-slate-600 rounded-md">
                Login
              </button>
            </div>
          </div>

          <div id="registertext" className=" z-[10] flex flex-col justify-center items-center w-[35%] h-[100vh] rounded-[50px_0px_0px_50px]  duration-700">
            <img src={Logo} alt="logo" width={200} className="mr-4" />
            <h1 className="text-gray-700 font-semibold font-sans text-5xl">
              Welcome Guest
            </h1>
            <p className="text-gray-600 text-md font-medium pt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Signin;