// =================DAILY PROBLEM NO. 37 (easy)===============
/*
This problem was asked by Google.
The power set of a set is the set of all its subsets. 
Write a function that, given a set, generates its power set.
For example, given the set {1, 2, 3}, 
it should return {{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}.
You may also use a list or array to represent a set.
*/
console.log("// ========== CODING PROBLEM 37 ================")

const set = new Set([1,2,3])

const getPowerSet = (set) => {
    var powerArr = [{},set] 
    console.log(powerArr)
    var arr1 = Array.from(set)
    var arr2 = arr1.slice(0,arr1.length)
    console.log(arr1===arr2)
    for(var i=0;i<arr1.length;i++){
        for(var j=0;j<arr1.length;j++){
            console.log(i,j)
            var prod = [arr1[i],arr2[j]]
            console.log(prod)
            var prodSet = new Set(prod)
            powerArr.push(prodSet)
        }
    }
    return new Set(powerArr.sort())
}

console.log(getPowerSet(set))