


class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

// singlyLinkedList
class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){
        let newNode = new Node(val)

        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++;
        return this
    }

    pop(){
        if(!this.head) return undefined
        
        var current = this.head
        var newTail = current
        while(current.next){
            newTail = current
            current = current.next
            // console.log(`Current: ${JSON.stringify(current)}`)
        }
        this.tail = newTail
        this.tail.next = null
        this.length--;
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current;
    }

    // add element as head
    unshift(val){
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            var current = this.head
            this.head = newNode
            this.head.next = current
        }
        this.length++;
        return this;
    }

    // remove first element
    shift(){
        if(!this.head) return undefined;
        var current = this.head
        this.head = this.head.next
        this.length--;
        if(this.length === 0){
            this.tail = null
        }
        return current;
    }

    // get node by index
    get(idx){
        if(idx < this.length && idx>0){
            var i=0;
            var current = this.head
            while(i<idx){
                current = current.next
                i++
            }
            return current
        } else {
            return undefined
        }
    }

    // set node value by index
    set(idx,newVal){
        if(idx < this.length && idx>0){
            this.get(idx).val = newVal
        }
        return this;
    }

    // insert newNode at index
    insert(idx,newVal){
        if(idx === 0){
            return this.unshift(newVal)
        }
        if (idx === this.length){
            return this.push(newVal)
        }
        if(idx >0 && idx < this.length){
            var newNode = new Node(newVal)
            var prev = this.get(idx-1)
            var temp = prev.next
            
            prev.next = newNode
            newNode.next = temp

            this.length++;
            return this
        }
    }

    remove(idx){
        if(idx === 0){
            return this.shift()
        }
        if(idx === this.length){
            return this.pop()
        }
        var prev = this.get(idx-1)
        var current = this.get(idx)
        var after = this.get(idx+1)
        prev.next = after
        this.length--
        return current
    }
}

sll = new SinglyLinkedList();


sll.push(1)
sll.push("a")
sll.push({b:2})
console.log(`show new original list: ${JSON.stringify(sll)}`)
console.log("----------------------------------")
// console.log(`pop: ${JSON.stringify(sll.pop())}`)
// console.log(`pop: ${JSON.stringify(sll.pop())}`)
// console.log(`pop: ${JSON.stringify(sll.pop())}`)
// console.log(`pop: ${JSON.stringify(sll.pop())}`)
console.log(`unshift: ${JSON.stringify(sll.unshift('Harald'))}`)
console.log(`get 2nd element: ${JSON.stringify(sll.get(2))}`)
console.log(`set 2nd element to "Guentner": ${JSON.stringify(sll.set(2,"Guentner"))}`)
console.log(`insert "Erika" at 2nd Element: ${JSON.stringify(sll.insert(4,"Erika"))}`)
console.log(`remove 3rd element: ${JSON.stringify(sll.remove(3).val)}`)
console.log(`shift: ${JSON.stringify(sll.shift().val)}`)
console.log(`show new final list: ${JSON.stringify(sll)}`)

function test(fnSll,fnArr){
    console.log("Sll Function: ")
    console.time()
    var sllResult = fnSll
    //console.log(sllResult)
    console.timeEnd()
    console.log("Array Function: ")
    console.time()
    var arrResult = fnArr
    //console.log(fill)
    console.timeEnd()
}

var longSll = new SinglyLinkedList();
console.time()
var fill = [...Array(1000000).keys()]
fill.forEach(k => longSll.push(k))
console.timeEnd()
// console.time()
// var remLongSll = longSll.remove(9990)
// console.log(remLongSll.val)
// console.timeEnd()
// console.time()
// var remFill = fill.slice(9990,9991)
// console.log(remFill)
// console.timeEnd()

test(longSll.insert(999999,'HARALD'),fill.splice(999999,0,'GUENTNER'))