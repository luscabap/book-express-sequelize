const PessoaServices = require("../services/PessoaServices.js");
const Controller = require("./Controller.js");

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
  constructor(){
    super(pessoaServices);
  }

  async getRegistration(req, res) {
    const { idStudent } = req.params;
    try {
      const registrationList = await pessoaServices.getRegistrationByStudent(Number(idStudent));
      return res.status(200).json(registrationList);
    } catch (error) {
      return res.status(500).json({
        erro: error.message,
      });
    }
  }
}

module.exports = PessoaController;