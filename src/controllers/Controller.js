class Controller {
  constructor(serviceEntity) {
    this.serviceEntity = serviceEntity;
  }

  async getAll(req, res) {
    try {
      const registerList = await this.serviceEntity.getAllRegisters();
      return res.status(200).json(registerList);
    } catch (error) {
      console.log("Erro controller.js", error);
    }
  }

  async getById(req, res){
    const { id } = req.params;
    try {
      const responseRegister = await this.serviceEntity.getRegisterById(Number(id));
      return res.status(200).json(responseRegister);
    } catch (error) {
      console.log(error);
    }
  }

  async create(req, res){
    const dataToCreate = req.body;
    try {
      const newRegisterCreated = await this.serviceEntity.createNewRegister(dataToCreate);
      return res.status(200).json(newRegisterCreated);
    } catch (error) {
      console.log(error);
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const dataToUpdate = req.body;

    try {
      const isUpdated = await this.serviceEntity.updateRegister(
        dataToUpdate,
        Number(id),
      );

      if (!isUpdated) {
        return res.status(400).json({ message: "Fail to update the register" });
      }

      return res.status(200).json({ message: "Success to update the register" });
    } catch (error) {
      console.log(error);
    }
  }

  async delete(req, res){
    const { id } = req.params;
    try {
      const registerDeleted = await this.serviceEntity.deleteRegister(id);
      return res.status(200).json(registerDeleted);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Controller;
