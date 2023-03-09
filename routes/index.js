const express = require('express')

const router = express.Router()
const simulation = require('./simulation')

router.use('/simulate', simulation)

module.exports = router