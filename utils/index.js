//function which returns how carbon a tree can offset given its age in kilograms
 const treeCarbonOffset = (ageOfTree) => {

    if(ageOfTree == 1 ){
        return 4.75
    }
    if(ageOfTree == 2 ){
        return 4.75*2
    }
    if(ageOfTree == 3 ){
        return 4.75*3
    }
    if(ageOfTree == 4 ){
        return 4.75*4
    }
    if(ageOfTree ==5 ){
        return 4.75*5
    }
    if(ageOfTree >= 6 ){
        return 28.5
    }
}

//function  which converts tonnes to kilograms
 const convertTonnesToKilograms= (tonnes) =>{
    return tonnes * 1000 
}


//function which returns the next month
 function getNextMonth(date) {
    // Create a new Date object for the given date
    const givenDate = new Date(date);
  
    // Get the month and year of the given date
    let currentDay = givenDate.getDate()
    let currentMonth = givenDate.getMonth();
    let currentYear = givenDate.getFullYear();
  
    // Add one month to the current month
    currentMonth += 1;
  
    // If the current month is December, set the month to January and increment the year
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear += 1;
    }
  
    // Create a new Date object for the next month
    const nextMonth = new Date(currentYear, currentMonth);


    const day = ('0' + nextMonth.getDate()).slice(-2); // add leading zero if day is a single digit
    const month = ('0' + (nextMonth.getMonth() + 1)).slice(-2); // add leading zero if month is a single digit
    const year = nextMonth.getFullYear();

    const formattedDate = `${currentDay}-${month}-${year}`;
  
    // Return the next month as a string in the format "DD/MM/YYYY"
    return formattedDate
}

//calculate cumulative expenditure
const calculateCumulativeSpend = (i, price) => {
    //i represents first payment
    let amt = 0
    if(i > 1){
        const percentage = price * 0.1 
        amt += percentage 
    }
    amt += price
    return amt;

    
    
}


//calculate the carbon offset 
const calculateCarbonOffset = (numberOfTrees, consumption, date) => {
    
    let offsetData = [];
    let spendData = [];
    let offset = 0;
    let spend = 0
    const emission = convertTonnesToKilograms(consumption)
  
    for(let i=1;offset < emission; i++){
        offset += treeCarbonOffset(i) * parseInt(numberOfTrees) 
        spend += calculateCumulativeSpend(i, 120) * parseInt(numberOfTrees) 
        offsetData.push({offset: offset, month: date})
        spendData.push({month:date, amt:spend})
        date = getNextMonth(date)
    }
    return {offsetData, spendData}
}


const calculateInputs = (inputs) => {
    const index = inputs.length
    let date = inputs[0].date
    let consumption = inputs[0].country
    let trees = 0;
    for(let i=0 ; i < index; i++){
        
        trees += parseInt(inputs[i].trees)
    }

    return {date, consumption, trees}
}


 module.exports={
    calculateCarbonOffset,
    calculateInputs,
    convertTonnesToKilograms,
    treeCarbonOffset,
    getNextMonth
 }
