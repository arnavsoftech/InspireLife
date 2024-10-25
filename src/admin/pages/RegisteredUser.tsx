import Header from "../components/common/Header";

const RegisteredUser = () => {
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
            <option>Join Date</option>
            <option>Activation Date</option>
          </select>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
          Search
        </button>
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="min-w-full bg-gray-800 text-white border border-gray-700">
          <thead className="w-full">
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
        </table>
      </div>
    </div>
  );
};

export default RegisteredUser;
