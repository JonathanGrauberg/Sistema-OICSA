import React from 'react';

const Repairs = () => {
  const repairs = [
    {
      id: 1,
      vehicle: 'Mercedes Benz Actros',
      description: 'Cambio de aceite y filtros',
      date: '2024-03-15',
      cost: '$45,000',
      status: 'Completado',
      technician: 'Carlos Rodríguez'
    },
    {
      id: 2,
      vehicle: 'Caterpillar 420F2',
      description: 'Reparación sistema hidráulico',
      date: '2024-03-14',
      cost: '$120,000',
      status: 'En proceso',
      technician: 'Luis Martínez'
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Historial de Reparaciones</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Nueva Reparación
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehículo</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Técnico</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Costo</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {repairs.map((repair) => (
              <tr key={repair.id}>
                <td className="px-6 py-4 whitespace-nowrap">{repair.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{repair.vehicle}</td>
                <td className="px-6 py-4 whitespace-nowrap">{repair.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">{repair.technician}</td>
                <td className="px-6 py-4 whitespace-nowrap">{repair.cost}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    repair.status === 'Completado' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {repair.status}
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

export default Repairs;