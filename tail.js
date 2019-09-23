const tail = function(array) {
  let result = [];
  for (let i = 1; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
};

module.exports = tail;

// const words = ["hello", "lighthouse", "labs"];
// tail(words);

// assertEqual(tail(words), "labs");