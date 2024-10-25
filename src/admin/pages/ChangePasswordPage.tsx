import Header from "../components/common/Header";

const ChangePasswordPage = () => {
  return (
    <div className="mt-4">
      <Header title="Change Password" />
      <div className="p-4 border rounded shadow-lg">
        <div className="d-flex justify-content-center">
          <form className="w-100">
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Enter your old password"
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="New Password"
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
              />
            </div>

            <div className="d-flex justify-content-between gap-2">
              <button type="submit" className="btn btn-primary w-100 fw-bold">
                Submit
              </button>
              <button type="button" className="btn btn-secondary w-100 fw-bold">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
