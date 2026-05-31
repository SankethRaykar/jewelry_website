import React from 'react';

export default function AdminChartsAndAlerts({ products }) {
  // Use the first 3 products as mock low stock alerts if available
  const lowStockProducts = products.length > 0 
    ? products.slice(0, 3) 
    : [];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-gutter mb-10">
      {/* Revenue Chart */}
      <div className="lg:col-span-2 bg-surface-white p-8 rounded-xl border border-outline-variant shadow-sm">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="font-headline-md text-headline-md text-on-surface">Monthly Revenue</h3>
            <p className="text-on-surface-variant font-label-sm">Comparison of sales across the last 6 months</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-primary"></span>
            <span className="font-label-sm text-on-surface">Current Year</span>
          </div>
        </div>
        
        {/* Mock Chart Visualization */}
        <div className="h-64 flex items-end justify-between gap-4 px-2">
          <div className="flex-1 flex flex-col items-center group">
            <div className="w-full bg-primary/20 group-hover:bg-primary/40 transition-all rounded-t-lg" style={{ height: '60%' }}></div>
            <span className="mt-4 font-label-sm text-on-surface-variant">JUL</span>
          </div>
          <div className="flex-1 flex flex-col items-center group">
            <div className="w-full bg-primary/20 group-hover:bg-primary/40 transition-all rounded-t-lg" style={{ height: '45%' }}></div>
            <span className="mt-4 font-label-sm text-on-surface-variant">AUG</span>
          </div>
          <div className="flex-1 flex flex-col items-center group">
            <div className="w-full bg-primary/20 group-hover:bg-primary/40 transition-all rounded-t-lg" style={{ height: '85%' }}></div>
            <span className="mt-4 font-label-sm text-on-surface-variant">SEP</span>
          </div>
          <div className="flex-1 flex flex-col items-center group">
            <div className="w-full bg-primary/20 group-hover:bg-primary/40 transition-all rounded-t-lg" style={{ height: '70%' }}></div>
            <span className="mt-4 font-label-sm text-on-surface-variant">OCT</span>
          </div>
          <div className="flex-1 flex flex-col items-center group">
            <div className="w-full bg-primary/20 group-hover:bg-primary/40 transition-all rounded-t-lg" style={{ height: '95%' }}></div>
            <span className="mt-4 font-label-sm text-on-surface-variant">NOV</span>
          </div>
          <div className="flex-1 flex flex-col items-center group relative">
            <div className="absolute -top-10 bg-on-background text-white text-[10px] px-2 py-1 rounded">₹8.2L</div>
            <div className="w-full bg-primary transition-all rounded-t-lg" style={{ height: '100%' }}></div>
            <span className="mt-4 font-label-sm text-on-surface font-bold">DEC</span>
          </div>
        </div>
      </div>
      
      {/* Low Stock Alerts */}
      <div className="bg-surface-white p-8 rounded-xl border border-outline-variant shadow-sm flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-headline-md text-headline-md text-on-surface">Stock Alerts</h3>
          <span className="bg-error-container text-on-error-container text-[10px] font-bold px-2 py-1 rounded-full">
            {lowStockProducts.length} CRITICAL
          </span>
        </div>
        <div className="flex-1 space-y-4">
          {lowStockProducts.length > 0 ? (
            lowStockProducts.map((p, index) => (
              <div key={p.id || index} className="flex items-center gap-4 p-3 border-b border-outline-variant hover:bg-surface-container-low transition-colors rounded-lg group">
                <img className="w-12 h-12 object-cover rounded-lg" src={p.images?.[0] || 'https://via.placeholder.com/48'} alt={p.name} />
                <div className="flex-1 min-w-0">
                  <p className="text-on-surface font-bold text-label-sm truncate">{p.name}</p>
                  <p className="text-error font-label-sm">Only {index + 1} units left</p>
                </div>
                <button className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity" data-icon="more_vert">more_vert</button>
              </div>
            ))
          ) : (
            <div className="text-center text-on-surface-variant text-sm py-4">No critical stock alerts.</div>
          )}
        </div>
        <button className="w-full mt-6 py-3 text-primary font-bold text-label-sm border border-primary hover:bg-primary-fixed/20 transition-all rounded-lg">View Full Inventory</button>
      </div>
    </section>
  );
}
