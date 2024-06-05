class PessoaController {
  static async getAll (req, res) {
    try {
      res.status(200).json({ message: "Sucesso" });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = PessoaController;