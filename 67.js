// JSON method in javascript 


// javaScript provides two main goal global method under the JSON object 

//  1. JSON .stringify()
//  converts a javaScript object -> JSON string 


// 2.JSON parse ()

// conversts a json  string -> javascript object 



// let person ={
//     fName:"zoheb",
//     age:21,
//     isalive:true,
// } 
//  console.log(person);
// //  console.log(typeof person);// ob

//  let output= JSON.stringify(person);
//  console.log(output);
//  console.log(typeof output);



let person1=  `{"fullName":"zoheb","age":21,
"isALive":true,"isSleeping":null}`

console.log(person1);
console.log(typeof person1);

let convertObject = JSON.parse(person1);
console.log(convertObject);
console.log(typeof convertObject);
