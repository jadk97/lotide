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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  let checker = false;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const i in object1) {
      if (object1[i] === object2[i] && !(Array.isArray(object1[i]) || Array.isArray(object2[i]))) {
        checker = true;
      }
      else if (Array.isArray(object1[i]) && (Array.isArray(object2[i]))) {
        if (eqArrays(object1[i], object2[i])) {
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
  else {
    checker = false;
  }
  return checker;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

const ef = {e: ["2", 3, 4], f: "3"};
const ef2 = {e: ["2", 3, 4], f: 3};
assertEqual(eqObjects(ef, ef2), false);
