require("../models/category");
const mongoose = require("mongoose");
const CategoryModel = mongoose.model("Category");

class categoryRepository {
  constructor(model) {
    this.model = mongoose.model(mongoose.model);
  }

  async create(data) {
    const category = new CategoryModel(data);
    const result = await category.save();
    return result;
  }

  async update({ id }) {
    const category = await category.findByIdAndUpdate(id);
    const response = await CategoryModel.findById(id);
    return response;
  }

  async getAll() {
    const categories = await CategoryModel.find();
    return categories;
  }
}

module.exports = categoryRepository;
