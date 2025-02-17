import EmpleadoRepository from '../repository/EmpleadoRepository';
import { Empleado } from '../model/Empleado';

class EmpleadoService {
  async registerEmpleado(empleado: Empleado) {
    return await EmpleadoRepository.createEmpleado(empleado);
  }
}

export default new EmpleadoService();