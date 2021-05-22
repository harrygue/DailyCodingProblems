// =================DAILY PROBLEM NO. 63 (easy)===============
/*
This problem was asked by Microsoft.
Given a 2D matrix of characters and a target word, 
write a function that returns whether the word can be 
found in the matrix by going left-to-right, or up-to-down.
For example, given the following matrix:
[['F', 'A', 'C', 'I'],
 ['O', 'B', 'Q', 'P'],
 ['A', 'N', 'O', 'B'],
 ['M', 'A', 'S', 'S']]
and the target word 'FOAM', you should return true, 
since it's the leftmost column. Similarly, 
given the target word 'MASS', you should return true, 
since it's the last row.
*/
console.log("// ========== CODING PROBLEM 63 ================")

const matrix = [['F', 'A', 'C', 'I'],
['O', 'B', 'Q', 'P'],
['A', 'N', 'O', 'B'],
['M', 'A', 'S', 'S']]


const containsWord = (matrix,word) => {
    for(var rowIdx in matrix){
        if(matrix[rowIdx].join("").includes(word)) return `row ${rowIdx} contains ${word}`
        
    }
    let col = []
    for(var c in matrix[0]){
        for(var r in matrix){
            col = [...col,matrix[r][c]]
        }
        if(col.join("").includes(word)) return `Column ${c} contains ${word}`
        col = []
    }
}
console.log(containsWord(matrix,'FOAM'))
console.log(containsWord(matrix,'MASS'))