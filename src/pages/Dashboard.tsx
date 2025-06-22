import React from 'react';
import { Users, Package, Target, TrendingUp, AlertTriangle, DollarSign, Truck, Calendar, ArrowUp, ArrowDown } from 'lucide-react';

function StatCard({ title, value, icon: Icon, color, trend, trendValue }: { 
  title: string; 
  value: string; 
  icon: any; 
  color: string;
  trend?: 'up' | 'down';
  trendValue?: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
          {trend && trendValue && (
            <div className={`flex items-center mt-2 text-sm ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              {trend === 'up' ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
              <span>{trendValue} vs last month</span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          <Icon className="text-white" size={24} />
        </div>
      </div>
    </div>
  );
}

function DeliveryIssue({ order, issue, status }: { order: string; issue: string; status: string }) {
  return (
    <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-100">
      <div className="p-2 bg-orange-100 rounded-full">
        <AlertTriangle className="text-orange-600" size={20} />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-gray-900">{order}</h3>
          <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
            {status}
          </span>
        </div>
        <p className="mt-1 text-sm text-gray-600">{issue}</p>
      </div>
    </div>
  );
}

function PendingPayment({ order, customer, amount, dueDate }: { 
  order: string; 
  customer: string; 
  amount: string;
  dueDate: string;
}) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100">
      <div className="flex items-center space-x-4">
        <div className="p-2 bg-blue-100 rounded-full">
          <DollarSign className="text-blue-600" size={20} />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">{order}</h3>
          <p className="text-sm text-gray-600">{customer}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-medium text-gray-900">{amount}</p>
        <p className="text-sm text-gray-500">Due {dueDate}</p>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Seller Dashboard</h1>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Calendar size={16} />
          <span>February 2024</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Monthly Sales"
          value="$45,678"
          icon={DollarSign}
          color="bg-green-500"
          trend="up"
          trendValue="+12.3%"
        />
        <StatCard
          title="Active Customers"
          value="1,234"
          icon={Users}
          color="bg-blue-500"
          trend="up"
          trendValue="+5.8%"
        />
        <StatCard
          title="Pending Orders"
          value="28"
          icon={Package}
          color="bg-purple-500"
        />
        <StatCard
          title="Conversion Rate"
          value="24.8%"
          icon={TrendingUp}
          color="bg-orange-500"
          trend="down"
          trendValue="-2.1%"
        />
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Pending Payments</h2>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
              5 overdue
            </span>
          </div>
          <div className="space-y-4">
            <PendingPayment
              order="ORD-001"
              customer="Tech Corp"
              amount="$12,499.99"
              dueDate="Mar 15, 2024"
            />
            <PendingPayment
              order="ORD-002"
              customer="Design Studio"
              amount="$8,299.50"
              dueDate="Mar 20, 2024"
            />
            <PendingPayment
              order="ORD-003"
              customer="Marketing Pro"
              amount="$5,699.99"
              dueDate="Mar 22, 2024"
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Delivery Issues</h2>
            <div className="flex items-center space-x-2">
              <Truck size={16} className="text-gray-500" />
              <span className="text-sm text-gray-600">3 active issues</span>
            </div>
          </div>
          <div className="space-y-4">
            <DeliveryIssue
              order="ORD-001"
              issue="Delivery delayed due to weather conditions"
              status="In Transit"
            />
            <DeliveryIssue
              order="ORD-002"
              issue="Address verification needed"
              status="On Hold"
            />
            <DeliveryIssue
              order="ORD-003"
              issue="Package damaged during transit"
              status="Investigation"
            />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Monthly Performance</h2>
            <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Last 6 months</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-600">Top Product</h3>
              <p className="mt-2 text-lg font-semibold">Premium Laptop</p>
              <p className="text-sm text-gray-600">142 units sold</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-600">Best Campaign</h3>
              <p className="mt-2 text-lg font-semibold">Spring Sale 2024</p>
              <p className="text-sm text-gray-600">24.8% conversion rate</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-600">Customer Satisfaction</h3>
              <p className="mt-2 text-lg font-semibold">4.8/5.0</p>
              <p className="text-sm text-gray-600">Based on 156 reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;