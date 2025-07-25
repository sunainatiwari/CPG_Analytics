import { useNavigate } from 'react-router-dom';

export default function MarketShare(){
    const navigate=useNavigate();
    return(
    <>
     <div>Market share here</div>
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