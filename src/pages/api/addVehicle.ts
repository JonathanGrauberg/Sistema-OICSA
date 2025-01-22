import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../src/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const {
      idVehiculoModelo,
      idVehiculoTipo,
      idCombustibleTipo,
      idLubricante,
      idFiltro,
      idNeumaticoDelantero,
      idNeumaticoTrasero,
      medidaNeumaticoDelantero,
      medidaNeumaticoTrasero,
      kilometraje,
      anioFabricacion,
      anioAdquisicion,
      matricula,
      numeroChasis,
      numeroMotor,
      activo = true,
      enReparacion = false,
    } = req.body;

    try {
      await db.none(
        `INSERT INTO vehiculo 
        (id_vehiculo_modelo, id_vehiculo_tipo, id_combustible_tipo, id_lubricante, id_filtro, id_neumatico_delantero, id_neumatico_trasero, medida_neumatico_delantero, medida_neumatico_trasero, kilometraje, "a¤o_fabricacion", "a¤o_adquisicion", matricula, numero_chasis, numero_motor, activo, en_reparacion) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)`,
        [
          idVehiculoModelo,
          idVehiculoTipo,
          idCombustibleTipo,
          idLubricante,
          idFiltro,
          idNeumaticoDelantero,
          idNeumaticoTrasero,
          medidaNeumaticoDelantero,
          medidaNeumaticoTrasero,
          kilometraje,
          anioFabricacion,
          anioAdquisicion,
          matricula,
          numeroChasis,
          numeroMotor,
          activo,
          enReparacion,
        ]
      );
      res.status(201).json({ message: 'Vehículo registrado correctamente' });
    } catch (error) {
      console.error('Error al registrar vehículo:', error);
      res.status(500).json({ error: 'Error al registrar vehículo' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Método ${req.method} no permitido` });
  }
}
