import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between p-2 relative bg-blue-600 items-center">
      <Link to={"/"}>Dashboard</Link>
      <div className="flex gap-2">
        <Link to={"/"}>Company</Link>
        <Link to={"/"}>Logout</Link>
      </div>
    </div>
  );
};

export default Navbar;
