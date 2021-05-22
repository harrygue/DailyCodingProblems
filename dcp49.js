// =================DAILY PROBLEM NO. 49 (medium)===============
/*
This problem was asked by Amazon.
Given an array of numbers, find the maximum sum of any contiguous 
subarray of the array.
For example, given the array [34, -50, 42, 14, -5, 86], 
the maximum sum would be 137, since we would take elements 42, 14, -5, and 86.
Given the array [-5, -1, -8, -9], the maximum sum would be 0, 
since we would not take any elements.
Do this in O(N) time.
*/
console.log("// ========== CODING PROBLEM 49 ================")

function sumOfSubArray(arr){
    var len = arr.length
    var resultArr = []
    while(len>0){
        var n = arr.length - len + 1
        for(var i=0;i<n;i++){
            var subArr = arr.slice(i,i+len)
            console.log(subArr)
            var sum = subArr.reduce((total,el) => (total+el))
            console.log(sum)
            resultArr.push(sum)
        }
        len--
    }
    console.log(resultArr)
    // https://stackoverflow.com/questions/1669190/find-the-min-max-element-of-an-array-in-javascript
    return Math.max(...resultArr) // spread operator otherwise Math.max.apply(null,resultArr)
}
arr= [34, -50, 42, 14, -5, 86]
console.log(sumOfSubArray(arr))
