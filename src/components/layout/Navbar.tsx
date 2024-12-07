import React from 'react';
import { Menu, User, Truck, Users, FileSpreadsheet, Construction } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Menu className="h-6 w-6" />
          <span className="text-2xl font-bold">OICSA</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1">
            <User className="h-5 w-5" />
            <span>Admin</span>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;