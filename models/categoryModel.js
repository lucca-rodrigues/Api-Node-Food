const mongoose = require("mongoose");
const schema = mongoose.Schema;

const categoryModel = new schema(
  {
    title: {
      trim: true,
      index: true,
      required: true,
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

categoryModel.pre("save", (next) => {
  let now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

module.exports = mongoose.model("Category", categoryModel);
