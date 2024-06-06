const dataSource = require("../models");

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async getAllRegisters(){
    const responseDB = await dataSource[this.model].findAll();
    return responseDB;
  }
}

module.exports = Services;