const FuelStation = require('../model/FuelStation');
const FuelStationRepositoty = require('../repository/FuelStationRepository');

class FuelStationController {
  constructor() {
    this.fuelStationRepositoty = new FuelStationRepositoty();
  }

  async createFuelStation(request) {
    //console.log(request.body);
    const fuelStation = new FuelStation(request.body);
    const fuelStationCurrent = await this.fuelStationRepositoty.save(fuelStation);

    return fuelStationCurrent;
  }

  async getAllFuelStation() {
    const fuelStationAll = await this.fuelStationRepositoty.getAll();
    return fuelStationAll;
  }

  async getById(req) {
    const {params} = req;
    const fuelStation = await this.fuelStationRepositoty.getById(params.id);
    return fuelStation;
  }

  async delete(req) {
    const {params} = req;
    const fuelStation = await this.fuelStationRepositoty.delete(params.id);
    return fuelStation;
  }

  async update(req) {
    const {params, body} = req;
    const fuelStation = await this.fuelStationRepositoty.update(params.id, body);
    return fuelStation;
  }
}

module.exports = FuelStationController;