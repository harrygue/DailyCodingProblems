// ======================DAILY CODING PROBLEM  ============
// Staircase, N steps, can walk 1 or 2 steps at a time
// given N, write a function that return the number of unique ways you can climb the 
// staircase

function numUniqueWays(N,s){

    var sum=0
    while(sum<N){
        
    }

}


// =================DAILY PROBLEM NO. 13 ===============
const k = 5;
const s = 'Harald Guentner';


function findLengthOfLongestSubstr(s,k){
    for(var i = s.length; i>= k; i--){
        for(var j = 0; j<=s.length-i;j++){
            const substr = s.slice(j,j+i)
            //console.log(`i: ${i}, j: ${j}, substr: ${substr}`)
            const subset = new Set(substr)
            //console.log(subset.size)
            if(subset.size === k) return substr;
        }
    }
}

//alert(findLengthOfLongestSubstr(s,k))

// =================DAILY PROBLEM NO. 26 ===============
/* 
Given a singly linked list and an integer k, remove the kth last element from the list. k is guaranteed to be smaller than the length of the list.
The list is very long, so making more than one pass is prohibitively expensive.
Do this in constant space and in one pass.
*/

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    get(idx){
        if (!this.head) return undefined;
        var i = 0
        var current = this.head
        while (i<idx){
            current = current.next
            i++
        }
        return current
    }

    push(val){
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail=this.head 
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    pop(){
        if(this.lenth===0) return null;
        var current = this.head
        var newTail = this.head
        
        while(current.next){
            newTail = current
            current = current.next
            console.log(`newTail: ${JSON.stringify(newTail)}`)
        }

        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length===0){
            this.head=null
            this.tail=null
        }
        return current
    }

    remove(idx){
        if(this.length===0 || idx>this.length) return null;
        if(idx===this.length) return this.pop()
        if(idx===0){
            var current = this.head
            this.head = this.head.next
            this.length--
            return current
        }
        var current = this.get(idx)
        var prev = this.get(idx-1)
        var after = this.get(idx+1)
        prev.next = after
        this.length--
        return current
    }
}

var ll = new LinkedList()
var fill = [...Array(5).keys()]
fill.forEach(key => ll.push(key))

console.log(`new Linked List: ${JSON.stringify(ll)}`)

var kk = 5
var removedEl = ll.remove(ll.length-kk).val
console.log(removedEl)
console.log(`new Linked List: ${JSON.stringify(ll)}`)
console.log(`remove last: ${ll.pop().val}`)
console.log(`new Linked List: ${JSON.stringify(ll)}`)


// =================DAILY PROBLEM NO. 29 (easy ?? was tricky 1.5h)===============
/* 
This problem was asked by Amazon.
Run-length encoding is a fast and simple method of encoding strings. The basic idea is to represent repeated successive characters as a single count and character. For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".
Implement run-length encoding and decoding. You can assume the string to be encoded have no digits and consists solely of alphabetic characters. You can assume the string to be decoded is valid.
*/

function encode(str){
    var encArr = [str[0],1]
    // count similar characters
    Array.from(str).forEach((c) => {
        if(encArr.slice(-2)[0]===c){
            ++encArr[encArr.length-1]
        } else {
            encArr.push(c)
            encArr.push(1)
        }
    })
    return encArr.join("");
}

function decode(str){
    var decArr = []
    Array.from(str).forEach((c,i) => {
        if(c.match(/[0-9]/g)){
            for(var j = 0; j<c; j++){
                decArr.push(str[i-1])
            }
        }
    })
    return decArr.join("")
}

var res = encode("AAAABBBCCDAA")
console.log(res)
var dec = decode(res)
console.log(dec)

// =================DAILY PROBLEM NO. 30 (medium ?? was super easy, 15 min)===============
/* 
This problem was asked by Facebook.
You are given an array of non-negative integers that represents a two-dimensional elevation map
where each element is unit-width wall and the integer is the height. 
Suppose it will rain and all spots between two walls get filled up.
Compute how many units of water remain trapped on the map in O(N) time and O(1) space.
For example, given the input [2, 1, 2], we can hold 1 unit of water in the middle.
Given the input [3, 0, 1, 3, 0, 5], we can hold 3 units in the first index, 2 in the second, 
and 3 in the fourth index (we cannot hold 5 since it would run off to the left), so we can trap 8 units of water.
*/

function getUnitsOfWater(arr){
    // get lowest side (max for fill height)
    // loop through array and sum up all deltas if they are positive(lowest side - arr[i])
    var leftHeight = arr[0]
    var rightHeight = arr.slice(-1)[0]
    var lowestHeight = Math.min(leftHeight,rightHeight)

    var unitsOfWater = 0;
    arr.forEach(h => {
        unitsOfWater += lowestHeight-h>=0 && lowestHeight-h
    })
    return unitsOfWater
}
var arr = [2,1,2]//[3, 0, 1, 3, 0, 5]
console.log(getUnitsOfWater(arr))


