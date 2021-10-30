const Product = require("../models/productModel");

module.exports = {
  async handle(req, res) {
    const products = await Product.find();
    return res.json(products);
  },
  async show(req, res) {
    const product = await Product.findById(req.params.id);
    return res.json(product);
  },
  async store(req, res) {
    const product = await Product.create(req.body);
    return res.json(product);
  },
  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(product);
  },

  async destroy(req, res) {
    const product = await Product.findOneAndRemove(req.params.id);
    return res.send();
  },
};
