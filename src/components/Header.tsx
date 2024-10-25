import { Link } from "react-router-dom";
import Logo from "../assets/logo-blue.png";

function Header() {
  return (
    <div className="header">
      <div className="container-fluid py-2">
        <div className="row">
          <div className="col-sm-4">
            <Link to={"/"}>
              <img src={Logo} alt="Logo" title="Workice Logo" />
            </Link>
          </div>
        </div>
      </div>
      <div className="menu-outer">
        <div className="container-fluid">
          <div className="header-menu">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/"}>Catalog</Link>
                <ul>
                  <li>
                    <Link to={"/categories"}>Categories</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={"/settings"}>Members</Link>
                <ul>
                  <li>
                    <Link to={"/members"}>All Members</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={"/reports"}>Reports</Link>
                <ul>
                  <li>
                    <Link to={"/reports/day-book"}>Daybook Report</Link>
                  </li>
                  <li>
                    <Link to={"/reports/tax"}>Tax Report</Link>
                  </li>
                  <li>
                    <Link to={"/reports/operators"}>Operator Wise Report</Link>
                  </li>
                  <li>
                    <Link to={"/reports/profit-loss"}>Profit Loss Report</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={"/masters"}>Master</Link>
                <ul>
                  <li>
                    <Link to={"/masters/utility-services"}>
                      Utility Service Providers
                    </Link>
                  </li>
                  <li>
                    <Link to={"/masters/banks"}>Bank List</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={"/settings"}>Settings</Link>
                <ul>
                  <li>
                    <Link to={"/settings/states"}>States</Link>
                  </li>
                  <li>
                    <Link to={"/settings/districts"}>District</Link>
                  </li>
                  <li>
                    <Link to={"/settings/blocks"}>Blocks</Link>
                  </li>
                  <li>
                    <Link to={"/settings/panchayat"}>Panchayat</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>
                <Link to={"/"}>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
