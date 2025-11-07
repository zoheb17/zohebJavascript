// asynchrounous function

// timer function 


/*

time function let you dhedul code execution - either 
after a delay or repeatedly at interval  
they are part of the Web APIs (in broesers) or Node.js
global timers  in (in backend js)
*/
// 1.settimeout 


// console.log("step1");
//  setTimeout(()=>{
//     console.log("step2");
//  },0)
//  console.log("step3"); 



//  2. setInterval()

/* 
the setInterval() method repetedly calss a function or excutes a code a snippet ,with a fixed delay between each call

it continues runningb until you stop it using  clearInterval().

*/

//  setInterval(()=>{
//     console.log("hello cfi");
//  },2000) 

let count =1;

 let timer = setInterval(()=>{ 
    console.log("hello cfi"); 
    console.log(count);
    count++;
    if(count == 7){
        console.log("stoped");
    clearInterval(timer);
    }
 },1000)


