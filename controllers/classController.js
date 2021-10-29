class ClassController {
  async handle(req, res) {
    return res.status(200).json({ message: "Class component Funcionando" });
  }
}

export { ClassController };
