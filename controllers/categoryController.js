const Category = require("../models/categoryModel");

module.exports = {
  async handle(req, res) {
    const categories = await Category.find();
    return res.json(categories);
  },
  async show(req, res) {
    const category = await Category.findById(req.params.id);
    return res.json(category);
  },
  async store(req, res) {
    const category = await Category.create(req.body);
    return res.json(category);
  },
  async update(req, res) {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(category);
  },

  async destroy(req, res) {
    const category = await Category.findOneAndRemove(req.params.id);
    return res.send();
  },
};
