const assertArraysEqual = function(array1, array2){
  let equal = false;
  if (array1.length === 0 && array1.length === 0){
    equal = true;
  }
  else if(array1.length === array2.length){
    for (let i = 0; i < array1.length; i++){
      if(array1[i] === array2[i]){
        equal = true;
      }
      else{
        equal = false;
        break;
      }
    }
  }
  else{
    equal = false;
  }
  
  if(equal){
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`)
  }
  else{
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !==  ${array2}`);   
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};


const eqArrays = function(array1, array2){
  let equal = false;
  if(array1.length === array2.length){
    for (let i = 0; i < array1.length; i++){
      if(array1[i] === array2[i]){
        equal = true;
      }
      else{
        equal = false;
        break;
      }
    }
  }
  else{
    equal = false;
  }
  return equal;
};

const flatten = function(array){
  let flattened = [];
  for (let i = 0; i < array.length; i++){
    if(Array.isArray(array[i])){
      flattened.push.apply(flattened, array[i]);
    }
    else{
      flattened.push(array[i]);
    }
  }
  return flattened;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));