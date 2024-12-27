import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

const Vouchers = () => {
  const navigate = useNavigate(); // Inicializar el hook para la navegación

  const vouchers = [
    {
      id: 1,
      driver: 'Juan Pérez',
      type: 'Combustible',
      project: 'Remodelación Av. Principal',
      amount: '50L',
      vehicle: 'Mercedes Benz Actros',
      status: 'Pendiente',
      date: '2024-03-15'
    },
    {
      id: 2,
      driver: 'María García',
      type: 'Aceite',
      project: 'Instalación Cloacas Zona Norte',
      amount: '5L',
      vehicle: 'Caterpillar 420F2',
      status: 'Aprobado',
      date: '2024-03-14'
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Vales</h1>
        <button
          onClick={() => navigate('/NewVoucher')} // Navegación al hacer clic
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Nuevo Vale
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chofer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Obra</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cantidad</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehículo</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {vouchers.map((voucher) => (
              <tr key={voucher.id}>
                <td className="px-6 py-4 whitespace-nowrap">{voucher.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{voucher.driver}</td>
                <td className="px-6 py-4 whitespace-nowrap">{voucher.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">{voucher.project}</td>
                <td className="px-6 py-4 whitespace-nowrap">{voucher.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap">{voucher.vehicle}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      voucher.status === 'Aprobado' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {voucher.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">Editar</button>
                  <button className="text-red-600 hover:text-red-900">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Vouchers;
