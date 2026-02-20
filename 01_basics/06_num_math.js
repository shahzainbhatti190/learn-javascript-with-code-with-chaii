const score = 400
// console.log(score);

const balance = new Number (100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));


const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-In'));


// ********************** Maths************************

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(5.6));
// console.log(Math.ceil(5.2));
// console.log(Math.floor(5.6));
// console.log(Math.min(5, 6 , 8 , 9, 3,));
// console.log(Math.max(5 , 6, 9 ,3 ,4));
console.log( Math.random());                     // math random 0 -1 ke beech mian valur deta hai 
console.log( (Math.random() * 10 ) + 1 );        // multiply by 10 main agar 0.01 value se multi ply ho to valur 0 aaw saki haii so isko avoide karne ke liye we add + 1


const min = 10
const max = 20
console.log(Math.floor (Math.random() * (max - min + 1)) + min);   // to add 10
