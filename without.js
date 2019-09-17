const eqArrays = function (array1, array2) {
  let equal = false;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        equal = true;
      }
      else {
        equal = false;
        break;
      }
    }
  }
  else {
    equal = false;
  }
  return equal;
};

const assertArraysEqual = function (array1, array2) {
  let equal = false;
  if (array1.length === 0 && array1.length === 0) {
    equal = true;
  }
  else if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        equal = true;
      }
      else {
        equal = false;
        break;
      }
    }
  }
  else {
    equal = false;
  }

  if (equal) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`)
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !==  ${array2}`);
  }
};



const without = function (source, itemsToRemove) {
  let original = [];
  let filter = [];
  original.push.apply(original, source);
  filter.push.apply(filter, itemsToRemove);
  for (let i = 0; i < original.length; i++) {
    for (let j = 0; j < filter.length; j++) {
      if (original[i] === filter[j]) {
        original.splice(i, 1);
      }
    }
  }
  return original;
};



const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
