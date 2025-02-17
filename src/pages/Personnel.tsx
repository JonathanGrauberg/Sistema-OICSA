import React, { useEffect, useState } from 'react';
import CargoRepository from './api/repository/CargoRepository';
import EmpleadoService from './api/service/EmpleadoService';

type Cargo = {
  id: number;
  nombre: string;
};

const PersonnelRegistration = () => {
  const [cargos, setCargos] = useState<Cargo[]>([]);
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    numero_documento: '',
    fecha_nacimiento: '',
    estadoEmpleadoId: '',
    cargoId: '',
  });

  useEffect(() => {
    const fetchCargos = async () => {
      try {
        const cargosData: Cargo[] = await CargoRepository.getAllCargos();
        setCargos(cargosData);
      } catch (error) {
        console.error('Error al obtener cargos:', error);
      }
    };

    fetchCargos();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      //await EmpleadoService.createEmpleado(form);
      alert('Empleado registrado con éxito');
    } catch (error) {
      console.error('Error al registrar empleado:', error);
      alert('Hubo un error al registrar el empleado');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Alta de Personal</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Inputs con atributos 'name' y manejadores de cambios */}
            {/* ... */}
          </div>
          <div className="flex justify-end space-x-3">
            <button type="button" className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              Cancelar
            </button>
            <button type="submit" className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
              Registrar Personal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonnelRegistration;
