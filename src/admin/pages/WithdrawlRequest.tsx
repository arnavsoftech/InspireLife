import Header from "../components/common/Header";

const WithdrawlRequest = () => {
  return (
    <div className="container my-4">
      <Header title="Withdrawal Request" />

      <div className="table-responsive">
        <div className="d-flex justify-content-between align-items-center bg-dark text-white px-3 py-2">
          <div className="d-flex align-items-center">
            <label htmlFor="entries" className="me-2">
              Show
            </label>
            <select
              id="entries"
              className="form-select form-select-sm bg-secondary text-white"
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
            />
          </div>
        </div>

        <table className="table table-striped table-dark mt-3">
          <thead>
            <tr>
              <th scope="col">Sl</th>
              <th scope="col">Amount</th>
              <th scope="col">Coin</th>
              <th scope="col">User Id</th>
              <th scope="col">Name & Details</th>
              <th scope="col">Address</th>
              <th scope="col">Date & Time</th>
              <th scope="col">Mobile</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center" colSpan="10">
                No data available in table
              </td>
            </tr>
          </tbody>
        </table>

        <div className="d-flex justify-content-between align-items-center bg-dark text-white px-3 py-2">
          <span>Showing 0 to 0 of 0 entries</span>
          <div className="btn-group">
            <button className="btn btn-secondary btn-sm">Previous</button>
            <button className="btn btn-secondary btn-sm">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawlRequest;
