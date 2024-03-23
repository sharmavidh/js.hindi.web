//primitive data type
//7 types:string, number, boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

//const bigNumber = 15156854526526529n




//non-primitive 0r reference data type
//arrays , objects ,functions,

// const  heros = {"shaktiman", "naagraj","doga"};
// let myObj = {
//     name:"hitesh"
//     age: 22,

//

const myFunction = function(){
    console.log("Hello vidhi")
}

console.log(typeof anotherId);
// return data type
//null= object





/////+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//stack (primitive), heap(non-primitive) memory

let myName ="vidhi"

let anotherName = myName
anotherName = "nannu"

console.log(myName);
console.log(anotherName);

let userOne = {
    email:"user@google.com",
    upi: "usr@ybl"
}

let userTwo = userOne
userTwo.email ="vs@google.com"

console.log(userOne.email);
console.log(userTwo.email);