import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const statCards = [
    { title: "Total Sales", value: "$1,200,000" },
    { title: "Top Category", value: "Coffee" },
    { title: "Top Brand", value: "Nescafe" },
    { title: "Units Sold", value: "520,000" },
    { title: "Top Region", value: "Europe" },
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Filter Dropdowns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <select className="border p-2 rounded shadow-sm w-full">
          <option>Date range</option>
          <option>Last 7 days</option>
          <option>Last 30 days</option>
        </select>
        <select className="border p-2 rounded shadow-sm w-full">
          <option>Category</option>
          <option>Coffee</option>
          <option>Tea</option>
        </select>
        <select className="border p-2 rounded shadow-sm w-full">
          <option>Brand</option>
          <option>Nescafe</option>
          <option>Tata</option>
        </select>
        <select className="border p-2 rounded shadow-sm w-full">
          <option>Sales Channel</option>
          <option>Retail</option>
          <option>Online</option>
        </select>
        <select className="border p-2 rounded shadow-sm w-full">
          <option>Region</option>
          <option>Europe</option>
          <option>Asia</option>
        </select>
      </div>

      {/* KPI Metric Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {statCards.map((card, index) => (
          <div
            key={index}
            className="bg-blue-200 text-gray-900 font-semibold p-4 rounded-md shadow text-center"
          >
            <p className="text-sm">{card.title}</p>
            <p className="text-lg">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Dashboard Action Cards  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          onClick={() => navigate('/sales-trends')}
          className="cursor-pointer bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl text-center"
        >
          <p className="text-xl font-semibold">📈 Sales Trends</p>
        </div>
        <div
          onClick={() => navigate('/market-share')}
          className="cursor-pointer bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl text-center"
        >
          <p className="text-xl font-semibold">📊 Market Share</p>
        </div>
        <div
          onClick={() => navigate('/product-performance')}
          className="cursor-pointer bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl text-center"
        >
          <p className="text-xl font-semibold">📉 Product Performance</p>
        </div>
      </div>

      {/* Go back to homepage button */}
      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        ← Go Back
      </button>
    </div>
  );
};

export default Dashboard;
