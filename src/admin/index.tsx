import { useContext, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import UserContext from "../config/Usercontext";
// import Sidebar from "../components/Sidebar";
import Sidebar from "./components/common/AdminSidebar";

function AdminDashboard() {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (login.id == 0) {
      navigate("/login");
    }
  }, [login.id]);

  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div className="bg-primary p-3 d-flex justify-content-between align-items-center text-white">
            <div>
              <div>
                <b>{login.first_name + " " + login.last_name}</b>
              </div>
              <div>{login.username}</div>
            </div>
            <Link to={"/logout"} className="btn btn-xs btn-outline-light">
              Logout
            </Link>
          </div>
          <div id="content" className="p-3">
            {location.pathname == "/admin" && <AdminDashboard />}
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
export default AdminDashboard;
