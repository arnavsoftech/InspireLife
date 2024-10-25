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
// import AdminMembers from "../admin/pages/members";
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
// import AllMembersPage from "../admin/pages/AllMembersPage";
// import RegisteredUser from "../admin/pages/RegisteredUser";
// import WithdrawlRequest from "../admin/pages/WithdrawlRequest";
// import WithdrawlHistory from "../admin/pages/WithdrawlHistory";
// import AnnouncmentPage from "../admin/pages/AnnouncmentPage";
// import MediaManagerPage from "../admin/pages/MediaManagerPage";
// import PendingTasksPage from "../admin/pages/PendingTasksPage";
// import TicketHistoryPage from "../admin/pages/TicketHistoryPage";
// import EditProfilePage from "../admin/pages/EditProfilePage";
// import GeneralSettingsPage from "../admin/pages/GeneralSettingsPage";
// import ManageAdmin from "../admin/pages/ManageAdmin";
// import ChangePasswordPage from "../admin/pages/ChangePasswordPage";
// import UploadMediaManager from "../admin/pages/UploadMediaManager";
// import AnnouncmentForm from "../admin/pages/AnnouncmentForm";
// import SignUpPage from "../admin/pages/SignUpPage";
// import SignInPage from "../admin/pages/SignInPage";

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
    // children: [
    // { path: "teams", element: <AdminMembers /> },
    // { path: "/admin-signup", element: <SignUpPage /> },
    // { path: "/admin-login", element: <SignInPage /> },
    // { path: "/register-user", element: <RegisteredUser /> },
    // { path: "/withdrawl-request", element: <WithdrawlRequest /> },
    // { path: "/withdrawl-history", element: <WithdrawlHistory /> },
    // { path: "/announcements", element: <AnnouncmentPage /> },
    // { path: "/media-manager", element: <MediaManagerPage /> },
    // { path: "/pending-tasks", element: <PendingTasksPage /> },
    // { path: "/ticket-history", element: <TicketHistoryPage /> },
    // { path: "/edit-profile", element: <EditProfilePage /> },
    // { path: "/general-settings", element: <GeneralSettingsPage /> },
    // { path: "/manage-admin", element: <ManageAdmin /> },
    // { path: "/change-password", element: <ChangePasswordPage /> },
    // { path: "/add-announcment", element: <AnnouncmentForm /> },
    // { path: "/upload-media", element: <UploadMediaManager /> },
    // ],
  },
]);

export default function WebRouter() {
  return <RouterProvider router={router} />;
}
