const dataSource = require("../models");

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async getAllRegisters() {
    const responseDB = await dataSource[this.model].findAll();
    return responseDB;
  }

  async getRegisterById(id){
    return dataSource[this.model].findByPk(id);
  }

  async createNewRegister(data){
    return dataSource[this.model].create(data);
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

  async deleteRegister(id){
    return dataSource[this.model].destroy({ where: { id: id } });
  }
}

module.exports = Services;
