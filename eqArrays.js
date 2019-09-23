const eqArrays = function(array1, array2){
  let equal = false;
  if(array1.length === 0 && array2.length === 0){
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
  return equal;
};

module.exports = eqArrays;

