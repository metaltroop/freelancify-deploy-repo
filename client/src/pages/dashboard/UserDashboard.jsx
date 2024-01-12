import Sidebar from "../../component/Sidebar";
import { Outlet } from "react-router-dom";
import "./userdashboard.css"

const UserDashboard = () => {
  return (
    <>
      <div className="gradient  ">
          <div className="flex">
            <Sidebar />
            <div className="flex-grow p-2 ">
              <Outlet />
            </div>
          </div>
      </div>
    </>
  );
};

export default UserDashboard;
