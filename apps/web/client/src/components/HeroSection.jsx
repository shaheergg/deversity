import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen max-w-4xl mx-auto space-y-5 text-center">
      <h1 className="text-5xl font-grotesk">
        Welcome to Deversity: Innovate Technology, Empower Learning & Unleash
        Potential
      </h1>
      <p className="text-lg text-gray-700 font-grotesk">
        Discover the future of education with Devesity, where cutting-edge
        technology meets personalized learning experiences. Revolutionize the
        way you teach and learn, with intuitive tools designed to inspire
        curiosity and foster growth. Join us in shaping the next generation of
        learners today.
      </p>
      <div className="flex items-center gap-4 space-x-4">
        <Link className="flex items-center gap-2 px-4 py-2 text-sm font-semibold border-2 rounded font-grotesk hover:bg-primary-hover border-primary bg-primary text-secondary">
          Start your journey
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={18}
            height={18}
            color={"currentColor"}
            fill={"none"}
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M16 12L8 12M16 12C16 12.7002 14.0057 14.0085 13.5 14.5M16 12C16 11.2998 14.0057 9.99153 13.5 9.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <Link className="px-4 py-2 text-sm font-semibold border-2 rounded font-grotesk hover:bg-gray-100 border-secondary text-secondary">
          For Educators
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
