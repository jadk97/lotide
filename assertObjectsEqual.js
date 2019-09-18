const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

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



const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  //console.log(`Example label: ${inspect(actual)}`)
  let checker = false;
  if (Object.keys(actual).length === Object.keys(expected).length) {
    for (const i in actual) {
      if (actual[i] === expected[i] && !(Array.isArray(actual[i] || Array.isArray(expected[i])))) {
        checker = true;
      }
      else if (Array.isArray(actual[i]) && Array.isArray(expected[i])) {
        if (eqArrays(actual[i], expected[i])) {
          checker = true;
        }
        else {
          checker = false;
          break;
        }
      }
      else {
        checker = false;
        break;
      }
    }
  }
  else{
    checker = false;
  }
  if (checker) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }

};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false

