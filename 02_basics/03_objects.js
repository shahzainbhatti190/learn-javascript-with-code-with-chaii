// singleton (jb constructive methond je object banayen to singleton banta hai)
// Object.create  

// object literals
const mySym = Symbol("key1")
const JsUser = {
    name: "Shahzain",
    "full name": "Shahzain Bhatti",
    [mySym]: "mykey1",
    age: 20,
    location:"Karachi",
    email:"shahzain@google.com",
    IsLoggedIn: false,
    LastLoginDay: ["Monday", "Saturday"],

}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

// AND AGAR EMAIL KI VALUE KO CHAGE KARNA HAI TO
JsUser.email = "shahzain@got.com" 
Object.freeze(JsUser)
JsUser.email = "shahzain@facebook.com" 

console.log(JsUser);
