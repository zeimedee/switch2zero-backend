const express = require('express')
const router = express.Router()
const { SimulationController } = require('../controllers/simulationController')
const { validateRequest } = require('../utils/index')

router.post('/',validateRequest, SimulationController)


module.exports = router