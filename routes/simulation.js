const express = require('express')
const router = express.Router()
const { SimulationController } = require('../controllers/simulationController')

router.post('/', SimulationController)


module.exports = router