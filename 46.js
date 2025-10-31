 
//   console.time("time")
//  for ( let i = 1; i <=10; i ++){
//     console.log(`5 x ${i} = ${5 *i}`);
//  }



// for each 


// const number =[1,2,3,4,5,6,7,8,9,10]

// number.forEach((n)=>{
//       console.log(`5 x ${i} = ${5*i}`);
// });

// // mat method

// const nu =[1,2,3,4,5,6,7,8,9,10];

// const table =nu.map((n)=>{
//     return `5 x  ${n} =${5*n}`;
// })

// console.log(table);

 console.time("time")

const numbers = Array.from({length:1000},(_, i) => i+1)
console.timeEnd("time") 

for (let i =1; i<=3; i++){
    console.log(`outer loop`);
}

for (let j =1; j<=3; j++){
    console.log(`   inner loop`,j);
} 



for (let i =1; i <5; i++){
    let row="";  
    console.log(row,"outer loop");
    for (let j = 1; j <=i; j++){
        row += "* "
        console.log(row,"inner loop");
    }
    console.log(row, "answer");
}