// scoping in javaScript
//there are 4 type of scope 


//1.block scope
//2.function scope
//3.global scope

// Block scope
/*
{

}
*/
// block scope              VAR          LET               CONST

//inside of block           YES          YES               YES

//outside of block          YES           NO               NO

// {
    // let b =10;

// }
// console.log(b)
{
    let b =10;
    console.log(b)

}