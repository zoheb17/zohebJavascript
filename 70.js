// practice of my function 

// const { Children } = require("react");


// function zoheb (num1, num2){

//     let result= num1 +num2
// return num1+num2
// }
// const result=zoheb(7,8)
// console.log(result);  

// -------
 function loginuser(username){ 
    if(username === undefined){
        console.log("please enter a user name");
        return
    }
    return` ${username} just login`
 }
 console.log(loginuser())  


// ---------------
 for(let i=1; i<5; i++){
    console.log(i);
 }