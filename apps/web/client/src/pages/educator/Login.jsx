import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import { toast } from "sonner";
import { useState } from "react";
import { validateEmail } from "../../lib/utils";
import { useAuthStore } from "../../store/auth";
import { ROLES } from "../../constants";

function EducatorLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useAuthStore((state) => state.login);
  const submitForm = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }
    if (email === "" || password === "") {
      toast.error("Please fill in all fields");
      return;
    }
    login({ email, password }, ROLES.EDUCATOR);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen text-secondary">
        <div className="flex items-center justify-center py-4">
          <Logo />
        </div>
        <div className="max-w-4xl px-6 py-4 mx-auto rounded font-grotesk">
          <div>
            <h1 className="max-w-lg text-2xl text-center">
              Sign in to your account to continue teaching
            </h1>
          </div>
          <div className="py-4">
            <form className="space-y-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="email">E-mail address</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="px-4 py-2 border-2 border-gray-200 rounded outline-none"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-4 py-2 border-2 border-gray-200 rounded outline-none"
                  type="password"
                />
              </div>
              <div>
                <button
                  onClick={(e) => submitForm(e)}
                  className="w-full px-4 py-2 rounded hover:bg-primary-hover bg-primary"
                >
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
          <Link to="/educator/signup" className="font-bold text-premium">
            click here
          </Link>{" "}
          to create your free account.
        </div>
      </div>
    </>
  );
}

export default EducatorLogin;
