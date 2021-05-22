// =================DAILY PROBLEM NO. 18 (hard)===============
/*
This problem was asked by Google.
Given an array of integers and a number k, where 1 <= k <= length of the array, 
compute the maximum values of each subarray of length k.
For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, 
we should get: [10, 7, 8, 8], since:
10 = max(10, 5, 2)
7 = max(5, 2, 7)
8 = max(2, 7, 8)
8 = max(7, 8, 7)
Do this in O(n) time and O(k) space. You can modify the input array in-place and you do not need to store the results. You can simply print them out as you compute them.
*/
console.log("// ========== CODING PROBLEM 18 ================")

function maxOfSubArray(arr,k){
    var result = []
    for(var i = 0; i<=arr.length-k;i++){
        var subArr = arr.slice(i,i+k)
        /*
        data = [4, 2, 6, 1, 3, 7, 5, 3]
        Math.max.apply(Math, data);
        What this effectively does is the same as if you manually specified 
        each argument without an array:
        Math.max(4, 2, 6, 1, 3, 7, 5, 3);
        */
        result.push(Math.max.apply(Math,subArr))
    }
    return result
}
var arr = [10, 5, 2, 7, 8, 7, 13, 35]
var k = 3
console.log(maxOfSubArray(arr,k))