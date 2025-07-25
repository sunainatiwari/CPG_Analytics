import { useNavigate } from "react-router-dom";
import img1 from "../assets/homepage_image.jpg";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left side - image */}
        <div className="flex justify-center">
          <img
            src={img1}
            alt="Analytics Illustration"
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* Right side - text */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Unlocking Consumer Insights. <br />
            Driving Smarter Decisions.
          </h1>
          <p className="text-gray-600 mb-6">
            CPG Analytics is a powerful platform to explore consumer product
            trends, monitor sales performance, and make data-driven decisions
            across markets and categories.
          </p>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-5 py-3 bg-blue-900 text-white rounded-lg shadow-md hover:bg-blue-800 transition"
          >
            Enter Dashboard ↗
          </button>
        </div>
      </div>
    </div>
  );
}