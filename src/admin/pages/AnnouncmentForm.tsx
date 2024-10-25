import Header from "../components/common/Header";

const AnnouncmentForm = () => {
  return (
    <div className="container mt-5 text-white">
      <Header title="Announcement Form" />
      <div className="mt-4 border p-4 rounded bg-dark">
        <div className="row g-3">
          <div className="col-12 d-flex align-items-center">
            <label className="col-form-label me-3 w-25">Post Title</label>
            <input
              type="text"
              placeholder="Post Title"
              className="form-control"
            />
          </div>

          <div className="col-12 d-flex align-items-start">
            <label className="col-form-label me-3 w-25 mt-2">Description</label>
            <div className="w-100">
              <div className="p-2 bg-light border rounded">
                <textarea
                  className="form-control"
                  placeholder="Write your description here..."
                  rows="5"
                />
              </div>
            </div>
          </div>

          <div className="col-12 d-flex align-items-center">
            <label className="col-form-label me-3 w-25">Featured Image</label>
            <input type="file" className="form-control" />
          </div>

          <div className="col-12 d-flex align-items-center">
            <label className="col-form-label me-3 w-25">Status</label>
            <select className="form-select">
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="col-12 d-flex justify-content-end mt-4">
            <button className="btn btn-primary me-2">Save</button>
            <button className="btn btn-secondary">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncmentForm;
