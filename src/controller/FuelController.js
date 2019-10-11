const Fuel = require('../model/Fuel');
const FuelRepository = require('../repository/FuelRepository');

class FuelController {
  constructor() {
    this.fuelRepositoty = new FuelRepository();
  }

  async createFuel(req) {
    const fuel = new Fuel(req.body);
    const fuelCurrent = await this.fuelRepositoty.save(fuel);
    return fuelCurrent;
  }


  async getAllFuel() {
    const fuelAll = await this.fuelRepositoty.getAll();
    return fuelAll;
  }

  async getById(req) {
    const {params} = req;
    const fuel = await this.fuelRepositoty.getById(params.id);
    return fuel;
  }

  async delete(req) {
    const {params} = req;
    const fuel = await this.fuelRepositoty.delete(params.id);
    return fuel;
  }

  async update(req) {
    const {params, body} = req;
    const fuel = await this.fuelRepositoty.update(params.id, body);
    return fuel;
  }
}

module.exports = FuelController;