var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, elements) {
  return array2 = array.unshift(elements);
}

function destructivelyAddElementToBeginningOfArray(array3, elements2) {
  return array3 = array3.unshift(elements2);
}

function addElementToEndOfArray(array2, elements4) {
  return array3 = [array2, ...elements4];
}

function destructivelyAddElementToEndOfArray(array2, elements4) {
  return array2 = [array2, elements4];
}