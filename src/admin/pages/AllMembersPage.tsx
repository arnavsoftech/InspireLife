import Header from "../components/common/Header";

const AllMembersPage = () => {
  return (
    <div className="m-2 mt-10 text-white">
      <div className="flex justify-between items-center mt-4">
        <Header title="All Members" />
        <div className="space-x-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Active Members
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
            In-Active Members
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center border p-1 rounded-lg bg-gray-800">
        <div className="grid grid-cols-5 gap-2">
          <input
            type="text"
            placeholder="Name, Userid or Email id, Mobile"
            className="p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none"
          />
          <input
            type="text"
            placeholder="mm/dd/yyyy"
            className="p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none"
          />
          <input
            type="text"
            placeholder="mm/dd/yyyy"
            className="p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none"
          />
          <select className="p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none">
            <option>Select</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
          Search
        </button>
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="min-w-full bg-gray-800 text-white border border-gray-700">
          <thead>
            <tr className="bg-gray-700">
              <th className="px-4 py-2 border-b border-gray-600">Sl</th>
              <th className="px-4 py-2 border-b border-gray-600">Userinfo</th>
              <th className="px-4 py-2 border-b border-gray-600">Password</th>
              <th className="px-4 py-2 border-b border-gray-600">Sponsor Id</th>
              <th className="px-4 py-2 border-b border-gray-600">Plan</th>
              <th className="px-4 py-2 border-b border-gray-600">
                Current Cycle
              </th>
              <th className="px-4 py-2 border-b border-gray-600">
                Reg Date Activation Date
              </th>
              <th className="px-4 py-2 border-b border-gray-600">A/c Active</th>
              <th className="px-4 py-2 border-b border-gray-600">Payout</th>
              <th className="px-4 py-2 border-b border-gray-600">Option</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-600">
              <td className="px-4 py-2">1</td>
              <td className="px-4 py-2">
                <p>SUHIR KUMAR</p>
                <p>XW480164</p>
                <p>9334628120</p>
                <p>kamal.dhn1@gmail.com</p>
              </td>
              <td className="px-4 py-2">49175</td>
              <td className="px-4 py-2">XW000001</td>
              <td className="px-4 py-2">18</td>
              <td className="px-4 py-2">
                <span className="bg-blue-600 text-center px-2 py-1 rounded">
                  0
                </span>
              </td>
              <td className="px-4 py-2">
                23 Oct 2024 11:13 AM <br /> 23 Oct 2024 12:00 AM
              </td>
              <td className="px-4 py-2">
                <span className="bg-green-600 text-white px-2 py-1 rounded">
                  Active
                </span>
              </td>
              <td className="px-4 py-2">
                <span className="bg-green-600 text-white px-2 py-1 rounded">
                  ON
                </span>
              </td>
              <td className="px-4 py-2">
                <button className="bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded mr-2">
                  Login
                </button>
              </td>
            </tr>

            <tr className="border-b border-gray-600">
              <td className="px-4 py-2">2</td>
              <td className="px-4 py-2">
                <p>KAMAL KUMAR</p>
                <p>XW202831</p>
                <p>9334628120</p>
                <p>kamal.dhn1@gmail.com</p>
              </td>
              <td className="px-4 py-2">22277</td>
              <td className="px-4 py-2">XW000001</td>
              <td className="px-4 py-2">-1</td>
              <td className="px-4 py-2">
                <span className="bg-blue-600 text-center px-2 py-1 rounded">
                  0
                </span>
              </td>
              <td className="px-4 py-2">
                23 Oct 2024 11:11 AM <br /> 23 Oct 2024 12:00 AM
              </td>
              <td className="px-4 py-2">
                <span className="bg-red-600 text-white px-2 py-1 rounded">
                  In-Active
                </span>
              </td>
              <td className="px-4 py-2">
                <span className="bg-green-600 text-white px-2 py-1 rounded">
                  ON
                </span>
              </td>
              <td className="px-4 py-2">
                <button className="bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded mr-2">
                  Login
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-4">
        <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
      </div>
    </div>
  );
};

export default AllMembersPage;
