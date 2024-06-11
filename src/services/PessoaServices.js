const Services = require("./Services.js");

class PessoaServices extends Services {
  constructor() {
    super("Pessoa");
  }

  async getRegistrationByStudent(id){
    const studentData = await super.getRegisterById(id);
    const registrationsList = await studentData.getRegistrationClass();
    return (registrationsList);
  }
}

module.exports = PessoaServices;
