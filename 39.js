//  arrays method

// 1. at() method

let arr =["hello", "hi" , "bye"]
console.log(arr.at(0));
console.log(arr.at(2));

// index ==> value


// 2. concat() method

let arr1 = [10,20,30]
let arr2=[40,50,60]

let total =arr1.concat(arr2);
console.log(total);

console.log(arr1.concat(arr2));

// 3. fill method;
// fill is an array method which will replace all elements with gin value

let fruits =["apple", "mango","orange"]

let total1 = fruits.fill("pineapple");
console.log(total1);


// 4. indexof() method

// index is an array method which take input

let nums = ["one","two", "three"]
console.log(nums.indexOf("six"));



// 5. lastindexof()
let arr3 =[10,20,30,40,50,10]
console.log(arr3.lastIndexOf(10)); 


// 6. length()
let arr4=[10,50,52,45,458,]
console.log(arr4.length); 

// 7. push()
// push is an arry method which  add a new element in the last position og the array


let arr5=[10,20,30,40,50,10]
console.log(arr5.push(77));


// poop

// pop is an array method which delet the last element from array

let arry6= [10,20,30]
arry6.pop();
console.log(arry6);

// 9 . unshift()
// 

// add first element


let arr7 = [10,20,30]

arr7.unshift(100);
console.log(arr7);

// 10 .shift()

// delet first elements

let arr8 = [10,20,30]

arr8.shift(100);
console.log(arr8);