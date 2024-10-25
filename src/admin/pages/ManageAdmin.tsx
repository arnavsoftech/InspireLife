import { RiAddBoxLine } from "@remixicon/react";
import Header from "../components/common/Header";

const ManageAdmin = () => {
  return (
    <div className="m-2 mt-10">
      <div className="flex justify-between mb-4">
        <Header title="Manage Admin" />
        <button className="flex gap-1 items-center justify-center bg-blue-500 px-1 rounded">
          <RiAddBoxLine size={20} />
          Add new User
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 text-white">
          <thead>
            <tr className="bg-gray-700 text-left">
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Full name</th>
              <th className="py-3 px-4">Username</th>
              <th className="py-3 px-4">Password</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-600">
              <td className="py-3 px-4">#1</td>
              <td className="py-3 px-4">XNOVA World</td>
              <td className="py-3 px-4">admin</td>
              <td className="py-3 px-4">hello@123</td>
              <td className="py-3 px-4">A</td>
              <td className="py-3 px-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded mr-2">
                  <i className="fas fa-edit"></i> Edit
                </button>
                <button className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded">
                  <i className="fas fa-trash"></i> Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAdmin;
