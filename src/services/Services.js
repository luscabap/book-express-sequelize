const dataSource = require("../models");

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async getAllRegisters() {
    const responseDB = await dataSource[this.model].findAll();
    return responseDB;
  }

  async updateRegister(dataToUpdate, id) {
    const listUpdatedRegisters = dataSource[this.model].update(dataToUpdate, {
      where: {
        id: id,
      },
    });

    if (listUpdatedRegisters[0] === 0){
      return false;
    }
    return true;
  }
}

module.exports = Services;
