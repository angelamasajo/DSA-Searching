// SEARCHING AND TRAVERSAL IN A TREE

const Queue = require('./Queue')

class BinarySearchTree {
  constructor (key = null, value = null, parent = null) {
    this.key = key
    this.value = value
    this.parent = parent
    this.left = null
    this.right = null
  }

  // DEPTH-FIRST SEARCH (DFS)
  // start from given node (usually the root) and traverse as far as you can down
  // When you reach node that has no children, you start backtracking
  // this example traverses nodes adding them to a values array
  // O(n) - as each node needs to be visited
  dfs(values = []) {
    // if there is a left hand branch then you recursively search nodes there
    // you then add value at current node to the array
    if (this.left) {
      values = this.left.dfs(values)
    }
    values.push(this.value)

    // recursively search the right hand branch
    if (this.right) {
      values = this.right.dfs(values)
    }
    return values
  }

  // BREADTH-FIRST SEARCH
  // works across rows of a tree; top row first, then second row, etc
  // tree visited level by level, in order todo this, you need FIFO queue
  // so you can store all the siblings in the queue and process them in order
  // when you visit node you and add to queue.
  // nodes are removed from queue and their children are visited, 
  // adding more to queue
  // O(n) - each node needs to be visited
  bfs(tree, values = []) {
    // assuming queue is implemented
    const queue = new Queue()
    const node = tree.root
    queue.enqueue(node)
    while (queue.length) {
      // remove from the queue
      const node = queue.dequeue()
      // add that value from the queue to an array
      values.push(node.value)

      // add left child to the queue
      if (node.left) {
        queue.enqueue(node.left)
      }

      // add right child to the queue
      if (node.right) {
        queue.enqueue(node.right)
      }
    }
    return values
  }
}

module.exports = BinarySearchTree