import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Truck, 
  Users, 
  FileSpreadsheet, 
  Construction, 
  Package2, 
  Settings,
  Wrench,
  UserPlus,
  Car,
  Plus,
  LayoutDashboard
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Panel de Control', path: '/' },
  { icon: Truck, label: 'Vehículos y Máquinas', path: '/vehicles' },
  { icon: Users, label: 'Choferes', path: '/drivers' },
  { icon: Construction, label: 'Obras', path: '/projects' },
  { icon: FileSpreadsheet, label: 'Vales', path: '/vouchers' },
  { icon: Package2, label: 'Stock General', path: '/inventory' },
  { icon: Wrench, label: 'Reparaciones', path: '/repairs' },
  { icon: UserPlus, label: 'Altas de Personal', path: '/personnel' },
  { 
    icon: ({ className }: { className?: string }) => (
      <div className="relative">
        <Car className={className} />
        <Plus className="absolute -top-2 -right-2 h-3 w-3 text-white" />
      </div>
    ),
    label: 'Altas de Vehículos',
    path: '/vehicle-registration'
  },
  { icon: Settings, label: 'Configuración', path: '/settings' },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <div className="space-y-4">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.path)}
            className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-colors ${
              location.pathname === item.path ? 'bg-blue-700' : 'hover:bg-blue-700'
            }`}
          >
            {typeof item.icon === 'function' ? (
              item.icon({ className: "h-5 w-5" })
            ) : (
              <item.icon className="h-5 w-5" />
            )}
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;