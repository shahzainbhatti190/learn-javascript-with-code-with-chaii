// *************** Dates******************************

let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);

// let setDate = new Date (2026 , 5 , 20)
// let setDate = new Date (2026 , 5 , 20 , 5 , 30)
let setDate = new Date ("2026-02-20")

// console.log(setDate.toLocaleString());

let timeStamp = Date.now()

// console.log(timeStamp);
// console.log(myDate.getTime());
// console.log(Math.round(Date.now() / 1000));
// console.log(Math.round(new Date() / 1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDate());

console.log(newDate.toLocaleString);

newDate.toLocaleString('default' , {
  weekday: "long"
})