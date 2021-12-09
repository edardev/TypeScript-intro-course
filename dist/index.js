"use strict";
let id = 5;
let company = "Edward Almanzar";
let isPublish = true;
let x = "hello";
let ids = [1, 3, 4, 5, 7];
let arr = [1, true, "Hi"];
// Tuple
let person = [1, "Edward", true];
// Tuple Array
let employee;
employee = [
    [1, "Jedi"],
    [2, "Min"],
    [3, "July"]
];
// Union
let pid;
pid = "33";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log("Direction1.Right: ", Direction1.Right); // Result = 4
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log("Direction1.Right: ", Direction2.Up); // Result = Up
// Objects
const user = {
    id: 1,
    name: "Edward"
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customer = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log('addNum(1, 2): ', addNum(1, 2));
// Void
function log(message) {
    console.log(message);
}
log("Void");
log(4);
// Objects
const user1 = {
    id: 1,
    name: "Edward"
};
const add = (x, y) => x + y;
const sun = (x, y) => x - y;
// Classes
// interface PersonInterface {
//   // private id: number
//   id: number
//   name: string
//   isPerson(): string
// }
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    isPerson() {
        return `${this.name} is a person`;
    }
}
const edward = new Person(1, "Edward");
const jason = new Person(7, "Jason");
// Edward.id = 3
console.log(edward, jason);
console.log(edward.isPerson());
// Extend a class
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const employee1 = new Employee(1, "Edward", "CEO");
console.log('employee1: ', employee1);
console.log('employee1.isPerson: ', employee1.isPerson());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let srtArray = getArray(["Edward", "Jake"]);
numArray.push(0);
srtArray.push("string");
