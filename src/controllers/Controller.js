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
}

module.exports = Controller;
