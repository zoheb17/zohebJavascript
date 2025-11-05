//  synchronus vs asynchronous


// in synchronous code each line run one after another ,waiting for perivious one to finish before moving on 


// ==> JS waits for each line to complete before running the next one.



// these run imediately line -by-line and block and block the next task until they finish

// ex

console.log("stape 1");
console.log("stape 2");
console.log("stape 3");


   /* | type                                 | example
   |-----------------------------------------|---------------------------------------------------------
   | normal code execution                   |console.log() variable delecration
   | math operation                          | let sum = a+b;
   | loops                                   | for,while,do....while
   | conditional statements                  | if, else ,switch
   |function call (normal)                   | function myfunction() {}->my func()
   | JSON parsing                            | Json .parse(), JSON.stringify()
   | dom manipulation (usually)              | doucment.getelementyid(),element.innertHtml
   | erroe handling                          | try { ..} catch (err){..}
   | block alerts                            aler










   */