import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Users,
  Package,
  Target,
  ClipboardList,
  LayoutDashboard,
  UserCog,
} from "lucide-react";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Campaigns from "./pages/Campaigns";
import Orders from "./pages/Orders";
import Supervisor from "./pages/Supervisor";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex">
        {/* Sidebar */}
        <nav className="w-64 bg-white border-r border-gray-200 p-4">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Sales CRM</h1>
          </div>
          <div className="space-y-2">
            <NavLink to="/" icon={<LayoutDashboard size={20} />}>
              Dashboard
            </NavLink>
            <NavLink to="/products" icon={<Package size={20} />}>
              Products
            </NavLink>
            <NavLink to="/customers" icon={<Users size={20} />}>
              Customers
            </NavLink>
            <NavLink to="/campaigns" icon={<Target size={20} />}>
              Campaigns
            </NavLink>
            <NavLink to="/orders" icon={<ClipboardList size={20} />}>
              Orders
            </NavLink>
            <NavLink to="/supervisor" icon={<UserCog size={20} />}>
              Supervisor
            </NavLink>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/supervisor" element={<Supervisor />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function NavLink({
  to,
  children,
  icon,
}: {
  to: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
}

export default App;
