// number method


// 1.st parseFloat()


// they are built- in javascript function that convert string into numbers


// conver to decimal number 
//  string to number


// console.log(parseFloat(" 43.5"));
// console.log(parseFloat("99.45cm"));
// console.log(parseFloat("cm 99.23"));







// 2. parseIn..... converts to number 

// we parseInt for number system



console.log(parseInt("1111",2));
console.log(parseInt("1000",2));
console.log(parseInt("1010",2));
console.log(parseInt("11000011",2));



//  toFixed


let number = 57.6789

console.log(number.toFixed(1));
console.log(number.toFixed(2));
console.log(number.toFixed(3));



//  localestring()


// toLocalString() is a number method that formats a number according to specific locale (contry/language) or styple like adding commas currency or percentange


// locales -> optional string "en-us", "hi-in", "de-De" etc
// (defines languadde and region format)

// options -> object to control  formating style



// let num =12333566.76
// console.log(num.toLocaleString());
// console.log(num.toLocaleString("de-DE"));



let amount = 2500;

console.log(amount.toLocaleString("ja-JP",{ style:"currency", currency:"jpy"}));
console.log(amount.toLocaleString("ar-SA",{ style:"currency", currency:"SAR"}));

