import CargoRepository from '../repository/CargoRepository';

class CargoService {
  async getCargos() {
    return await CargoRepository.getAllCargos();
  }
}

export default new CargoService();