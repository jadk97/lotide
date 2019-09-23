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


