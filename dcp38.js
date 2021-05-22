// =================DAILY PROBLEM NO. 38 (hard)===============
/*
This problem was asked by Microsoft.

You have an N by N board. Write a function that, given N, returns the number of possible 
arrangements of the board where N queens can be placed on the board without threatening 
each other, i.e. no two queens share the same row, column, or diagonal.

console.log("// ========== CODING PROBLEM 38 ================")

/*
Board
0/0,    0/1,    0/2

1/0,    1/1,    1/2

2/0,    2/1,    2/2
*/

var N = 8
var allPossibleQueens = []

function getPossibleArrangements(N){
    var possibleArrangements = 0

    const queenCanBeat = (pos1,pos2) => {
        // if a queen can move from pos1 to pos2 then return true otherwise false
        // this can be vertical, horizontal and diagonal
        // pos is an array [h,v]

        // check vertical:
        if(pos1[1] === pos2[1]) return true

        // check horizontal:
        if(pos1[0] === pos2[0]) return true

        // check vertical:
        i=0
        while(i<N){
            i++
            if(pos1[0]+i === pos2[0] && pos1[1]+i === pos2[1]) return true
            if(pos1[0]-i === pos2[0] && pos1[1]-i === pos2[1]) return true
            if(pos1[0]-1 === pos2[0] && pos1[1]+1 === pos2[1]) return true
            if(pos1[0]+1 === pos2[0] && pos1[1]-1 === pos2[1]) return true
        }

        return false
    }

    // place first queen
    
    var queen = [0,0]
    var possibleQueenLocations = [queen]
    var k = 0;l = 0;

    const findArrangements = (i,j) => {

        // set next queen

        var nextQueen = [queen[0]+i,queen[1]+j]
        var add = true;
        // console.log(nextQueen)
        // check if any of the qeens can beat the next Queen
        possibleQueenLocations.forEach(queen => {
            if(queenCanBeat(queen,nextQueen) ){
                add = false
            } 
        })
 
        // if non of the queen can beat nextQueen then add nextQueen here
        if(add){
            // console.log(add)
            possibleQueenLocations.push(nextQueen)
        }

        // increase col until N and then reset col and increase row
        if(j<N){
            j++
        } else {
            j=0
            if(i<N) i++
        }
        console.log(i,j)
        
        // if possibleQeenLocation equals N then increase possible Arrangement by 1
        if(possibleQueenLocations.length === N){
            possibleArrangements++
            allPossibleQueens.push(possibleQueenLocations)
            console.log(`possibleQueenLocations ${JSON.stringify(possibleQueenLocations)}`)
            console.log(possibleArrangements)
        }

        // if last row is not finished do recursive search otherwise start with new start queen
        if(nextQueen[0]<N && nextQueen[1]<N && possibleQueenLocations.length <N){
            // console.log("col and possibleQueenLocations.length less N")
            findArrangements(i,j)
        } else {
            console.log("new queen start position")
            possibleQueenLocations = []
            if(l<N){
                l++
            } else {
                l=0
                if(k<N){
                    k++
                } else {
                    return possibleArrangements
                }
            }
            queen = [k,l]
            possibleQueenLocations = [queen]
            findArrangements(0,0)
        }
    }

    findArrangements(0,0)


    return possibleArrangements;
}

console.log(getPossibleArrangements(8))
console.log(JSON.stringify(allPossibleQueens))