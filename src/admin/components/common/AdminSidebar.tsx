import { Link } from "react-router-dom";

import {
  RiDashboardLine,
  RiGroup2Line,
  RiMacbookLine,
  RiSettings2Line,
  RiVerifiedBadgeLine,
  RiWallet2Line,
} from "@remixicon/react";

const Sidebar = () => {
  return (
    <div className="h-screen md:overflow-hidden overflow-hidden md:hover:overflow-auto pb-10">
      <div className="mt-6 flex justify-around items-center bg-blue-600 w-full text-black p-4">
        <div className="rounded-full w-24 h-24">
          <img
            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            className="w-full h-full rounded-full"
          />
        </div>
        <div>
          <p className="text-white flex">
            Welcome, <span className="font-bold">Name</span>
          </p>
          <p className="text-white">Date, Time </p>
          <Link to={"/logout"}>
            <button className="bg-white font-semibold">Logout</button>
          </Link>
        </div>
      </div>
      <div className="mt-10">
        <div>
          <p className="text-white m-3 mt-4 uppercase flex justify-start items-center gap-2">
            <Link to={"/admin"} className="flex items-center gap-2">
              <span>
                <RiDashboardLine />
              </span>
              Dashboard
            </Link>
          </p>
        </div>
        <div>
          <p className="text-white m-3 mt-4 uppercase flex justify-start items-center gap-2">
            <span>
              <RiGroup2Line />
            </span>
            Member History
          </p>
          <Link
            to={"/all-members"}
            className="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 hover:bg-blue-500 hover:rounded-full"
          >
            All Members
          </Link>
          <Link
            to={"/register-user"}
            className="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 hover:bg-blue-500 hover:rounded-full"
          >
            {"Today's"} Registered User
          </Link>
        </div>
        <div>
          <p className="text-white m-3 mt-4 uppercase flex justify-start items-center gap-2">
            <span>
              <RiWallet2Line />
            </span>
            Withdrawl Report
          </p>
          <Link
            to={"/withdrawl-request"}
            className="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 hover:bg-blue-500 hover:rounded-full"
          >
            Withdrwal Request
          </Link>
          <Link
            to={"/withdrawl-history"}
            className="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 hover:bg-blue-500 hover:rounded-full"
          >
            Withdrawl History
          </Link>
        </div>
        <div>
          <p className="text-white m-3 mt-4 uppercase flex justify-start items-center gap-2">
            <span>
              <RiMacbookLine />
            </span>
            CMS
          </p>
          <Link
            to={"/announcements"}
            className="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 hover:bg-blue-500 hover:rounded-full"
          >
            Announcement
          </Link>
          <Link
            to={"/media-manager"}
            className="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 hover:bg-blue-500 hover:rounded-full"
          >
            Media Manager
          </Link>
        </div>
        <div>
          <p className="text-white m-3 mt-4 uppercase flex justify-start items-center gap-2">
            <span>
              <RiVerifiedBadgeLine />
            </span>
            Support
          </p>
          <Link
            to={"/pending-tasks"}
            className="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 hover:bg-blue-500 hover:rounded-full"
          >
            Pending Tickets
          </Link>
          <Link
            to={"/ticket-history"}
            className="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 hover:bg-blue-500 hover:rounded-full"
          >
            Ticket History
          </Link>
        </div>
        <div>
          <p className="text-white m-3 mt-4 uppercase flex justify-start items-center gap-2">
            <span>
              <RiSettings2Line />
            </span>
            Settings
          </p>
          <Link
            to={"/edit-profile"}
            className="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 hover:bg-blue-500 hover:rounded-full"
          >
            Edit Profile
          </Link>
          <Link
            to={"/general-settings"}
            className="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 hover:bg-blue-500 hover:rounded-full"
          >
            General Settings
          </Link>
          <Link
            to={"/manage-admin"}
            className="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 hover:bg-blue-500 hover:rounded-full"
          >
            Manage Admin
          </Link>
          <Link
            to={"/change-password"}
            className="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 hover:bg-blue-500 hover:rounded-full"
          >
            Change Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
