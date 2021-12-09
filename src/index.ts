let id: number = 5
let company: string = "Edward Almanzar"
let isPublish: boolean = true
let x: any = "hello"

let ids:number[] = [1,3,4,5,7]
let arr: any[] = [1, true, "Hi"]

// Tuple
let person: [number, string, boolean] = [1, "Edward", true]

// Tuple Array
let employee: [number, string][]
employee = [
[1, "Jedi"],
[2, "Min"],
[3, "July"]
]

// Union
let pid: string | number
pid = "33"

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log("Direction1.Right: ", Direction1.Right); // Result = 4

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right ="Right",
}

console.log("Direction1.Right: ", Direction2.Up); // Result = Up

type User = {
  id: number,
  name: string
}

// Objects
const user: User = {
  id: 1,
  name: "Edward"
}

// Type Assertion
let cid:any = 1
// let customerId = <number>cid
let customer = cid as number

// Functions
function addNum(x: number, y: number): number{
  return x + y
}
console.log('addNum(1, 2): ', addNum(1, 2));

// Void
function log(message: string | number): void {
  console.log(message);
}
log("Void")
log(4)

// Interfaces
interface UserInterface {
  readonly id: number,
  name: string,
  age?: number
}

// Objects
const user1: UserInterface = {
  id: 1,
  name: "Edward"
}

interface MathFunc{
  (x: number, y: number): number
}
const add: MathFunc = (x: number, y: number): number => x + y
const sun: MathFunc = (x: number, y: number): number => x - y

// Classes

// interface PersonInterface {
//   // private id: number
//   id: number
//   name: string
//   isPerson(): string
// }

class Person {
  // private id: number
  protected id: number
  name: string

  constructor(id: number, name: string){
    this.id = id
    this.name = name
  }
  isPerson(){
    return `${this.name} is a person`
  }
}

const edward = new Person(1, "Edward")
const jason = new Person(7, "Jason")
// Edward.id = 3
console.log(edward, jason);
console.log(edward.isPerson());

// Extend a class

// Subclasses
class Employee extends Person{
  position: string

  constructor(id: number, name: string, position: string){
    super(id, name)
    this.position = position
  }
}

const employee1 = new Employee(1, "Edward", "CEO")
console.log('employee1: ', employee1);
console.log('employee1.isPerson: ', employee1.isPerson());

// Generics
function getArray<T>(items: T[]):T[]{
  return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let srtArray = getArray<string>(["Edward", "Jake"])

numArray.push(0)
srtArray.push("string")