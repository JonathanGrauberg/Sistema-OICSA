import React, { useState } from 'react';
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
  const [message, setMessage] = useState<string>('');

  // Funciona la base de datos??
  const checkDatabaseConnection = async () => {
    try {
      const response = await fetch('/api/usuarios'); // Llama a tu API
      const data = await response.json(); // Convierte la respuesta en JSON
  
      if (data.success) {
        setMessage('✅ Conexión a la base de datos exitosa!');
      } else {
        setMessage('❌ Hubo un problema al conectar con la base de datos.');
      }
    } catch (error: any) {  
      console.error('Error completo:', error);  // Mostramos el error completo en la consola
      setMessage(`❌ Error al conectar con la base de datos: ${error.message}`);
    }
  };

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
              <Route path="/vehicleregistration" element={<VehicleRegistration />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/NewVoucher" element={<NewVoucher />} />
              
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
