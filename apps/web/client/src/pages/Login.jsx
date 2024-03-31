import { Link } from "react-router-dom";
import Logo from "../components/Logo";

function Login() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen text-secondary">
        <div className="flex items-center justify-center py-4">
          <Logo />
        </div>
        <div className="max-w-4xl px-6 py-4 mx-auto rounded font-grotesk">
          <div>
            <h1 className="max-w-lg text-2xl text-center">
              Sign in to your account to continue learning
            </h1>
          </div>
          <div className="py-4">
            <form className="space-y-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="email">E-mail address</label>
                <input
                  className="px-4 py-2 border-2 border-gray-200 rounded outline-none"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Password</label>
                <input
                  className="px-4 py-2 border-2 border-gray-200 rounded outline-none"
                  type="password"
                />
              </div>
              <div>
                <button className="w-full px-4 py-2 rounded hover:bg-primary-hover bg-primary">
                  Sign in
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <a href="/" className="font-bold text-premium">
                    Need help?
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-[40%] px-6 py-6 mt-4 text-center rounded">
          Or{" "}
          <Link to="/signup" className="font-bold text-premium">
            click here
          </Link>{" "}
          to create your freen account.
        </div>
      </div>
    </>
  );
}

export default Login;