// =================DAILY PROBLEM NO. 28 (medium)===============
/*
This problem was asked by Palantir.
Write an algorithm to justify text. Given a sequence of words and an integer line length k, 
return a list of strings which represents each line, fully justified.
More specifically, you should have as many words as possible in each line. 
There should be at least one space between each word. 
Pad extra spaces when necessary so that each line has exactly length k. 
Spaces should be distributed as equally as possible, with the extra spaces, if any, 
distributed starting from the left.

If you can only fit one word on a line, then you should pad the right-hand side with spaces.

Each word is guaranteed not to be longer than k.

For example, given the list of words ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"] and k = 16, you should return the following:

["the  quick brown", # 1 extra space on the left
"fox  jumps  over", # 2 extra spaces distributed evenly
"the   lazy   dog"] # 4 extra spaces distributed evenly
*/
console.log("// ========== CODING PROBLEM 28 ================")
function justifyText(words,k){

    // loop through array and add lettercount word by word plus 1 space per word while lettercount is less than k
    // calculate delta k - lettercount and divide through selected word count - 1: space = delta/(word_cnt-1) 
    // create new string and add word by word plus space starting from left
    // check if new string is less than k and built remaining delta
    // if remaining delta is >1 then start to add 1 space from first word until there is no remaining delta
    // repeat above steps for next words

    var resultString = ""
    var letterCount=0
    var resultArr = []
    var tempStr = ""
    var tempArr = []
    var newLine = true


    words.forEach((word,idx) => {
        if (idx===0){
            tempArr.push(word)
            letterCount = tempArr.join(" ").length
        }

        if(letterCount<k && idx > 0){
            
            tempArr.push(word) 
            letterCount = tempArr.join(" ").length
            console.log(`letterCount: ${letterCount}, tempArr: ${JSON.stringify(tempArr)}`)

        } 
        
        if(letterCount >= k && idx > 0){

            var delta = k-tempArr.join("").length
            var spaceCount = Math.floor(delta/(tempArr.length-1))
            var remainder = delta % (tempArr.length-1)
            console.log(`spaceCount ${spaceCount}, remainder ${remainder}`)
            var spaceArr = []
            for(var i = 0; i<spaceCount;i++){
                spaceArr.push(" ")
            }
            var space = spaceArr.join("")
            tempStr = tempArr.join(space)


            console.log(tempStr)
            resultArr.push(tempStr)
            resultArr.push("\n")

            tempArr = [word]
            tempStr = ""
            letterCount = word.length

        }

    })
    console.log(resultArr.join(""))
}

function justifyText2(words,k){
    var i = 0
    var letterCount = words[0].length;
    var tempArr = []
    var tempStr = ""
    var spaceArr = []
    var space = ""
    var resultArr = []
    var resultStr = ""
    var maxWordsPerLine = 0;
    console.log(`words.length ${words.length}`)
    while(i <= words.length) {

        if(letterCount < k){
            tempArr.push(words[i])
            letterCount = tempArr.join(" ").length
            console.log(letterCount)
            console.log(tempArr)
            i++
        } else {

            var lastWord = tempArr.pop()
            var delta = k - tempArr.join("").length

            var spaceCnt = Math.floor(delta / (tempArr.length - 1))
            var reminder = delta % (tempArr.length - 1)
            console.log(`delta: ${delta}, spaceCnt: ${spaceCnt}, reminder: ${reminder}`)
            for(var j=0;j<spaceCnt;j++) spaceArr.push(" ")
            space = spaceArr.join("")
            // for(var k=0;k<reminder;k++) tempArr[0] += " "
            tempStr = tempArr.join(space)

            resultArr.push(tempStr)
            resultArr.push("\n")

            i--

            console.log(`i: ${i}, tempStr: ${tempStr}`)
            letterCount = lastWord.length;
            tempArr = []
            spaceArr = []
        }
        
    }
    console.log(i)
    if(i - 1 === words.length){
        var delta = k - tempArr.join("").length

        var spaceCnt = Math.floor(delta / (tempArr.length - 1))
        var reminder = delta % (tempArr.length - 1)
        console.log(`delta: ${delta}, spaceCnt: ${spaceCnt}, reminder: ${reminder}`)
        for(var j=0;j<spaceCnt;j++) spaceArr.push(" ")
        space = spaceArr.join("")
        //tempArr[0] += reminder
        tempStr = tempArr.join(space)
        resultArr.push(tempStr)
        resultArr.push("\n")
        i--
        console.log(`i: ${i}, tempStr: ${tempStr}`)
        letterCount = lastWord.length;
        tempArr = []
    }
    console.log(resultArr.join(""))
} 

const loremIpsum = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
const wordsLorem = loremIpsum.split(" ")
const words = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]
const k_len = 16
// justifyText2(wordsLorem,k_len)

// =================DAILY PROBLEM NO. 31 (easy)===============
/*
This problem was asked by Google.
The edit distance between two strings refers to the minimum number of character insertions, 
deletions, and substitutions required to change one string to the other. 
For example, the edit distance between “kitten” and “sitting” is three: 
substitute the “k” for “s”, substitute the “e” for “i”, and append a “g”.
Given two strings, compute the edit distance between them.
*/
console.log("// ========== CODING PROBLEM 31 ================")

function editDistance(str1,str2){
    var count = 0
    var shorterStr = str1.length < str2.length ? str1 : str2;
    for(var i = 0; i < shorterStr.length;i++){
        if (str1[i] !== str2[i]) count++
    }

    count += Math.abs(str2.length - str1.length)
    console.log(`edit Distance between two strings: ${count}`)
}

editDistance("kitten","sitting")

