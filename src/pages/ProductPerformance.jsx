import { Navigate } from "react-router-dom";

export default function  ProductPerformance(){
  const navigate=useNavigate(); Navigate
    return(
        <> 
          <div> Product Performance </div>
          {/* Go Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        ← Go Back
      </button>
        </>
    )
}