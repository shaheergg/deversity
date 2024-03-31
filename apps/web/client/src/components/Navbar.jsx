import Logo from "./Logo";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="fixed top-0 flex items-center justify-between w-full px-4 py-3 bg-white border-b">
      <div>
        <Logo />
      </div>
      <div className="space-x-2">
        <Link
          to="/courses"
          className="px-4 py-2 font-sans text-sm rounded cursor-pointer hover:bg-gray-100"
        >
          Courses
        </Link>

        <Link
          to="/courses"
          className="px-4 py-2 font-sans text-sm rounded cursor-pointer hover:bg-gray-100"
        >
          For Educators
        </Link>
      </div>
      <div className="flex gap-4">
        <Link
          to="/login"
          className="px-4 py-1.5 hover:border-brand-green text-sm border-2 rounded border-secondary"
        >
          Sign in
        </Link>
        <Link
          to="/signup"
          className="px-4 py-1.5 hover:bg-secondary/70 hover:border-secondary/70 text-sm text-white border rounded border-secondary bg-secondary"
        >
          Get started
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
