import { useNavigate } from "react-router-dom"

export default function SalesReports(){
   const navigate=useNavigate();
    return(
        <> 
          <div>sales SalesReports</div>
          {/* Go Back Button */}
      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        ← Go Back
      </button>
        </>
    )
}