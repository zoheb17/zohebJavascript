// throw in java script 

/*
throw is used to manualy create (throw) an
error jump to the catch block.

*/
try{
    let age = 15;
    if (age<18){
        throw "you must be 18";
    }
    else{
        throw "i cant vote"
    }
    console.log("welcome");
}catch(error){
    console.log(error);
}