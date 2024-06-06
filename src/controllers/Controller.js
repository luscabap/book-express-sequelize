class Controller {
  constructor (serviceEntity) {
    this.serviceEntity = serviceEntity;
  }

  async getAll(req, res){
    try {
      const registerList = await this.serviceEntity.getAllRegisters();
      return res.status(200).json(registerList);
    } catch (error) {
      console.log("Erro controller.js", error);
    }
  }
}

module.exports = Controller;