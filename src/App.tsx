import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';
import Vehicles from './pages/Vehicles';
import Drivers from './pages/Drivers';
import Projects from './pages/Projects';
import Vouchers from './pages/Vouchers';
import Inventory from './pages/Inventory';
import Repairs from './pages/Repairs';
import Personnel from './pages/Personnel';
import VehicleRegistration from './pages/VehicleRegistration';
import Settings from './pages/Settings';
import NewVoucher from './pages/NewVoucher';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/vehicles" element={<Vehicles />} />
              <Route path="/drivers" element={<Drivers />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/vouchers" element={<Vouchers />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/repairs" element={<Repairs />} />
              <Route path="/personnel" element={<Personnel />} />
              <Route path="/vehicle-registration" element={<VehicleRegistration />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/NewVoucher" element={<NewVoucher />} /> {/* Nueva ruta añadida */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
