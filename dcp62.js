// =================DAILY PROBLEM NO. 62 (med)===============
/*
This problem was asked by Facebook.
There is an N by M matrix of zeroes. Given N and M, 
write a function to count the number of ways of starting at the
 top-left corner and getting to the bottom-right corner. 
 You can only move right or down.
For example, given a 2 by 2 matrix, you should return 2, 
since there are two ways to get to the bottom-right:
•	Right, then down
•	Down, then right
Given a 5 by 5 matrix, there are 70 ways to get to the bottom-right.

*/
console.log("// ========== CODING PROBLEM 62 ================")

const matrix = (N,M) => {
    const row = [...Array(M).keys()].fill(0)
    let mat = []
    for(var i=0;i<N;i++){
        mat.push(row)
    }
    return mat
}
const checkWaysTLBR = (matrix) => {
    
}
console.log(matrix(5,4))