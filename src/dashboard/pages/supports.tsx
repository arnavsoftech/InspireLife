import { Link } from "react-router-dom";

const supports = () => {
  return (
    <div className="p-8">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fs-4 fw-semibold">Supports Enquiry</h2>
        <div className="d-flex gap-2 justify-content-end">
          <Link to={"/dashboard/new-ticket"}>
            <button type="button" className="btn btn-primary rounded">
              New Tickets
            </button>
          </Link>
          <Link to={"/dashboard/close-ticket"}>
            <button type="button" className="btn btn-secondary rounded">
              Closed Tickets
            </button>
          </Link>
          <Link to={"/dashboard/all-ticket"}>
            <button type="button" className="btn btn-dark rounded">
              All Tickets
            </button>
          </Link>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center gap-2">
          <span>Show</span>
          <select className="form-select form-select-sm border px-6 py-2 rounded">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          <span>entries</span>
        </div>

        <div className="position-relative">
          <input
            type="text"
            className="form-control border px-4 py-2 rounded"
            placeholder="Search..."
          />
        </div>
      </div>

      <table className="table table-bordered table-hover bg-white">
        <thead className="table-light">
          <tr>
            <th className="px-6 py-3 text-left text-sm fw-medium text-muted">
              #Id
            </th>
            <th className="px-6 py-3 text-left text-sm fw-medium text-muted">
              Subject
            </th>
            <th className="px-6 py-3 text-left text-sm fw-medium text-muted">
              User Information
            </th>
            <th className="px-6 py-3 text-left text-sm fw-medium text-muted">
              Mobile
            </th>
            <th className="px-6 py-3 text-left text-sm fw-medium text-muted">
              Last updated
            </th>
            <th className="px-6 py-3 text-left text-sm fw-medium text-muted">
              Status
            </th>
            <th className="px-6 py-3 text-left text-sm fw-medium text-muted">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-6 py-4 bg-sky-500">#1</td>
            <td className="px-6 py-4">Mobile number change</td>
            <td className="px-6 py-4">SAMSUNNEHAR BIBI Username: SIWB320912</td>
            <td className="px-6 py-4">7407954424</td>
            <td className="px-6 py-4">16-07-24 11:39 AM</td>
            <td className="px-6 py-4">
              <span className="badge bg-primary p-2 fs-6">Admin Reply</span>
            </td>
            <td className="px-6 py-4">
              <button className="btn btn-danger btn-sm rounded">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default supports;
