const mongoose = require("mongoose");

const fieldSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    options: {
      type: [String],
      default: [],
    },
  },
  { _id: false }
);

const formSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  fields: [fieldSchema],
});

module.exports = mongoose.model("Form", formSchema);