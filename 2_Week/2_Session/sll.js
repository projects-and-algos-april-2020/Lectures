class Node {
    constructor(value) {
        this.value = value;
        // next:Node
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        // head: Node
        this.head = null;
    }
    // add to the FRONT of the list
    add(value) {
        // 1) make a new node!
        var newNode = new Node(value);
        // 2) attach newNode's next to the head
        newNode.next = this.head;
        // 3) now we can safely promote newNode to be head node
        this.head = newNode;
    }
    size(node=this.head) {
        if(node === null) {
            return 0;
        }
        return 1 + this.size(node.next);
    }
    isEmpty() {
        return this.head === null;
    }
    addBack(value) {
        // edge case! check for empty list!
        // if list is empty?
        if(this.isEmpty()) {
            return this.add(value);
        }
        // 1) make a new node!
        var newNode = new Node(value);
        // 2) get to the back!
        var current = this.head;
        while(current.next !== null) {
            current = current.next;
        }
        // 3) set current.next to the new node
        current.next = newNode;

    }
    removeFirst() {
        // delete first node in the list
        // DONT DELETE THE WHOLE LIST!
        if(this.isEmpty()) {
            throw Error("LIST IS EMPTY SILLY!")
        }
        this.head = this.head.next;

    }
    removeValue(value) {
        // remove first occurrence of a node with provided value
        // traverse list!
        // EDGE CASE 1: head contains value
        if(this.head.value === value) {
            return this.removeFirst();
        }
        // EDGE CASE 2: list is empty
        if(this.isEmpty()) {
            if(this.isEmpty()) {
                throw Error("LIST IS EMPTY SILLY!")
            }
        }
        var current = this.head;
        while(current.next !== null) {
            // look ahead for value
            if(current.next.value === value) {
                // 'delete' next node, by moving current's pointer one over
                current.next = current.next.next;
            }
            current = current.next;
        }
    }
    displayValues() {
        // mvp: loop through the list, log each value
        // deluxe: log values as "[5,10,15,100]"
        var output = "[";
        var current = this.head;
        while(current !== null) {
            output += `${current.value}`
            if(current.next !== null) {
                output += ","
            } else {
                output += "]"
            }
            current = current.next;
        }
        console.log(output);
    }
}

var myList = new SinglyLinkedList();

myList.add(15);
myList.add(10);
myList.add(5);
myList.addBack(100);
myList.removeValue(10);
myList.displayValues();
var sizeOfMyList = myList.size();