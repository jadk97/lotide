const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};


const countLetters = function(string){
  let counted = {};
  let characters = string.replace(/\s/g, '').split('');
  for (let i = 0; i < characters.length; i++){
    if(counted[characters[i]]){
      counted[characters[i]] = counted[characters[i]] + 1;      
    }
    else{
    counted[characters[i]] = 1;
    }
  }
  return counted;
}

console.log(countLetters("lighthouse in the house"));