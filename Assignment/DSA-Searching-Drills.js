// ================================ DRILL 1 =======================================
// How many searches?
// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive 
// binary search algorithm, identify the sequence of numbers that each recursive 
// call will search to try and find 8.

// 1 - split in half 3 to 11
// 2 - split in half 6 to 11
// 3 - split in half 8 and 11
// 4 - split in half to find 8


// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive 
// binary search algorithm, identify the sequence of numbers that each recursive 
//call will search to try and find 16.

// 1 - split in half 12 to 18
// 2 - split in half 15 to 18
// 3 - split in half 15 to 17
// 4 - error b/c 16 does not exist.


// ================================ DRILL 3 =======================================

// Imagine you are looking for a book in a library with a Dewey Decimal index. 
// How would you go about it? Can you express this process as a search algorithm? 
// Implement your algorithm to find a book whose Dewey and book title is provided.

const LIBRARY = [
  {deweyNum: '000.13',
    title: 'Dictionary'},
  {deweyNum: '001.13',
    title: 'Dictionary2'},
  {deweyNum: '020.13',
    title: 'Dictionary5'},
  {deweyNum: '300.13',
    title: 'Dictionary7'},
  {deweyNum: '430.13',
    title: 'Dictionary9'},
  {deweyNum: '500.13',
    title: 'Dictionary0'},
];

function deweySearch(Dewey, title, library, start = 0, end = library.length - 1) {
  if (start > end) {
    return -1
  }

  const index = Math.floor((start + end) / 2)
  const book = library[index]

  if (parseFloat(book.Dewey) === Dewey) {
    if (book.title === title) {
      return index
    }
    return -1
  }

  else if (parseFloat(book.Dewey) < Dewey) {
    return deweySearch(Dewey, title, library, index + 1, end)
  }
  else if (parseFloat(book.Dewey) > Dewey) {
    return deweySearch(Dewey, title, library, start, index - 1)
  }
}


// ================================ DRILL 5 =======================================
// Using your BinarySearchTree class from your previous lesson, 
// create a binary search tree with the following dataset: 
// 25 15 50 10 24 35 70 4 12 18 31 44 66 90 22. 
// Then implement inOrder(), preOrder(), and postOrder() functions. 
// Test your functions with the following datasets.

// A pre-order traversal should give you the following order: 
// 25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90

// In-order: 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90

// Post-order: 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25

const BST = require('./DSA-BST')

function main () {
  const tree = new BST()
  const data = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22]
  data.forEach(value => tree.insert(value))
  console.log(tree.inOrder())
  console.log(tree.preOrder())
  console.log(tree.postOrder())
}

// main()

// ================================ DRILL 6 =======================================

// Suppose you have a tree representing a command structure of the Starship USS Enterprise.

//                Captain Picard
//              /                \
//     Commander Riker       Commander Data
//       /         \               \
//  Lt. Cmdr.   Lt. Cmdr.          Lt. Cmdr.
//  Worf        LaForge            Crusher
//    /                           /
// Lieutenant                  Lieutenant
// security-officer            Selar


// This tree is meant to represent who is in charge of lower-ranking officers. 
// For example, Commander Riker is directly responsible for Worf and LaForge.  
// People of the same rank are at the same level in the tree. 
// However, to distinguish between people of the same rank, those with more 
// experience are on the left and those with less on the right 
// (i.e., experience decreases from left to right). 
// Suppose a fierce battle with an enemy ensues. 
// Write a program that will take this tree of commanding officers and outlines 
// the ranking officers in their ranking order so that if officers start dropping 
// like flies, we know who is the next person to take over command.



// ================================ DRILL 7 =======================================
// Max profit - The share price for a company over a week's trading is as follows: 
// [128, 97, 121, 123, 98, 97, 105]. 
// If you had to buy shares in the company on a particular day, 
// and sell the shares on a subsequent day, write an algorithm to work out what 
// the maximum profit you could make would be.