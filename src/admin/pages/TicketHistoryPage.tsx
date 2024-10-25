import Header from "../components/common/Header";

const TicketHistoryPage = () => {
  return (
    <div className="mt-4">
      <Header title="Ticket History" />
      <div className="table-responsive">
        <div className="d-flex justify-content-between align-items-center bg-dark text-white p-3">
          <div className="d-flex align-items-center">
            <label htmlFor="entries" className="me-2">
              Show
            </label>
            <select
              id="entries"
              className="form-select form-select-sm bg-secondary text-white"
              style={{ width: "75px" }}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <span className="ms-2">entries</span>
          </div>
          <div>
            <label htmlFor="search" className="me-2">
              Search:
            </label>
            <input
              id="search"
              type="text"
              placeholder="Search"
              className="form-control form-control-sm bg-secondary text-white"
              style={{ width: "200px" }}
            />
          </div>
        </div>

        <table className="table table-dark table-hover mt-3">
          <thead className="bg-secondary">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Subject</th>
              <th scope="col">User Information</th>
              <th scope="col">Last Updated</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center" colSpan="5">
                No data available in table
              </td>
            </tr>
          </tbody>
        </table>

        <div className="d-flex justify-content-between align-items-center bg-dark text-white p-3">
          <span>Showing 0 to 0 of 0 entries</span>
          <div className="d-flex align-items-center">
            <button className="btn btn-secondary me-2">Previous</button>
            <button className="btn btn-secondary">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketHistoryPage;
