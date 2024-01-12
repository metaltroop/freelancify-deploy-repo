import Navbar from "../../component/Navbar";
// import FreelancerCard from "./FreelancerCard"
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

function Hire() {
  const navigate = useNavigate();
  const { category } = useParams();

  return (
    <>
      <div className="h-screen w-full fixed bg-[#204B9D3B]">
        <Navbar />
        <div className="grid grid-cols-2 h-screen w-[100%]  ">
          <div className="col-span-1 pt-20 pr-20 pl-20 mt-20">
            <Outlet />
          </div>
          <div className="col-span-1 p-20 h-screen mt-[8%]">
            <div className="flex flex-col items-center gap-6 p-20 w-[100%] h-[98%] bg-slate-50 rounded-3xl">
              <div className="text-6xl font-bold text-gray-700">Filter</div>
              <div className="px-20 py-4 rounded-3xl bg-black text-white flex justify-center items-center text-2xl font-semibold">
              Category: {category || 'All'} {/* Display selected category or 'All' */}
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-row gap-2 rounded-3xl items-center  border-2 border-black  ">
                  <img
                    className="p-4"
                    src="https://img.icons8.com/dotty/80/web-design.png"
                    alt="web-dev-oimg"
                  />
                  <Link
                    to={"/hire"}
                    onClick={() => navigate("/hire")}
                    className="rounded-3xl p-8 text-black flex justify-center items-center text-2xl font-semibold"
                  >
                    Web Development
                  </Link>
                </div>
                <div className="flex flex-row gap-2 rounded-3xl items-center border-2 border-black">
                  <img
                    className="p-4 w-30 ml-2"
                    src="https://img.icons8.com/ios/50/python--v1.png"
                    alt="python-dev-img"
                  />
                  <Link
                    to={"/hire/python-dev"}
                    onClick={() => navigate("/python-dev")}
                    className=" p-8 text-black flex justify-center items-center text-2xl font-semibold"
                  >
                    Python Development
                  </Link>
                </div>
                <div className="flex flex-row gap-2 rounded-3xl items-center border-2 border-black">
                  <img
                    className="p-4 w-30 ml-2"
                    src="https://img.icons8.com/ios/50/video-editing--v1.png"
                    alt="video-editing--v1"
                  />
                  <Link
                    to={"/hire/video-editing"}
                    onClick={() => navigate("/video-editing")}
                    className="  p-8 text-black  flex justify-center items-center text-2xl font-semibold"
                  >
                    Video Editing
                  </Link>
                </div>
                <div className="flex flex-row gap-2 rounded-3xl items-center border-2 border-black">
                <img
                    className="p-4 w-30 ml-2"
                    src="https://img.icons8.com/external-yogi-aprelliyanto-detailed-outline-yogi-aprelliyanto/64/external-logo-design-branding-yogi-aprelliyanto-detailed-outline-yogi-aprelliyanto.png"
                    alt="logo-design-img"
                  />
                  <Link
                    to={"/hire/logo-design"}
                    onClick={() => navigate("/logo-design")}
                    className="  p-8 text-black  flex justify-center items-center text-2xl font-semibold"
                  >
                    Logo Design
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hire;
