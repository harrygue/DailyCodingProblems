// =================DAILY PROBLEM NO. 34 (medium)===============
/*
This problem was asked by Quora.
Given a string, find the palindrome that can be made by inserting the 
fewest number of characters as possible anywhere in the word. 
If there is more than one palindrome of minimum length that can be made, 
return the lexicographically earliest one (the first one alphabetically).

For example, given the string "race", you should return "ecarace", 
since we can add three letters to it (which is the smallest amount to make a palindrome). 
There are seven other palindromes that can be made from "race" by adding three letters, 
but "ecarace" comes first alphabetically.

As another example, given the string "google", you should return "elgoogle".
*/
console.log("// ========== CODING PROBLEM 34 ================")

var word = "ottomotor"


// 1. check if word is symetric
// check if length is even or odd then loop from both sides and check if letters are same
// 2. check if word is partially symmetric on either end
// if that is the case then add the remaining non symetric letter to the other end
// 


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

        // check symetry at the head
        var headSym = checkSym(word.slice(0,len))
        
        // check symetry at the tail
        var tailSym = checkSym(word.slice(word.length-len,word.lenght))
        console.log(tailSym)
        if(headSym){
            var rest = word.slice(headSym.length,word.length)
            console.log(rest)
            palin = [rest.split("").reverse().join(""),word].join("")
            return palin
        }

        if(tailSym){
            var rest = word.slice(0,word.length-len)
            console.log(rest)
            palin = [word,rest.split("").reverse().join("")].join("")
            return palin
        }
    }

    return palin
}

console.log(getPalin(word))