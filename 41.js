// string method

// 1 .charAt()
 

let str1 ="hello"

console.log(str1.charAt(3));


// concat ()

let a1 = "hello"
let b1 = " world"

console.log(a1.concat( b1));


// includes

let c1 ="hello i am cfi stu";
console.log(c1.includes("cfi")); 

// 4. length

let c2 ="hello i am cfi stu";

console.log(c2.length);


let c3 ="hello i am cfi stu";
console.log(c3.indexOf("cfi"));

let c4 ="hello i am cfi stu ;"
console.log(c4.lastIndexOf(";")); 

let c5 ="hello i am cfi stu \n";
console.log(c5.repeat(10

)); 


// 8. replace()


let f1 ="hello world"
console.log(f1.replace("world", "cfi"));

// 9. split()

let f2="hello,wo,rld"
console.log(f2.split(","));

let f4 ="hello world"
// console.log(f4.toUpperCase());
console.log(f4.toLowerCase()); 

// 12. trim()


let f7="         hello cfi      ";
console.log(f7.trim());

// 13.slice

let z1="hello"
console.log(z1.slice(0,4)); 

// 14 . pad start()

let z2 ="hello"
console.log(z2.padStart(10, "*"));


// 15 . padend
let z3="world";
console.log(z3.padStart(15, "*"));