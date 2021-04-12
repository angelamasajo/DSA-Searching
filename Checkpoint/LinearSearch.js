// LINEAR SEARCH
// Look through array 1 by 1 until you find what you're looking for
// classic example is indexOf function, which searches for value within an array

function indexOf(array, value) {
  // loop through array, checking each value until you find a match, return i
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return i
    }
  }
  // if you reach end of loop without finding item, return -1, 
  // indicating item wasn't found
  return -1
}