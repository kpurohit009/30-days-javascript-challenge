//Activity 1 : Linked List
//Task 1
class Node{
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}
const firstNode = new Node(5);
const secondNode = new Node(10);
firstNode.next = secondNode;
console.log(firstNode.value);
console.log(firstNode.next.value);

//Task 2
class Link{
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
      this.head = null;
    } 
    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
          this.head = newNode; 
        } else {
          let current = this.head;
          while (current.next !== null) {
            current = current.next;
          }
          current.next = newNode; 
        }
    }
    
    removeFromEnd() {
        if (this.head === null) {
          return; 
        }
        if (this.head.next === null) {
          this.head = null; 
        } else {
          let current = this.head;
          while (current.next.next !== null) {
            current = current.next; 
          }
          current.next = null; 
        }
    }
    
    display() {
        let current = this.head;
        let result = [];
        while (current !== null) {
          result.push(current.value); 
          current = current.next; 
        }
        console.log(result.join(' -> '));
    }
} 
const list = new LinkedList();
list.append(2);
list.append(4);
list.append(6);
list.display();

list.removeFromEnd();
list.display();

list.removeFromEnd();
list.removeFromEnd();
list.display();


//Activity 2 : Stack
//Task 3
class Stack{
    constructor(){
        this.items = [];
    }
    push(item){
        this.items.push(item);
    }
    pop(){
        if(this.isEmpty()){
            throw new Error('Stack is empty');
        }
        return this.items.pop();
    }
    peek(){
        if(this.isEmpty()){
            throw new Error('Stack is empty');
        }
        return this.items[this.items.length - 1];
    }
    isEmpty(){
        return this.items.length === 0;
    }
    size(){
        return this.items.length;
    }
    clear(){
        this.items = [];
    }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.size());

stack.clear();
console.log(stack.isEmpty());

//Task 4
function strReverse(str){
    const stack = new Stack();
    for(const char of str){
        stack.push(char);
    }
    let reversedStr = '';

    while(!stack.isEmpty()){
        reversedStr += stack.pop();
    }
    return reversedStr;
}
const mainString = "Krunal";
const reversedString = strReverse(mainString);

console.log(reversedString);


//Activity 3 : Queue
//Task 5
class Queue{
    constructor(){
        this.items = [];
    }
    enqueue(item){
        this.items.push(item);
    }
    dequeue(){
        if(this.isEmpty()){
            throw new Error('Queue is Empty');
        }
        return this.items.shift();
    }
    front(){
        if(this.isEmpty()){
            throw new Error('Queue is Empty');
        }
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    clear(){
        this.items = [];
    }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log(queue.front());
console.log(queue.dequeue());
console.log(queue.front());
console.log(queue.size());

queue.clear();
console.log(queue.isEmpty());

//Task 6
class PrinterQueue{
    constructor(){
        this.queue = new Queue();
    }
    addJob(job){
        this.queue.enqueue(job);
        console.log(`Job Added: ${job}`);
    }
    processJob(){
        if(this.queue.isEmpty()){
            console.log(`No Job in process.`);
            return;
        }
        const job = this.queue.dequeue();
        console.log(`Processing Job: ${job}`);
    }
    viewNextJob(){
        if(this.queue.isEmpty()){
            console.log(`No job in queue.`);
            return;
        }
        console.log(`Next job in process: ${this.queue.front()}`);
    }
    displaySize(){
        console.log(`Number of jobs in queue: ${this.queue.size()}`);
    }
}
const printer = new PrinterQueue();
printer.addJob(`Print Document`);
printer.addJob(`Print Notebook`);
printer.addJob(`Print Papers`);
printer.addJob(`Print Document 2`);

printer.viewNextJob();

printer.processJob();
printer.processJob();

printer.displaySize();

printer.processJob();
printer.processJob();

printer.viewNextJob();


//Activity 4 : Binary Tree
//Task 7
class Tree{
    constructor(value, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
const node3 = new Tree(3);
const node4 = new Tree(4);
const node2 = new Tree(2, node3, node4);
const root = new Tree(1, node2);

console.log(root.value);
console.log(root.left.value);
console.log(root.left.left.value);
console.log(root.left.right.value);

//Task 8
class Tree1{
    constructor(value, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }
    
    insert(value){
        if(this.root === null){
            this.root = new Tree1(value);
        } else {
            this._insertRec(this.root, value);
        }
    }
    
    _insertRec(node, value){
        if (value < node.value) {
            if (node.left === null) {
                node.left = new Tree1(value);
            } else {
                this._insertRec(node.left, value);
            }
        } else {
            if (node.right === null) {
                node.right = new Tree1(value);
            } else {
                this._insertRec(node.right, value);
            }
        }
    }
    
    inOrderTraversal(){
        const result = [];
        this._inOrderRec(this.root, result);
        console.log(result.join(' -> '));
    }
    
    _inOrderRec(node, result){
        if(node !== null){
            this._inOrderRec(node.left, result);
            result.push(node.value);
            this._inOrderRec(node.right, result);
        }
    }
}

const binaryTree = new BinaryTree();

binaryTree.insert(25);
binaryTree.insert(20);
binaryTree.insert(40);
binaryTree.insert(12);
binaryTree.insert(36);
binaryTree.insert(30);
binaryTree.insert(9);
binaryTree.insert(10);
binaryTree.insert(50);
binaryTree.insert(2);

binaryTree.inOrderTraversal();