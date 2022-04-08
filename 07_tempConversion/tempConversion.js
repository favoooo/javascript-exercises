const ftoc = function(tempF) {
  let tempC = (tempF - 32) * (5/9);
  tempC = tempC.toFixed(1);
  tempC = Number(tempC);
  return tempC;
};

const ctof = function(tempC) {
  let tempF = tempC * (9/5) + 32;
  tempF = tempF.toFixed(1);
  tempF = Number(tempF);
  return tempF;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
