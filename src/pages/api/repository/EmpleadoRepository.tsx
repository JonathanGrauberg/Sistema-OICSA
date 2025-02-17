import { query } from '../../../lib/db';
import { Empleado } from '../model/Empleado';

class EmpleadoRepository {
  async createEmpleado(empleado: Empleado) {
    const res = await query(
      `INSERT INTO empleado (persona_id, estado_id, cargo_id, fecha_alta, fecha_baja)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [
        empleado.persona.id,
        empleado.estadoEmpleado.id,
        empleado.cargo.id,
        empleado.fechaAlta,
        empleado.fechaBaja,
      ]
    );
    return res.rows[0];
  }
}

export default new EmpleadoRepository();