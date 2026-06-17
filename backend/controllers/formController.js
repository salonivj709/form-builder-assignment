const Form = require("../models/Form");

// Create Form
const createForm = async (req, res) => {
  try {
    const form = await Form.create(req.body);

    res.status(201).json(form);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Forms
const getForms = async (req, res) => {
  try {
    const forms = await Form.find();

    res.json(forms);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Single Form
const getFormById = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);

    res.json(form);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Form
const deleteForm = async (req, res) => {
  try {
    await Form.findByIdAndDelete(req.params.id);

    res.json({
      message: "Form deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createForm,
  getForms,
  getFormById,
  deleteForm,
};