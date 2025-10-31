// 21. new map method()


// map method 
// transform each element and 
// return a new array

//  return value : new array
// chainable :yes 
// changes origanal :yes
// common use case : creating new arrays 



// ex creates a new array with modified values and 
//  return in a new array default 


let number = [1,2,3,4,5]

let final = number.map((x) => x *2)
console.log(final);



// mutating vs non - mutating

// 1.push
// 2.pop
// 3.shift
// 4.unshift
// 5.splice
// 6.sort
// 7.revers
// 8. for each

// ---------------

// non-Mutating
// 1.map
// 2.filter
// 3.slice
// 4.concat
// 5.reduce 


console.time("time")

let num =[1,3,4,5,6]

num.map((x =>{
    console.log(x);

}))

console.timeEnd("time");



