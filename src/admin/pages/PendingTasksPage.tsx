import Header from "../components/common/Header";

const PendingTasksPage = () => {
  return (
    <div className="m-2 mt-10">
      <Header title="Pending Tickets" />
      <div className="overflow-x-auto">
        <div className="flex justify-between items-center bg-gray-800 text-white px-4 py-2">
          <div className="flex items-center">
            <label htmlFor="entries" className="mr-2">
              Show
            </label>
            <select
              id="entries"
              className="bg-gray-700 text-white p-2 rounded focus:outline-none"
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <span className="ml-2">entries</span>
          </div>
          <div>
            <label htmlFor="search" className="mr-2">
              Search:
            </label>
            <input
              id="search"
              type="text"
              placeholder="Search"
              className="p-2 rounded bg-gray-700 text-white focus:outline-none"
            />
          </div>
        </div>

        <table className="min-w-full table-auto text-white bg-gray-800 mt-4">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Subject</th>
              <th className="px-4 py-2">User Information</th>
              <th className="px-4 py-2">Last Updated</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2 text-center" colSpan="10">
                No data available in table
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-between items-center bg-gray-800 text-white px-4 py-2">
          <span>Showing 0 to 0 of 0 entries</span>
          <div className="flex items-center">
            <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-1 px-3 rounded-l">
              Previous
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-1 px-3 rounded-r">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingTasksPage;
