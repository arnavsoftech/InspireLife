import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <section className="vh-100 d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-5 col-md-6">
            <h2 className="text-center fs-3 fw-bold text-primary mt-4 mb-2">
              Welcome, back
            </h2>
            <p className="text-center text-white mb-4">
              Don't have an account?{" "}
              <Link
                to="/sign-up"
                className="fw-medium text-primary text-decoration-underline"
              >
                Sign Up
              </Link>
            </p>
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-primary">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control border-primary bg-transparent text-primary"
                  placeholder="Enter your email"
                  id="email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label text-primary">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control border-primary bg-transparent text-primary"
                  placeholder="Enter your Password"
                  id="password"
                />
              </div>
              <button className="btn btn-primary w-100 py-2 fw-semibold">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
