var chocolateBars = [
  'snickers',
  'hundred',
  'grand',
  'kitkat',
  'skittles'
  ]
  
function addElementToBeginningOfArray(array, element) {
  var moreChocolateBars = [element, ...array];
  return moreChocolateBars;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
<<<<<<< HEAD
} 

function addElementToEndOfArray(array, element) {
  var moreBars = [...array, element];
  return moreBars;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  array = array.slice(1);
  return array;
}
  
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length-1)
  return array;
}
=======
} 
>>>>>>> e315ce3cdc3bcc2a2ce4ad83a123a0850256bf2f
