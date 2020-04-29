const express = require("express");
const router = express.Router();
const axios = require("axios");
const problem01 = require("../utils/problem01");
const problem02 = require("../utils/problem02");

router.route("/problem01").get((req, res) => {
  const result = problem01();
  if (result) {
    res.status(200).json({
      message: "success",
      data: result
    });
  } else {
    res.status(404).json({
      message: "error"
    });
  }
});

router.route("/problem02").get((req, res) => {
  const result = problem02();
  if (result) {
    res.status(200).json({
      message: "success",
      data: result
    });
  } else {
    res.status(404).json({
      message: "error"
    });
  }
});

router.route("/direction").get(async (req, res) => {
  const origin = "SCG";
  const destination = "Central" + " " + "World";
  const API_KEY = "AIzaSyDbc7gRooCWB_MUkjzJtGQwAsJSdfd0Nxk";
  const url_api = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${API_KEY}`;
  const direction = await axios(url_api);
  if (direction) {
    res.status(200).json({
      message: "success",
      data: direction.data
    });
  }
});

module.exports = router;
