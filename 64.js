// promises 

/*
a promise is an object that represnt the eventual completion or failur of an asynchrous operation
*/

// 'I'll fetch the data (pending)...if it works I;ll resolve it right, if it fails i' ll  reject it wrong 



// const promise = new Promise((resolve,reject)=>{
//     let sucess=true;
//     if(sucess){
//         resolve("task complet")
//     }else{
//         reject("task failed")
//     }
// })
// console.log(promise);

// v1
// function  timerCallback(callback,second){
//     console.log((` waiting for ${second} second`));
//     setTimeout(()=>{
//         callback(`done after ${second} second`);
//     },second*1000);
// }  
//     timerCallback((msg)=>{
//         console.log(msg);
//     }, 2);  

// //  v2------------

function timerPromise(second){
    return new Promise(( resolve,reject)=>{
        if(second <0){
            reject("invalide time");
        }else{
            setTimeout(()=>{
                resolve(` done after ${second} second`);
            },second * 1000);
        }
    });
}

// timerPromise(2)
// .then((msg)=> console.log(msg))
// .catch((err)=> console.log(err)); 



// v3-----------------------------------promise chaning

timerPromise(1)
.then((msg)=>{
    console.log(msg);
    return timerPromise(2);
}).then((msg)=>{
    console.log(msg);
    return timerPromise(3);
})
.then((msg)=> console.log(msg))
.catch((err)=>console.log((err)))
.finally(()=> console.log("all timer done")); 

// v4 --------- promise .ll()

Promise.all([timerPromise(1),timerPromise(2),timerPromise(3)])
.then((msg)=>console.log("All done:",msg))
.catch((err)=>console.log(err));

// v5----------------------
Promise.race([timerPromise(1), timerPromise(2), timerPromise(3)])
.then((result)=>console.log("first finished",result))
.catch((err)=>console.log(err)); 


// v6--------- async/await (modern syntax)



async function finalRunner(){
    try {
        let timer1 = await timerPromise(3);
        console.log(timer1);

        let timer2=await timerPromise(2);
        console.log(timer2);
        let timer3 = await timerPromise(1);
        console.log(timer3);
    }catch(error) {
            console.log(error);
        }
}