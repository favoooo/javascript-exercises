const sumAll = function(intOne, intTwo) {

    let sum = 0;
    let startNum = intOne;
    let endNum = intTwo;
    if (startNum < 0 || endNum < 0 || (typeof(startNum) != "number") || (typeof(endNum) != "number")){
        sum = 'ERROR';
    
    } else {
        
        if(intOne > intTwo) {
            startNum = intTwo;
            endNum = intOne;
        }
    
        for(var i = startNum; i <= endNum; i++){
            sum += i;
        }
    }

   
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
