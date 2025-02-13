import React from 'react';
import { Users, Calendar, MessageSquare, FileText, TrendingUp, Clock } from 'lucide-react';

export function DashboardStats() {
  const stats = [
    { label: 'Total Patients', value: '1,234', icon: Users, trend: '+12%' },
    { label: 'Appointments Today', value: '8', icon: Calendar, trend: '+2' },
    { label: 'Unread Messages', value: '23', icon: MessageSquare, trend: '+5' },
    { label: 'Pending Reports', value: '7', icon: FileText, trend: '-2' }
  ];

  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <stat.icon className="w-6 h-6 text-blue-600" />
            </div>
            <span className={`flex items-center text-sm ${
              stat.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
            }`}>
              <TrendingUp className="w-4 h-4 mr-1" />
              {stat.trend}
            </span>
          </div>
          <h3 className="text-2xl font-bold">{stat.value}</h3>
          <p className="text-gray-600 text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}