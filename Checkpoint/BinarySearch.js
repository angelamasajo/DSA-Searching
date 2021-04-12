// BINARY SEARCH
// faster search meathod, which only works on sorted arrays
// works on the same principle of dividing range in half every time
// divide and conquer approach

// O(1) - best case is when item you're looking for is in the middle of array
// O(log(n)) - average and worst case; w/ each iteration you cut input in half

// takes 4 arguments - array, value to search, and optional start/end indices
function binarySearch(array, value, start, end) {
  // if start/end  are omitted, function uses start and end of array
  var start = start === undefined 
    ? array.length
    : start
  var end = end === undefined
    ? array.length
    : end
  
    // if start index is greater than end index, then clearly value was not found
  // so you return -1
  if (start > end) {
    return -1
  }

  // pick index in the middle of start and end indices and check item at that index
  const index = Math.floor((start + end) / 2)
  const item = array[index]

  console.log(start, end)
  // if item is equal to the value, then you found correct index
  if (item == value) {
    return index
  }
  // otherwise, recursively search in either left or right half of sorted array
  // depending on whether item was less than or greater than the value
  else if (item < value) {
    return binarySearch(array, value, index + 1, end)
  }
  else if (item > value) {
    return binarySearch(array, value, start, index - 1)
  }
  
}