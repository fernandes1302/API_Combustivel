const FuelStation = require('../model/FuelStation');
const FuelStationRepositoty = require('../repository/FuelStationRepository');

class FuelStationController {
  constructor() {
    this.fuelStationRepositoty = new FuelStationRepositoty();
  }

  async createFullStation(request) {
    const fuelStation = new FuelStation(request.body);
    const fuelStationCurrent = await this.fuelStationRepositoty.save(fuelStation);

    return fuelStationCurrent;
  }
}

module.exports = FuelStationController;