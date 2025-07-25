import { useNavigate } from 'react-router-dom';

export default function ProductAnalysis() {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold">Product Analysis Page</h1>
      
      {/* Go Back Button */}
      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        ← Go Back
      </button>
    </div>
  );
}
