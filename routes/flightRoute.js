const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

// get all flights
router.get("/", controller.getFlights);

// get single flight
router.get("/:id", controller.getFlight);

// create new flight
router.post("/", controller.createFlight);

// update flight
router.put("/:id", controller.updateFlight);

// delete flight
router.delete("/:id", controller.deleteFlight);

module.exports = router;

