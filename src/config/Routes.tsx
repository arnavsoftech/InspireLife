import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "../dashboard";
import Withdraw from "../dashboard/pages/withdraw";
import WithdrawHistory from "../dashboard/pages/withdraw-history";
import Members from "../dashboard/pages/members";
import Supports from "../dashboard/pages/supports";
import TopupAccounts from "../dashboard/pages/topup-accounts";
import EditProfile from "../dashboard/pages/edit-profile";
import ChangePassword from "../dashboard/pages/change-password";
import DepositeHistory from "../dashboard/pages/deposite-history";
import FundTransfer from "../dashboard/pages/fund-transfer";
import FundTransferHistory from "../dashboard/pages/fund-transfer-history";
import TopupHistory from "../dashboard/pages/topup-history";
import AdminDashboard from "../admin";
import AdminMembers from "../admin/pages/members";
import DashboardReport from "../dashboard/pages/dashboard-report";
import FundRequest from "../dashboard/pages/fund-request";
import PaymentReport from "../dashboard/pages/payment-report";
import Login from "../pages/login";
import Logout from "../pages/logout";
import Signup from "../pages/signup";
import MemberTree from "../dashboard/pages/member-tree";
import NewTicket from "../dashboard/pages/new-ticket";
import CloseTicket from "../dashboard/pages/close-ticket";
import AllTicket from "../dashboard/pages/all-ticket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "/dashboard", element: <DashboardReport /> },
      { path: "members", element: <Members /> },
      { path: "topup-account", element: <TopupAccounts /> },
      { path: "topup-history", element: <TopupHistory /> },
      { path: "edit-profile", element: <EditProfile /> },
      { path: "change-password", element: <ChangePassword /> },
      { path: "fund-request", element: <FundRequest /> },
      { path: "deposite-history", element: <DepositeHistory /> },
      { path: "fund-transfer", element: <FundTransfer /> },
      { path: "fund-transfer-history", element: <FundTransferHistory /> },
      {
        path: "direct-members",
        element: <Members title="Direct Members" users="direct" />,
      },
      {
        path: "my-downline",
        element: <Members title="My Downline" users="downline" />,
      },
      {
        path: "level-members",
        element: <Members title="Level Members" users="level" />,
      },
      { path: "payment-report", element: <PaymentReport /> },
      { path: "payment-report/:tab", element: <PaymentReport /> },
      { path: "withdraw", element: <Withdraw /> },
      { path: "withdraw-history", element: <WithdrawHistory /> },
      { path: "supports", element: <Supports /> },
      { path: "member-tree", element: <MemberTree /> },
      { path: "new-ticket", element: <NewTicket /> },
      { path: "close-ticket", element: <CloseTicket /> },
      { path: "all-ticket", element: <AllTicket /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
    children: [{ path: "teams", element: <AdminMembers /> }],
  },
]);

export default function WebRouter() {
  return <RouterProvider router={router} />;
}
