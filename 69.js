// math method 

// in javascript the math object provieds a set of built in mathematical method and constant for performing common math operation -like rounding numbers ,generating  random values trigonomentry alogarith etc


console.log(Math.abs(10));

console.log(Math.round(4.7));

console.log(Math.ceil(4.1));

console.log(Math.floor(4.9));

console.log(Math.trunc(4.9));


console.log(Math.sign(-15)); 

console.log(Math.abs(null));

// console.log(Math()); 

// math random number 

// console.log(Math.random());  


// main formula---------------
//  math.random()--- return random number between 0(inclusive) and 1 (exculivise)

// costom range -- random between  main max -> math.random()*(max-min)+min 

let min =1;
let max =100;

let randomNumber = Math.floor(Math.random() * (max + 1 - min) +min);
console.log(randomNumber);