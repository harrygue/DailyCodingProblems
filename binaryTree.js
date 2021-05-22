// --------- Binary Search Tree ----------------

/*
Every left child is less than its parent
Every right child is greater than its parent

                15

        3                   36

    2       12          28      39
*/

class Node {
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

class BST {
    constructor(val){
        this.root = new Node(val)
        this.count = 1

    }

    size() {
        return this.count
    }

    insert(val) {
        this.count++
        let newNode = new Node(val)
        const searchTree = (node) => {
            // if value < node.value, go left
            if (val < node.val){
                // if no left child, append new node
                if(!node.left){
                    console.log('new left node')
                    node.left = newNode
                } 
                // if left child, look left again
                else {
                    console.log(val,' goes left!')
                    searchTree(node.left)
                }
            }
            // if value > node.value, go right
            if (val > node.val) {
                if(!node.right){
                    console.log('new right node')
                    node.right = newNode
                } else {
                    console.log(val,'goes right!')
                    searchTree(node.right)
                }
            }
        }

        console.log(val,' ROOT')
        searchTree(this.root)
    }

    min() {
        let currentNode = this.root

        while(currentNode.left){
            currentNode = currentNode.left
            console.log(currentNode.val)
        }

        return currentNode.val
    }

    max() {
        let currentNode = this.root

        while(currentNode.right){
            currentNode = currentNode.right
        }

        return currentNode.val
    }

    contains(val) {
        let currentNode = this.root

        while(currentNode){
            if (val === currentNode.val){
                return true
            }
            if (val < currentNode.val){
                currentNode = currentNode.left
            } else {
                currentNode = currentNode.right
            }
        }

        return false
    }

    // depth first search - branch by branch

    // in-order
    // left, root, right
    // 2,3,12,15,28,36,39
    dfsInOrder(){
        let result = []

        const traverse = node => {
            // if left child exists go left again
            if (node.left) traverse(node.left)
            result.push(node.val)
            // if right child exists go right again
            if (node.right) traverse(node.right)
        }

        traverse(this.root)

        return result
    }

    // pre-order
    // root, left, right
    // 15,3,2,12,36,28,39
    dfsPreOrder(){
        var result = []

        const traverse = node => {
            result.push(node.val)

            // if left child exists go left again
            if (node.left) traverse(node.left)

            // if right child exists go right again
            if (node.right) traverse(node.right)
        }

        traverse(this.root)

        return result
    }

    // post-order
    // left, right, root
    dfsPostOrder(){
        var result = []

        const traverse = node => {

            // if left child exists go left again
            if (node.left) traverse(node.left)

            // if right child exists go right again
            if (node.right) traverse(node.right)

            result.push(node.val)
        }

        traverse(this.root)

        return result
    }

    // breadth first search - level by level
    // use a queue
    // 15,3,36,2,12,28,39
    bfs(){
        let result = []
        let queue = []

        queue.push(this.root)

        while(queue.length){
            // get first item of queue
            let currentNode = queue.shift()

            result.push(currentNode)

            if(currentNode.left){
                queue.push(currentNode.left)
            }
            if(currentNode.right){
                queue.push(currentNode.right)
            }
        }


        return result
    }
}

var arr = [15,3,36,2,12,28,39]
console.log(arr)
const bst = new BST(15)
arr.forEach(el => {
    bst.insert(el)
})


console.log(JSON.stringify(bst), bst.size())
console.log(bst.min(), bst.max())
console.log(bst.dfsInOrder())
console.log(bst.dfsPreOrder())
console.log(bst.dfsPostOrder())
console.log(bst.bfs())

console.log(bst.dfsInOrder().slice(-2)[0])