// call back function


// a call back function is a function passed as an argument to another function 
// and is called ("called back") later inside that function  


function greet(a,b){
    console.log("hello" + a);
    b();
}
function afterGreeting(){
    console.log("welcome");
}
greet("zoheb",afterGreeting);