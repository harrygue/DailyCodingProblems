// =================DAILY PROBLEM NO. 42 (hard)===============
/*
This problem was asked by Google.
Given a list of integers S and a target number k, 
write a function that returns a subset of S that adds up to k. 
If such a subset cannot be made, then return null.
Integers can appear more than once in the list. You may assume all numbers in the list are positive.
For example, given S = [12, 1, 61, 5, 9, 2] and k = 24, return [12, 9, 2, 1] since it sums up to 24.
*/
console.log("// ========== CODING PROBLEM 42 ================")

function sumUp(arr,k){
    var sumArr = []
    var diff = k
    var newArr = arr.filter(x => x<k).sort((a,b) => b-a)
    console.log(newArr)
    const loop = (newArr) => {
        var el = newArr.shift()
        sumArr.push(el)
        diff = diff - el
        var findEl = newArr.find(x => x === diff)
        console.log(`el: ${el}, diff: ${diff}, newArr: ${newArr}sumArr: ${sumArr}`)
        if(findEl){
            sumArr.push(findEl)
            return sumArr
        } else if(newArr.length>1 && newArr[0] < diff){
            loop(newArr)
        } else  if(newArr.length>1 && newArr[0] > diff){
            console.log(`newArr: ${newArr}`)
            newArr.splice(0,1)
            console.log(`newArr: ${newArr}`)
            loop(newArr)

        } else return null
    }
    loop(newArr)

    return sumArr
}

S = [12, 1, 61, 5, 9, 2]
k = 24

console.log(sumUp(S,k))