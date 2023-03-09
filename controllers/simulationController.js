const { calculateCarbonOffset, calculateInputs } = require('../utils/index')

const SimulationController = async (req, res) => {
    const { data } = req.body
    const result = calculateInputs(data)
    const results = calculateCarbonOffset(result.trees, result.consumption, result.date);
    
    return res.send({
        results

    })
}

module.exports = {
    SimulationController
}