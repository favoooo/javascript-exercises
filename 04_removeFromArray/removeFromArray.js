const removeFromArray = function(array, ...numsToRemove) {
    //array.splice(elementNum, 1);
    //console.log(array);
    //console.log(...numsToRemove);
    /* 
        Search array for values in list, and delete them
    */
   //console.log(`numsToRemove: ${numsToRemove}`);

    for(var j = 0; j < numsToRemove.length; j++){
        for(var i = 0; i < array.length; i++){
            //console.log(`In FOR LOOP i=${i}: ${numsToRemove}`)
                if(numsToRemove[j] === array[i]){
                    array.splice(i, 1);
                }
       }
    }
    //console.log(`RETURN: ${array}`);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
