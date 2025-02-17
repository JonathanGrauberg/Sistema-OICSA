import { Link } from 'react-router-dom';
import StatsCard from '../components/dashboard/StatsCard';
import RecentVales from '../components/dashboard/RecentVales';
import { Truck, Users, Construction, FileSpreadsheet } from 'lucide-react';
import { getAllUsuarios } from './api/service/UsuarioService';
//import {Button} from '../components/dashboard/Button';
const Dashboard = () => {
  const stats = [
    { title: 'Vehículos Activos', value: 24, icon: Truck, color: 'bg-blue-500', link: '/vehicles' },
    { title: 'Choferes', value: 45, icon: Users, color: 'bg-green-500', link: '/drivers' },
    { title: 'Obras en Curso', value: 8, icon: Construction, color: 'bg-yellow-500', link: '/projects' },
    { title: 'Vales Pendientes', value: 12, icon: FileSpreadsheet, color: 'bg-purple-500', link: '/vouchers' },
  ];
  

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Panel de Control</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Link to={stat.link} key={index} className="block">
            <StatsCard {...stat} />
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6">
        <RecentVales />
      </div>
     
    </div>
  );
};

export default Dashboard;