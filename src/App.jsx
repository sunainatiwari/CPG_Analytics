import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

import Dashboard from './pages/Dashboard';
import ProductAnalysis from './pages/ProductAnalysis';
import MarketInsights from './pages/MarketInsights';
import SalesReports from './pages/SalesReports';
import ProductPerformance from './pages/ProductPerformance';
import SalesTrends from './pages/SalesTrends';
import MarketShare from './pages/MarketShare';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 overflow-y-auto">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/product-analysis" element={<ProductAnalysis />} />
            <Route path="/market-insights" element={<MarketInsights />} />
            <Route path="/sales-reports" element={<SalesReports />} />
            <Route path="/product-performance" element={<ProductPerformance />} />
            <Route path="/sales-trends" element={<SalesTrends />} />
            <Route path="/market-share" element={<MarketShare />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
