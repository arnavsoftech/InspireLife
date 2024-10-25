import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { AppConfig } from "../config/Appconfig";
import axios from "axios";
import { Restapi } from "../config/Restapi";

type SponsorInfo = {
  first_name: string;
  last_name: string;
};

function Signup() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email_id: "",
    mobile: "",
    position: "0",
    sponsor: "",
    placement: "",
  });

  const [loading, setLoading] = useState(false);
  const [errmsg, setErrmsg] = useState({ message: "", variant: "" });
  const [sponsor, setSponsor] = useState<null | SponsorInfo>(null);
  const [user, setUser] = useState({
    id: 0,
    first_name: "",
    last_name: "",
    username: "",
    passwd: "",
  });
  const [isCreated, setIsCreated] = useState(false);
  const [searching, setSearching] = useState(false);
  const [search] = useSearchParams();
  const ref = search.get("ref");

  useEffect(() => {
    if (typeof ref == "string") {
      setForm({ ...form, sponsor: ref, placement: ref });
    }
    actionValidate();
  }, []);

  const actionSignup = () => {
    if (
      form.first_name == "" ||
      form.last_name == "" ||
      form.email_id == "" ||
      form.mobile == "" ||
      form.sponsor == "" ||
      form.placement == ""
    ) {
      setErrmsg({ message: "Please fill all details", variant: "danger" });
      return;
    }
    setLoading(true);
    setErrmsg({ ...errmsg, message: "" });
    let url = AppConfig.API_URL + "signup";
    axios
      .post(url, form)
      .then((result) => {
        let resp: Restapi = result.data;
        if (resp.success) {
          setIsCreated(true);
          setUser(resp.data);
        } else {
          setErrmsg({ message: resp.message, variant: "danger" });
        }
      })
      .finally(() => setLoading(false));
  };

  const actionValidate = async () => {
    if (form.sponsor == "") return;
    setErrmsg({ ...errmsg, message: "" });
    setSearching(true);
    let url = AppConfig.API_URL + "userinfo";
    axios
      .post(url, { username: form.placement })
      .then((result) => {
        let resp: Restapi = result.data;
        if (resp.success) {
          setErrmsg({ message: resp.message, variant: "success" });
          setSponsor(resp.data);
        } else {
          setErrmsg({ message: resp.message, variant: "danger" });
          setSponsor(null);
        }
      })
      .finally(() => setSearching(false));
  };

  if (isCreated) {
    return (
      <div className="container">
        <div className="row pt-5">
          <div className="col-sm-6 m-auto">
            <div className="text-center mb-4">
              <img src="/img/logo-main.png" width={240} />
            </div>
            {errmsg.message.length > 0 && (
              <div className={"alert alert-" + errmsg.variant}>
                {errmsg.message}
              </div>
            )}
            <div className="card mb-2 border-0 shadow-sm">
              <div className="card-body">
                <div className="text-center">
                  <img
                    src={"/img/success.png"}
                    width={200}
                    className="img-fluid"
                  />
                  <h6 className="text-success">
                    Congratulation!! Your account has been created with
                    Easyloan.
                  </h6>
                </div>
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>{user.first_name + " " + user.last_name}</td>
                    </tr>
                    <tr>
                      <td>Userid</td>
                      <td>{user.username}</td>
                    </tr>
                    <tr>
                      <td>Password</td>
                      <td>{user.passwd}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="card border-0 shadow-sm">
              <button
                onClick={() => {
                  setIsCreated(false);
                  setForm({
                    ...form,
                    first_name: "",
                    last_name: "",
                    email_id: "",
                    mobile: "",
                    position: "0",
                  });
                }}
                className="btn btn-primary"
              >
                Create new account
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-sm-6 m-auto">
          <div className="text-center mb-4">
            <img src="/img/logo-main.png" width={240} />
          </div>
          {errmsg.message.length > 0 && (
            <div className={"alert alert-" + errmsg.variant}>
              {errmsg.message}
            </div>
          )}
          <div className="card mb-2 border-0 shadow-sm">
            <div className="pt-3">
              <h4 className="text-center">Create an account</h4>
            </div>
            <div className="card-body">
              <div className="mb-2">
                <label>
                  Associate Id <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  value={form.sponsor}
                  onChange={(ev) =>
                    setForm({ ...form, sponsor: ev.target.value })
                  }
                  className="form-control text-uppercase"
                />
              </div>
              <div className="mb-2">
                <label>
                  Placement Id <span className="text-danger">*</span>
                </label>
                <div className="d-flex gap-2">
                  <input
                    type="text"
                    value={form.placement}
                    onChange={(ev) =>
                      setForm({ ...form, placement: ev.target.value })
                    }
                    className="form-control text-uppercase"
                  />

                  <button
                    disabled={searching}
                    onClick={actionValidate}
                    className="btn btn-primary"
                  >
                    {searching ? "Searching..." : "Verify"}
                  </button>
                </div>
                {sponsor != null && (
                  <div className="badge bg-success">
                    {sponsor.first_name + " " + sponsor.last_name}
                  </div>
                )}
              </div>
              <div className="mb-2 row">
                <div className="col-sm-6">
                  <label>
                    First name <span className="text-danger">*</span>{" "}
                  </label>
                  <input
                    value={form.first_name}
                    onChange={(ev) =>
                      setForm({ ...form, first_name: ev.target.value })
                    }
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="col-sm-6">
                  <label>Last name</label>
                  <input
                    value={form.last_name}
                    onChange={(ev) =>
                      setForm({ ...form, last_name: ev.target.value })
                    }
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="mb-2 row">
                <div className="col-sm-6">
                  <label>
                    Mobile no <span className="text-danger">*</span>
                  </label>
                  <input
                    value={form.mobile}
                    onChange={(ev) =>
                      setForm({ ...form, mobile: ev.target.value })
                    }
                    type="tel"
                    minLength={8}
                    maxLength={12}
                    className="form-control"
                  />
                </div>
                <div className="col-sm-6">
                  <label>Email address</label>
                  <input
                    value={form.email_id}
                    onChange={(ev) =>
                      setForm({ ...form, email_id: ev.target.value })
                    }
                    type="email"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="mb-2 row align-items-center">
                <div className="col-sm-6">
                  <label>
                    Position <span className="text-danger">*</span>
                  </label>
                  <select
                    value={form.position}
                    onChange={(ev) =>
                      setForm({ ...form, position: ev.target.value })
                    }
                    className="form-select"
                  >
                    <option value="0">Select</option>
                    <option value="1">LEFT</option>
                    <option value="2">RIGHT</option>
                  </select>
                </div>
              </div>
              <div className="d-flex forget-passwd terms">
                <label className="checkbox">
                  <input
                    checked
                    disabled
                    type="checkbox"
                    value="1"
                    name="policy"
                  />
                  I accept all{" "}
                  <a target="_blank" href="#" className="text-primary">
                    terms and policy
                  </a>
                </label>
              </div>
              <div className="p-4 text-center">
                <button
                  disabled={loading}
                  onClick={actionSignup}
                  className="btn btn-primary"
                >
                  {loading ? "Please wait..." : "Create account"}
                </button>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm">
            <div className="card-body">
              Already have an account? <Link to={"/login"}>Click here</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
