// data typers primitive and non primitive


// Primitive data type             ye call by value hote hain 
// there are 7  premitive datatypes

// 1 :  String
// 2 :  Numbers
// 3 :  Boolean
// 4 :  Null
// 5 :  Undefinied
// 6 :  Symbol
// 7 :  BigInt 

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outSideTemp = null
let useremail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const BigInt = 123345457678n 



//  Refrence (non primitive ) datatypes

//  Array , Object ,  Function   

const heros = [ "shaktiman" , "Naagraj" , "Doga"];

let myObj = {
    name: "shahzain",
    age: 22,
}

const myFunction = function(){
    // console.log("Hellow World");
    
}

// console.log(typeof anotherId);




// ***********************************************************************************************************

//*******************************/ types of Memory ******************************************

// Stack and Heap

// Stack Memory use in all ( primitives ) types

// Heap Memory use in Non-Primitive types 

let myYoutube = "Shahzin"

let anotherYoutube = myYoutube

anotherYoutube = "Bhatti"

console.log(myYoutube);
console.log(anotherYoutube);


let userOne = {
    email: "shahzain@google.com",
    upi: "hellow@zain"
}

let userTwo = userOne

userTwo.email = "bhatti@google.com"

console.log(userOne.email);
console.log(userTwo.email);
