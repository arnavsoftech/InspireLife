import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronCompactDown,
  ChevronCompactUp,
  DashSquareDotted,
  ListCheck,
  People,
  PersonBadge,
  PersonPlus,
  Wallet,
  Wallet2,
} from "react-bootstrap-icons";

const items = [
  {
    label: "Dashboard",
    icon: <DashSquareDotted />,
    submenu: [],
    href: "/",
  },
  {
    label: "Account Topup",
    icon: <PersonPlus />,
    isOpen: false,
    submenu: [
      {
        label: "Topup Account",
        href: "/topup-account",
      },
      {
        label: "Topup History",
        href: "/topup-history",
      },
    ],
  },
  {
    label: "Profile",
    icon: <PersonBadge />,
    isOpen: false,
    submenu: [
      {
        label: "Edit Profile",
        href: "/edit-profile",
      },
      {
        label: "Change Password",
        href: "/change-password",
      },
    ],
  },
  {
    label: "Fund Management",
    icon: <Wallet />,
    isOpen: false,
    submenu: [
      {
        label: "Deposit Fund",
        href: "/fund-request",
      },
      {
        label: "Deposite History",
        href: "/deposite-history",
      },
      {
        label: "Fund Transfer",
        href: "/fund-transfer",
      },
      {
        label: "Fund Transfer History",
        href: "/fund-transfer-history",
      },
    ],
  },
  {
    label: "Teams",
    icon: <People />,
    isOpen: false,
    submenu: [
      {
        label: "My Direct Members",
        href: "/direct-members",
      },
      {
        label: "My Downline",
        href: "/my-downline",
      },
      {
        label: "Level Members",
        href: "/level-members",
      },
      {
        label: "Member Tree",
        href: "/member-tree",
      },
    ],
  },
  {
    label: "Income Report",
    icon: <Wallet2 />,
    isOpen: false,
    submenu: [
      {
        label: "Retail Income",
        href: "/payment-report/direct",
      },
      {
        label: "Matching Income",
        href: "/payment-report/level",
      },
      {
        label: "Level Income",
        href: "/payment-report/roi",
      },
      {
        label: "Rank Rewards",
        href: "/payment-report",
      },
      {
        label: "Family club fund",
        href: "/payment-report",
      },
      {
        label: "Bonaza Weekly",
        href: "/payment-report",
      },
    ],
  },
  {
    label: "Fund Withdraw",
    icon: <Wallet2 />,
    isOpen: false,
    submenu: [
      {
        label: "Withdraw Request",
        href: "/withdraw",
      },
      {
        label: "Withdraw History",
        href: "/withdraw-history",
      },
    ],
  },
  {
    label: "Help & Support",
    icon: <ListCheck />,
    submenu: [],
    href: "/supports",
  },
];

function Sidebar() {
  const [menus, setMenus] = useState(items);
  const [clicked, setClicked] = useState(false);

  const subMenu = (items: string[], isOpen: boolean) => {
    return (
      <ul className={isOpen ? "open" : "close"}>
        {items.map((item: any, sub: any) => (
          <li key={"smenu" + sub}>
            <Link to={`/dashboard${item.href}`}>{item.label}</Link>
          </li>
        ))}
      </ul>
    );
  };

  const expandMenu = (indx: number) => {
    menus.map((item) => (item.isOpen = false));
    menus[indx].isOpen = !menus[indx].isOpen;
    setMenus(menus);
    setClicked(!clicked);
  };

  return (
    <div
      id="sidebar"
      className="animated bounceInDown navbar-nav sidebar accordion side"
    >
      <div>
        <div className="d-flex align-items-center justify-content-center p-2">
          <img
            alt="User"
            width={48}
            height={48}
            src={"/img/user.jpg"}
            className="rounded-1"
          />
        </div>
        <ul className="sidebar-menu">
          {menus.map((item: any, index) => (
            <li key={"menu" + index}>
              <Link
                onClick={() => expandMenu(index)}
                to={item.href == undefined ? "#" : `/dashboard${item.href}`}
              >
                {item.icon}
                {item.label}
                <span>
                  {item.submenu.length ? (
                    item.isOpen ? (
                      <ChevronCompactUp />
                    ) : (
                      <ChevronCompactDown />
                    )
                  ) : null}
                </span>
              </Link>
              {item.submenu.length > 0 && subMenu(item.submenu, item.isOpen)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
