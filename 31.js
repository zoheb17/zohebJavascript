// what is a switch statement 


// a switch statement is used to compare one vale against multiple possible cases its often cleaner that writing multiple if else ...else if



// basic synatx  
/*
switch(expresion){
case value;
// break;

case value2;

// code block if expresion == value 2

default 

// code block if no case matches


}
*/
let day ="sunday"

switch (day){
    case "sunday":
        console.log("it is sunday")
        break;
    case "Monday":
        console.log("it is monday")
        break;
    case "tuesday":
        console.log("it is tuesday")  
        break;
    case "wednesday":
    console.log("it is wednesday");
    break;
    case "thursday":
    console.log(" it is thursday");
    break;
    case "friday":
    console.log("it is friday");
    break;
    case "saturday":
    console.log("it is saturday");
    break;
    default:
    console.log("please enter correct day")


}

 let day1="thursday"
 if(day1 == "sunday"){
    console.log("it is sunday");
 }
 else if (day1=="monaday"){
    console.log("it is monday");
 }
 else if( day1=="tuesday"){
    console.log("it is tuesday");
 }
 else if (day1=="wednesday"){
    console.log("it is wednesday");


 }
 else{
    console.log("put correct day")
 }