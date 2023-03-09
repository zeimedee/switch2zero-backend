const { calculateCarbonOffset, calculateInputs } = require('../utils/index')

const SimulationController = async (req, res) => {
    const { data } = req.body
    const result = calculateInputs(data)
    const results = calculateCarbonOffset(result.trees, result.consumption, result.date);
    const l = results.offsetData.length
    const summary = {
        year:results.offsetData[l-1].month,
        years:results.offsetData.length/12,
        total:results.spendData[l-1].amt,
        trees:result.trees
    }
    return res.send({
        results,
        summary

    })
}

module.exports = {
    SimulationController
}