const CursoService = require("../services/CursoService.js");
const Controller = require("./Controller.js");

const cursoService = new CursoService();

class CursoController extends Controller {
  constructor(){
    super(cursoService);
  }
}

module.exports = CursoController;