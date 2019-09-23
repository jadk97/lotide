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

const middle = function (array){
  let middleArray = [];
  let middleElement = Math.ceil(array.length/2);
  if(array.length > 2){
    if(array.length % 2 === 0){
      middleArray.push(array[middleElement - 1], array[middleElement]);
    }
    else{
      middleArray.push(middleElement);
    }
  }
  else{
    middleArray = [];
  }
  return middleArray;
};

module.exports = middle;
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);