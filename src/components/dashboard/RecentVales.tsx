import React from 'react';

const RecentVales = () => {
  const vales = [
    {
      id: 1,
      chofer: 'Juan Pérez',
      tipo: 'Combustible',
      cantidad: '50L',
      estado: 'Pendiente',
    },
    {
      id: 2,
      chofer: 'María García',
      tipo: 'Aceite',
      cantidad: '5L',
      estado: 'Aprobado',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Vales Recientes</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Chofer</th>
              <th className="text-left py-3">Tipo</th>
              <th className="text-left py-3">Cantidad</th>
              <th className="text-left py-3">Estado</th>
            </tr>
          </thead>
          <tbody>
            {vales.map((vale) => (
              <tr key={vale.id} className="border-b">
                <td className="py-3">{vale.chofer}</td>
                <td className="py-3">{vale.tipo}</td>
                <td className="py-3">{vale.cantidad}</td>
                <td className="py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      vale.estado === 'Aprobado'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {vale.estado}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentVales;