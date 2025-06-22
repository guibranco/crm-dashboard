import React, { useState } from 'react';
import { Plus, Search, Edit2, Trash2, Phone, Mail, History, MessageSquare } from 'lucide-react';

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  lastContact: string;
  preferredContactTime?: string;
  notes?: string;
  status: 'active' | 'inactive';
}

function CustomerDetails({ customer, onClose }: { customer: Customer; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{customer.name}</h2>
              <p className="text-gray-600">{customer.company}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Phone size={20} className="text-gray-500" />
                    <span>{customer.phone}</span>
                  </div>
                  <a
                    href={`tel:${customer.phone}`}
                    className="px-3 py-1 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors"
                  >
                    Call Now
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Mail size={20} className="text-gray-500" />
                    <span>{customer.email}</span>
                  </div>
                  <a
                    href={`mailto:${customer.email}`}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors"
                  >
                    Send Email
                  </a>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">Preferred Contact Time</h3>
                <input
                  type="time"
                  value={customer.preferredContactTime || ''}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Notes</h3>
              <textarea
                className="w-full h-32 border border-gray-300 rounded-lg px-3 py-2 resize-none"
                placeholder="Add notes about customer preferences, requirements, etc."
                value={customer.notes || ''}
              />
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Recent Interactions</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <History size={20} className="text-gray-500 mt-1" />
                <div>
                  <p className="text-sm font-medium">Phone Call - Quote Request</p>
                  <p className="text-sm text-gray-600">2024-02-25 10:30 AM</p>
                  <p className="text-sm text-gray-600 mt-1">Discussed pricing for bulk order of laptops</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <MessageSquare size={20} className="text-gray-500 mt-1" />
                <div>
                  <p className="text-sm font-medium">Email - Order Status</p>
                  <p className="text-sm text-gray-600">2024-02-24 2:15 PM</p>
                  <p className="text-sm text-gray-600 mt-1">Sent tracking information for order #ORD-001</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              Close
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Customers() {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [customers] = useState<Customer[]>([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 234 567 890',
      company: 'Tech Corp',
      lastContact: '2024-02-20',
      preferredContactTime: '09:00',
      notes: 'Prefers morning calls. Interested in bulk laptop purchases.',
      status: 'active',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+1 234 567 891',
      company: 'Design Studio',
      lastContact: '2024-02-22',
      preferredContactTime: '14:00',
      notes: 'Looking for design workstations. Budget-conscious.',
      status: 'active',
    },
  ]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Customers</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus size={20} className="mr-2" />
          Add Customer
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100">
          <div className="relative">
            <input
              type="text"
              placeholder="Search customers..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Contact</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedCustomer(customer)}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{customer.email}</div>
                    <div className="text-sm text-gray-500">{customer.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{customer.company}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{customer.lastContact}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button 
                      className="text-green-600 hover:text-green-900 mr-3"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = `tel:${customer.phone}`;
                      }}
                    >
                      <Phone size={16} />
                    </button>
                    <button 
                      className="text-blue-600 hover:text-blue-900 mr-3"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = `mailto:${customer.email}`;
                      }}
                    >
                      <Mail size={16} />
                    </button>
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      <Edit2 size={16} />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedCustomer && (
        <CustomerDetails
          customer={selectedCustomer}
          onClose={() => setSelectedCustomer(null)}
        />
      )}
    </div>
  );
}

export default Customers;