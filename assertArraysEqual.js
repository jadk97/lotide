const eqArrays = require("./eqArrays");

const assertArraysEqual = function(array1, array2){
  let equal = eqArrays(array1, array2);
  
  if(equal){
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`)
  }
  else{
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !==  ${array2}`);   
  }
};

module.exports = assertArraysEqual;
