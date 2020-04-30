class BSTNode {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    isEmpty() {
        return this.root === null;
    }
    add(value, node=this.root) {
        // start at root
        // if root is not null
        if(this.isEmpty()) {
            this.root = new BSTNode(value);
            return this;
        }
        // which direction should we go? (if value >= root.value) go right
        if(value >= node.value) {
            // we are looking right!
            // check if right is empty
            if(node.right === null) {
                // if empty... add node there!
                node.right = new BSTNode(value);
                return this;
            }
            return this.add(value, node.right);
        } else {
            // we are looking left!
            // check if left is empty
            if(node.left === null) {
                // if empty... add node there!
                node.left = new BSTNode(value);
                return this;
            }
            return this.add(value, node.left);
        }
        // if not empty... DESCEND
    }
    contains(value, node=this.root) {
        // return true|false if tree contains 'value'
        if(node === null) {
            return false;
        }
        if(node.value === value) {
            return true;
        }
        // go searching in one direction
        if(value >= node.value) {
            // go right!
            return this.contains(value, node.right);
        } else {
            // go left!
            return this.contains(value, node.left);
        }
    }
    size(node=this.root) {
        if(node === null) { return 0; }
        return 1 + this.size(node.left) + this.size(node.right);
    }
    displayValues(node=this.root) {
        if(node === null) {
            return;
        }
        this.displayValues(node.right);
        console.log(node.value);
        this.displayValues(node.left);
    }
    min() {
        if(this.isEmpty()) {
            return null;
        }
        var current = this.root;
        while(current.left !== null) {
            current = current.left;
        }
        return current.value;
    }
}
var tree = new BinarySearchTree();
tree.add(5).add(2).add(12).add(1).add(3).add(9).add(21).add(19).add(25);
console.log(tree.contains(-30));