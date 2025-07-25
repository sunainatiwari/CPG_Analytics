import { useNavigate } from "react-router-dom";

export default function Settings() {

    const navigate = useNavigate();


    return (
        <>
            <div>Seetings here</div>
            <button
                onClick={() => navigate("/")}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                ← Go Back
            </button>
        </>
    )
}