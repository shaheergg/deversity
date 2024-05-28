import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";

let tabs = [
  { id: "overview", label: "Overview", link: "/admin/dashboard" },
  { id: "courses", label: "Courses", link: "/admin/courses" },
  { id: "users", label: "Users", link: "/admin/users" },
  {
    id: "verifications",
    label: "Verifications",
    link: "/admin/verifications",
  },
  { id: "logs", label: "Activity Logs", link: "/admin/logs" },
];

function AnimatedTabs({ id }) {
  return (
    <div className="flex space-x-1 font-sans">
      {tabs.map((tab) => (
        <Link
          to={tab.link}
          key={tab.id}
          className={`${
            id === tab.id
              ? "text-black bg-neutral-100"
              : "hover:text-black text-neutral-600"
          } relative rounded-md px-3 py-1.5 text-sm font-medium text-black outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {id === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-transparent rounded-md mix-blend-difference"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </Link>
      ))}
    </div>
  );
}

export default AnimatedTabs;
