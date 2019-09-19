const map = function (array, callback){
  const results = [];
  for (let item of array){
    results.push(callback(item));
  }
  return results;
}

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

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const results1a = map(words, word => word[0]);
const results1b= words.map(word => word[0]);

const results2a = map(numbers, number => number * 2);
const results2b = numbers.map(number => number * 2);

const results3a = map(words, word => word.length);
const results3b = words.map(word => word.length);
assertArraysEqual(results1a, results1b);
assertArraysEqual(results2a, results2b);
assertArraysEqual(results3a, results3b);