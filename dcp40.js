// =================DAILY PROBLEM NO. 40 (hard)===============
/*
This problem was asked by Google.
Given an array of integers where every integer occurs three times except for one integer, 
which only occurs once, find and return the non-duplicated integer.
For example, given [6, 1, 3, 3, 3, 6, 6], return 1. Given [13, 19, 13, 13], return 19.
Do this in O(N) time and O(1) space.
*/
console.log("// ========== CODING PROBLEM 40 ================")

const arr=[13, 19, 13, 13]

function checkSingle(arr){
    const sortedArr = arr.sort()

    const len = arr.length
    var el = sortedArr.pop()
    var i=0
    var falseCount = 0
    while(i<len-1){
        var current = sortedArr.pop()
        console.log(current)
        if(current===el){
            console.log(current===el)
            falseCount=0
        } else {
            falseCount++
            console.log(falseCount)
            if(falseCount===2) return el
        }
        el = current
        i++
    }

}

const checkSingle2 = (arr) => {
    var i = 0
    var singleArr = []
    var dupArr = []
    while(i<arr.length){
        var el = arr.pop()
        if(!singleArr.includes(el)){
            singleArr.push(el)
        } else {
            dupArr.push(el)
        }
    }
    var el = null
    var singleEl = singleArr.find(x => !dupArr.includes(x))
    return singleEl
}

console.log(checkSingle2(arr))

