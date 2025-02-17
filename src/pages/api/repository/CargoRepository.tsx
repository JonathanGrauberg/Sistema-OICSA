import { query } from '../../../lib/db';

class CargoRepository {
  async getAllCargos() {
    const res = await query('SELECT * FROM cargo');
    return res.rows;
  }
}

export default new CargoRepository();