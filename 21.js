//  type conversion 
// changing datatype from ine typen to another

// ex : let a= "10" ==>
// convert 10 of string to 10 of number

// there are 2 type of conversion in js 
// 1.implicit conversion
// 2. explicit conversion

// 1. implicit conversion :== automatic coversion 
// 1. Anything (any datatype) to string

let numberTostring =2 +""
console.log(numberTostring)
 let b ="34" +"55"
 console.log(b)

 let c = true + "zoheb"
  console.log(c)

  let d = null + "zoheb";
  console.log(d)


//   anything to number use only(-,/,*)
let a ;
 a="5" -"3";
console.log(a)
a = "5" * 3;
console.log(a);
a = 10/"2";
console.log(a);
a = 2 - "hi"
console.log(a);

// any thing to boolean

let a1 = "5" + true;
console.log(a1)

let a2 = "5" - false;
console.log(a2);

let a3 = 0 + false;
console.log(a3);

// null to number
// null = 0
let c1= 4 + null;
console.log(c1)

let d1 = undefined +5;
console.log(d1);
let d2 = true + undefined;
console.log(d2);
let d3 = true + false;
console.log(d3);


