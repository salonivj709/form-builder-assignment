const express = require("express");

const {
  submitForm,
  getSubmissions,
} = require(
  "../controllers/submissionController"
);

const router =
  express.Router();

router.post(
  "/",
  submitForm
);

router.get(
  "/:formId",
  getSubmissions
);

module.exports = router;