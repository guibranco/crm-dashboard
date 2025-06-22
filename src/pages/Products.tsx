import React from 'react';
import { ExternalLink, Search } from 'lucide-react';

function Products() {
  const products = [
    {
      id: 1,
      name: 'Premium Laptop',
      description: 'High-performance laptop for professionals',
      price: 1299.99,
      category: 'Electronics',
      ecommerceUrl: 'https://example.com/products/premium-laptop',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
    // Add more products as needed
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Products Catalog</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <span className="text-lg font-semibold text-blue-600">${product.price}</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">{product.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-gray-500">{product.category}</span>
                <a
                  href={product.ecommerceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-700"
                >
                  <span className="text-sm">View in Store</span>
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;