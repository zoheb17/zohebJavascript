//  1. every Method


// check if avery elements in array passes a test (return true/false)

// ewturn :true if all elements oass the condition otherwise false.

// js 
let numbers=[2,4,6,8]; 
 let check= numbers.every((x) => x > 0); 
 console.log(check);

//  function test(){
//     return x > 0
//  }  

// 2. find() method

// return the first element that satifies a condition return :the element it self 0r unfined if not found

//  >
// x % 2 ==0...even
// >=
// <=
// x % 2 == 1 ..odd


let numbers1=[2,4,6,8]; 
 let check2= numbers.find((x) => x > 5); 
 console.log(check2);





//  19.findIndex()
 

let num =[ 2,4,6,8]
let check3=num.findIndex((x ) => x>1);
console.log(check3);
 