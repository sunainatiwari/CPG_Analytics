import { Link } from 'react-router-dom';
import { FaChartBar, FaCog, FaLightbulb, FaTachometerAlt, FaClipboardList } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-[#0d1b45] text-white h-full w-60 p-5">
      <h1 className="text-xl font-bold mb-6">CPG Analytics</h1>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="flex items-center gap-2 hover:bg-blue-800 p-2 rounded">
          <FaTachometerAlt /> Dashboard
        </Link>
        <Link to="/product-analysis" className="flex items-center gap-2 hover:bg-blue-800 p-2 rounded">
          <FaClipboardList /> Product Analysis
        </Link>
        <Link to="/market-insights" className="flex items-center gap-2 hover:bg-blue-800 p-2 rounded">
          <FaLightbulb /> Market Insights
        </Link>
        <Link to="/sales-reports" className="flex items-center gap-2 hover:bg-blue-800 p-2 rounded">
          <FaChartBar /> Sales Reports
        </Link>
        <Link to="/settings" className="flex items-center gap-2 hover:bg-blue-800 p-2 rounded">
          <FaCog /> Settings
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
