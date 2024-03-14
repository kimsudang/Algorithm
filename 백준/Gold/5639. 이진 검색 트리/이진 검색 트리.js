const fs = require('fs');

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    postOrder(node, result) {
        if (node !== null) {
            this.postOrder(node.left, result);
            this.postOrder(node.right, result);
            result.push(node.data);
        }
    }
}

function solution(input) {
    const tree = new BinaryTree();
    input.forEach(value => {
        tree.insert(parseInt(value));
    });

    const result = [];
    tree.postOrder(tree.root, result);
    return result.join('\n');
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const values = input.map(line => line.trim());
const answer = solution(values);
console.log(answer);
