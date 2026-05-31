import React from 'react';

export default function AdminRecentOrders({ orders }) {
  // If we don't have orders fetched yet, use the mock data from Stitch
  const displayOrders = orders && orders.length > 0 ? orders : [
    { id: '#VL-9012', customer: 'Ananya Sharma', initials: 'AS', color: 'bg-secondary-fixed', product: 'Rani Haar Necklace', amount: '₹1,24,000', status: 'Processing', statusClass: 'bg-primary-fixed/30 text-on-primary-fixed-variant border-primary/20' },
    { id: '#VL-9011', customer: 'Rahul Kapoor', initials: 'RK', color: 'bg-tertiary-fixed', product: 'Gold Wedding Band', amount: '₹45,500', status: 'Placed', statusClass: 'bg-surface-container-highest text-on-surface-variant border-outline-variant' },
    { id: '#VL-9010', customer: 'Meera Patel', initials: 'MP', color: 'bg-primary-fixed', product: 'Diamond Jhumkas', amount: '₹88,000', status: 'Shipped', statusClass: 'bg-green-100 text-green-800 border-green-200 uppercase' },
  ];

  return (
    <section className="bg-surface-white rounded-xl border border-outline-variant shadow-sm overflow-hidden">
      <div className="p-8 flex justify-between items-center">
        <h3 className="font-headline-md text-headline-md text-on-surface">Recent Orders</h3>
        <div className="flex gap-2">
          <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors">
            <span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
          </button>
          <button className="text-primary font-bold text-label-sm px-4 py-2">View All</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-surface-container-low border-y border-outline-variant">
            <tr>
              <th className="px-8 py-4 font-label-sm text-on-surface-variant uppercase tracking-wider">Order ID</th>
              <th className="px-8 py-4 font-label-sm text-on-surface-variant uppercase tracking-wider">Customer</th>
              <th className="px-8 py-4 font-label-sm text-on-surface-variant uppercase tracking-wider">Product</th>
              <th className="px-8 py-4 font-label-sm text-on-surface-variant uppercase tracking-wider">Amount</th>
              <th className="px-8 py-4 font-label-sm text-on-surface-variant uppercase tracking-wider">Status</th>
              <th className="px-8 py-4 font-label-sm text-on-surface-variant uppercase tracking-wider text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {displayOrders.map((order, i) => (
              <tr key={i} className="hover:bg-surface-container-lowest transition-colors">
                <td className="px-8 py-5 font-bold text-on-surface">{order.id}</td>
                <td className="px-8 py-5">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full ${order.color} flex items-center justify-center font-bold text-[10px]`}>{order.initials}</div>
                    <span className="text-on-surface font-medium">{order.customer}</span>
                  </div>
                </td>
                <td className="px-8 py-5 text-on-surface-variant">{order.product}</td>
                <td className="px-8 py-5 font-medium text-on-surface">{order.amount}</td>
                <td className="px-8 py-5">
                  <span className={`px-3 py-1 text-[10px] font-bold rounded-full border ${order.statusClass}`}>{order.status}</span>
                </td>
                <td className="px-8 py-5 text-right">
                  <button className="text-on-surface-variant hover:text-primary transition-colors material-symbols-outlined" data-icon="visibility">visibility</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
