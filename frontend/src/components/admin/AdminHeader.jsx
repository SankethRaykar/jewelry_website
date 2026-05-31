import React from 'react';

export default function AdminHeader() {
  return (
    <header className="flex justify-between items-center mb-10">
      <div>
        <h2 className="font-headline-lg text-headline-lg text-on-surface">Operations Overview</h2>
        <p className="text-on-surface-variant font-body-md mt-1">Daily snapshot of VIVAH LUXE performance</p>
      </div>
      <div className="flex gap-4">
        <button className="bg-surface-white border border-outline-variant px-6 py-2.5 rounded-lg font-label-sm flex items-center gap-2 hover:bg-surface-container-low transition-all">
          <span className="material-symbols-outlined text-[18px]" data-icon="calendar_today">calendar_today</span>
          Dec 1 - Dec 31, 2024
        </button>
        <button className="bg-on-background text-primary-fixed px-6 py-2.5 rounded-lg font-label-sm flex items-center gap-2 hover:shadow-lg transition-all active:scale-95 shimmer-effect">
          <span className="material-symbols-outlined text-[18px]" data-icon="download">download</span>
          Export Report
        </button>
      </div>
    </header>
  );
}
