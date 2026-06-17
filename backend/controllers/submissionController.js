const Submission = require("../models/Submission");

const submitForm = async (
  req,
  res
) => {
  try {
    const submission =
      await Submission.create(
        req.body
      );

    res.status(201).json(
      submission
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getSubmissions = async (
  req,
  res
) => {
  try {
    const submissions =
      await Submission.find({
        formId:
          req.params.formId,
      });

    res.json(submissions);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  submitForm,
  getSubmissions,
};