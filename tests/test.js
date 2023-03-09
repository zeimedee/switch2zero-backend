//import util functions
const { calculateInputs, calculateCarbonOffset, convertTonnesToKilograms, treeCarbonOffset, getNextMonth} = require('../utils/index')
const assert = require('assert')

const input = [
    {
      "country": 5.55, 
      "mode": "monthly", 
      "date": "2023-03-18", 
      "trees": 20, 
      "id": 1
    },
    {
      "country": 5.55, 
      "mode": "monthly", 
      "date": "2023-03-18", 
      "trees": 30, 
      "id": 1
    }
    ];

    const result = { date: '2023-03-18', consumption: 5.55, trees: 50 };

    const tonnes = 1
    const kilogram = 1000


it("should the return the sample result from the given input",()=>{
    assert.deepStrictEqual(calculateInputs(input), result)
})

it("should convert tonnes to kilograms",()=>{
    assert.equal(convertTonnesToKilograms(tonnes),kilogram )
})

it('should the carbon offset of a tree depending on the age of the tree', ()=>{
    assert.equal(treeCarbonOffset(6),28.5)
})

it('it should return the next month', ()=>{
    assert.deepStrictEqual(getNextMonth('08-03-2023'),'3-09-2023')
})