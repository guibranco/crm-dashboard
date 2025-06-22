import React, { useState } from 'react';
import { Users, TrendingUp, MessageCircle, Award, ArrowUp, ArrowDown, UserCheck } from 'lucide-react';

interface Seller {
  id: number;
  name: string;
  email: string;
  phone: string;
  performance: {
    sales: number;
    customers: number;
    satisfaction: number;
    tickets: number;
  };
  status: 'online' | 'offline' | 'busy';
}

interface SupportTicket {
  id: string;
  customer: string;
  seller: string;
  issue: string;
  status: 'open' | 'in-progress' | 'resolved';
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
}

function PerformanceCard({ title, value, trend, trendValue, icon: Icon }: {
  title: string;
  value: string;
  trend?: 'up' | 'down';
  trendValue?: string;
  icon: any;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center justify-between">
        <div className="p-2 bg-blue-100 rounded-full">
          <Icon className="text-blue-600" size={24} />
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
          {trend && trendValue && (
            <div className={`flex items-center justify-end mt-2 text-sm ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              {trend === 'up' ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
              <span>{trendValue}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SellerCard({ seller }: { seller: Seller }) {
  const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-gray-500',
    busy: 'bg-yellow-500'
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-semibold">{seller.name.charAt(0)}</span>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{seller.name}</h3>
            <p className="text-sm text-gray-500">{seller.email}</p>
          </div>
        </div>
        <div className={`w-3 h-3 rounded-full ${statusColors[seller.status]}`} />
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">Monthly Sales</p>
          <p className="text-lg font-semibold">${seller.performance.sales.toLocaleString()}</p>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">Customers</p>
          <p className="text-lg font-semibold">{seller.performance.customers}</p>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">Satisfaction</p>
          <p className="text-lg font-semibold">{seller.performance.satisfaction}%</p>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">Open Tickets</p>
          <p className="text-lg font-semibold">{seller.performance.tickets}</p>
        </div>
      </div>
    </div>
  );
}

function SupportTicketCard({ ticket }: { ticket: SupportTicket }) {
  const priorityColors = {
    low: 'bg-blue-100 text-blue-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800'
  };

  const statusColors = {
    open: 'bg-gray-100 text-gray-800',
    'in-progress': 'bg-blue-100 text-blue-800',
    resolved: 'bg-green-100 text-green-800'
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-gray-900">#{ticket.id}</h3>
        <div className="flex space-x-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[ticket.priority]}`}>
            {ticket.priority}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[ticket.status]}`}>
            {ticket.status}
          </span>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4">{ticket.issue}</p>
      
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>Assigned to: {ticket.seller}</span>
        <span>{ticket.createdAt}</span>
      </div>
    </div>
  );
}

function Supervisor() {
  const [sellers] = useState<Seller[]>([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 234 567 890',
      status: 'online',
      performance: {
        sales: 45678,
        customers: 124,
        satisfaction: 98,
        tickets: 3
      }
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+1 234 567 891',
      status: 'busy',
      performance: {
        sales: 38456,
        customers: 98,
        satisfaction: 95,
        tickets: 2
      }
    }
  ]);

  const [tickets] = useState<SupportTicket[]>([
    {
      id: 'TKT-001',
      customer: 'Tech Corp',
      seller: 'John Doe',
      issue: 'Customer requesting bulk order discount for laptops',
      status: 'open',
      priority: 'high',
      createdAt: '2024-02-25 10:30 AM'
    },
    {
      id: 'TKT-002',
      customer: 'Design Studio',
      seller: 'Jane Smith',
      issue: 'Delivery delay for workstation order',
      status: 'in-progress',
      priority: 'medium',
      createdAt: '2024-02-25 09:15 AM'
    }
  ]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Supervisor Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <PerformanceCard
          title="Team Sales"
          value="$84,134"
          trend="up"
          trendValue="+15.3%"
          icon={TrendingUp}
        />
        <PerformanceCard
          title="Active Sellers"
          value="5"
          icon={Users}
        />
        <PerformanceCard
          title="Team Satisfaction"
          value="96.5%"
          trend="up"
          trendValue="+2.4%"
          icon={Award}
        />
        <PerformanceCard
          title="Open Tickets"
          value="8"
          trend="down"
          trendValue="-25%"
          icon={MessageCircle}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Team Members</h2>
            <div className="flex items-center space-x-2">
              <UserCheck size={16} className="text-gray-500" />
              <span className="text-sm text-gray-600">2 online</span>
            </div>
          </div>
          <div className="space-y-6">
            {sellers.map(seller => (
              <SellerCard key={seller.id} seller={seller} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Support Tickets</h2>
            <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
              <option>All Tickets</option>
              <option>High Priority</option>
              <option>Open</option>
              <option>In Progress</option>
            </select>
          </div>
          <div className="space-y-6">
            {tickets.map(ticket => (
              <SupportTicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Supervisor;