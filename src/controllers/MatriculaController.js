const MatriculaService = require("../services/MatriculaService.js");
const Controller = require("./Controller.js");

const matriculaService = new MatriculaService();

class MatriculaController extends Controller {
  constructor(){
    super(matriculaService);
  }
}

module.exports = MatriculaController;