// =================DAILY PROBLEM NO. 23 (easy)===============
/*
This problem was asked by Google.
You are given an M by N matrix consisting of booleans that represents a board. 
Each True boolean represents a wall. Each False boolean represents a tile you can walk on.
Given this matrix, a start coordinate, and an end coordinate, 
return the minimum number of steps required to reach the end coordinate from the start. 
If there is no possible path, then return null. You can move up, left, down, and right. 
You cannot move through walls. You cannot wrap around the edges of the board.

For example, given the following board:

[[f, f, f, f],
[t, t, f, t],
[f, f, f, f],
[f, f, f, f]]
and start = (3, 0) (bottom left) and end = (0, 0) (top left), 
the minimum number of steps required to reach the end is 7, 
since we would need to go through (1, 2) because there is a wall 
everywhere else on the second row.
*/
console.log("// ========== CODING PROBLEM 23 ================")

let board = [[false,false,false,false],[true,true,false,true],[false,false,false,false,],[false,false,false,false,],]
let start = [0,3]
let end = [2,0]

function getVal(board,pos){
    return board[pos[0]][pos[1]]
}

function validPos(pos){
    if(pos[0]>=0 && pos[0] < board.length && pos[1]>=0 && pos[1] < board[0].length){
        return true
    }
    return false
}

function blockedPos(pos){
    if(getVal(board,pos)){
        return true
    }
    return false
}

// pos = [row,col], move = "up","right","down","left"
function getNewPos(pos,move){

    var np = null;

    switch(move){
        case "up":
            np = [pos[0]-1,pos[1]];
            break;
        case "right":
            np = [pos[0],pos[1]+1];
            break;
        case "down":
            np = [pos[0]+1,pos[1]];
            break;
        case "left":
            np = [pos[0],pos[1]-1];
            break;
    } 

    console.log(`NewPos: ${np}`)

    return np
}



function walkUp(board,start,end){

    minNumberOfSteps = 0;
    direction = ["up","right","down","left"]
    let pos = start
    console.log(`walkUp: ${pos}`)
    console.log(`StartValue: ${getVal(board,pos)}, Start Pos.: ${pos}`) // ${getVal(pos)},
    // var newPos = start;
    var i = 0
    var k=0
    var visitedPos = [start]

    const go = (pos,i) => {
        var currentPos = pos.slice(0,pos[pos.length])
        newPos = getNewPos(pos,direction[i])
        console.log(`currentPos: ${currentPos}, newPos: ${newPos}, end: ${end}`)
        if(newPos === end) return minNumberOfSteps
        if(validPos(newPos) && !blockedPos(newPos) && !visitedPos.includes(newPos)){
            console.log(`test get New Val: ${getVal(board,newPos)}`)
            minNumberOfSteps++
            visitedPos.push(newPos)
            if(newPos[0]>end[0]){
                go(newPos,0) // up
            } else if(newPos[0]<end[0]){
                go(newPos,2) // down
            }
            if(newPos[1]>end[1]){
                go(newPos,3) // left
            } else if (newPos[1]<end[1]){
                go(newPos,1) // right
            }

        } else {
            i++
            go(currentPos,i)
        }

    }

     go(start,i)
    console.log("Final Result: ",minNumberOfSteps);
}

walkUp(board,start,end)