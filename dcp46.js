// =================DAILY PROBLEM NO. 46 (hard)===============
/*
This problem was asked by Amazon.
Given a string, find the longest palindromic contiguous substring. 
If there are more than one with the maximum length, return any one.
For example, the longest palindromic substring of "aabcdcb" is "bcdcb". 
The longest palindromic substring of "bananas" is "anana".
*/
console.log("// ========== CODING PROBLEM 46 ================")

function getPalin(word){
    var palin = "";

    // 1. check if word is symmetric:

    const checkSym = (word) => {
        var wordRev = word.slice(0,word.length).split("").reverse().join("")
        if ( wordRev === word){
            palin = word;
            return palin;
        }
    }

    var wordSym = checkSym(word)
    if(wordSym) return wordSym

    // 2. Check if word is partially symmetric
    var len = word.length

    while(len > 1){
        len--
        console.log(len)

        for (var i=0;i<=word.length - len;i++){
            if(checkSym(word.slice(i,i+len))){
                palin = word.slice(i,i+len)
                return palin
            }
        }
    }
}
const word = 'aabcdcb'
console.log(getPalin(word))