// =================DAILY PROBLEM NO. 51 (medium)===============
/*
This problem was asked by Facebook.
Given a function that generates perfectly random numbers between 
1 and k (inclusive), where k is an input, write a function that 
shuffles a deck of cards represented as an array using only swaps.
It should run in O(N) time.
Hint: Make sure each one of the 52! permutations of the 
deck is equally likely.
*/
console.log("// ========== CODING PROBLEM 51 ================")

function shuffle(k){
    const rand = (i) => {
        return Math.floor(Math.random()*k)
    }
    var randDeck = []
    while(randDeck.length <52){
        var num = rand(k)
        if(!randDeck.includes(num)) randDeck.push(num)
    }
    return randDeck
}

console.log(shuffle(52))