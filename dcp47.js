// =================DAILY PROBLEM NO. 47 (medium)===============
/*
This problem was asked by Google.
Given pre-order and in-order traversals of a binary tree, 
write a function to reconstruct the tree.
For example, given the following preorder traversal:
[a, b, d, e, c, f, g]
And the following inorder traversal:
[d, b, e, a, f, c, g]
You should return the following tree:
*/
console.log("// ========== CODING PROBLEM 47 ================")

class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(val){
        console.log(val)
        this.root = new Node(val)
        this.count = 1
    }

    size(){
        return this.count
    }

    insert(val){
        this.count++
        var newNode = new Node(val)
        const searchTree = (node) => {
            if(val < node.val){
                if(!node.left){
                    node.left = newNode
                } else {
                    searchTree(node.left)
                }
            }
            if(val > node.val){
                if(!node.right){
                    node.right = newNode
                } else {
                    searchTree(node.right)
                }
            }
        }
        searchTree(this.root)
    }

    min(){
        var node = this.root
        while(node.left){
            node = node.left
        } 
        return node.val
    }

    max(){
        var node = this.root
        while(node.right){
            node = node.right
        } 
        return node.val
    }

    contains(val){
        var node = this.root

        const searchTree = (val) => {
            console.log(node.val)
            if(node.val === val){
                console.log('value found')
                return true
            }
            if(node.right && val > node.val){
                console.log('goes right')
                node = node.right
                searchTree(val)
            }
            if(node.left && val < node.val){
                console.log('goes left')
                node = node.left
                searchTree(val)
            }
            
            return false
        }

        return searchTree(val)
    }

    // DEPTH FIRST SEARCH
    // in order - left,root,right
    [d, b, e, a, f, c, g]
    dfs_inOrder(){

        var result = []
        const traverse = node => {
            if(node.left){
                console.log('go left')
                traverse(node.left)
            }
            result.push(node.val)
            console.log(result)
            if(node.right){
                console.log('go right')
                traverse(node.right)
            }
            console.log(result)
        }
        traverse(this.root)
        return result
    }

    // pre order - root,left,right
    dfs_preOrder(){
        var result = []
        const traverse = node => {
            result.push(node.val)

            if(node.left){
                console.log('go left')
                traverse(node.left)
            }
            if(node.right){
                console.log('go right')
                traverse(node.right)
            }
            console.log(result)
        }
        traverse(this.root)
        return result
    }

    // post order - right,root,left
    dfs_postOrder(){
        var result = []
        const traverse = node => {
            if(node.right){
                console.log('go right')
                traverse(node.right)
            }

            result.push(node.val)

            if(node.left){
                console.log('go left')
                traverse(node.left)
            }

            console.log(result)
        }
        traverse(this.root)
        return result
    }

    // BREADTH FIRST SEARCH - LEVEL BY LEVEL,
    // use a queue
}
// 4:'d',
var obj = {2:'b',5:'e',1:'a',6:'f',3:'c',7:'g'}
var bst = new BST(4)
for(var v in obj){
    bst.insert(v)
}
// var bst = new BST(0)
// bst.insert('a')
// bst.insert('b')
// bst.insert('c')
// bst.insert('d')
// bst.insert('e')
// bst.insert('f')
// bst.insert('g')
console.log(JSON.stringify(bst))
console.log('MIN: ',bst.min())
console.log('MAX: ',bst.max())
console.log('contains 8:',bst.contains(8))
console.log('contains 14:',bst.contains(14))
console.log('dfs_inOrder: ',JSON.stringify(bst.dfs_inOrder()))
console.log('dfs_preOrder: ',JSON.stringify(bst.dfs_preOrder()))
console.log('dfs_postOrder: ',JSON.stringify(bst.dfs_postOrder()))
