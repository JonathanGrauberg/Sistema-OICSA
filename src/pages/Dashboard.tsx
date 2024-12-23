import React from 'react';
import StatsCard from '../components/dashboard/StatsCard';
import RecentVales from '../components/dashboard/RecentVales';
import { Truck, Users, Construction, FileSpreadsheet } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { title: 'Vehículos Activos', value: 24, icon: Truck, color: 'bg-blue-500' },
    { title: 'Choferes', value: 45, icon: Users, color: 'bg-green-500' },
    { title: 'Obras en Curso', value: 8, icon: Construction, color: 'bg-yellow-500' },
    { title: 'Vales Pendientes', value: 12, icon: FileSpreadsheet, color: 'bg-purple-500' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Panel de Control</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6">
        <RecentVales />
      </div>
    </div>
  );
};

export default Dashboard;