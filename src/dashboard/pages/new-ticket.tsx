import { Link } from "react-router-dom";

const NewTicket = () => {
  return (
    <div className="container mt-2">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fs-4 fw-semibold">Ticket ID: #19333</h2>
        <div className="d-flex gap-2 justify-content-end">
          <Link to={"/new-tickets"}>
            <button type="button" className="btn btn-primary rounded">
              New Tickets
            </button>
          </Link>
          <Link to={"/close-tickets"}>
            <button type="button" className="btn btn-secondary rounded">
              Closed Tickets
            </button>
          </Link>
          <Link to={"/all-tickets"}>
            <button type="button" className="btn btn-dark rounded">
              All Tickets
            </button>
          </Link>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-md-4">
              <strong>User ID</strong>
            </div>
            <div className="col-md-8">
              <Link to="#" className="text-primary">
                SIAS659449
              </Link>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <strong>Name & Mobile</strong>
            </div>
            <div className="col-md-8">
              Farida Bibi <br />
              Mobile: 9954374105
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <strong>Pending Payment</strong>
            </div>
            <div className="col-md-8">22-Oct-2024</div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <strong>Status</strong>
            </div>
            <div className="col-md-8">
              <span className="badge bg-info text-light fs-6">
                Customer Reply
              </span>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <strong>Message</strong>
            </div>
            <div className="col-md-8">
              Sir mera 3000 payment pending me hai please successful kar dijiye
              please
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <textarea
            className="form-control mb-3"
            placeholder="Write a reply..."
          ></textarea>
          <button type="button" className="btn btn-success">
            Send
          </button>
        </div>
      </div>

      <div className="mt-4">
        <strong>Farida Bibi :</strong> 22-Oct-2024 10:38 am
        <div className="bg-light p-3 rounded mt-2">
          Sir mera 3000 payment pending me hai please successful kar dijiye
          please
        </div>
      </div>
    </div>
  );
};

export default NewTicket;
