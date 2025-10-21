// function scope                var           let           const
//Inside of function              YES           YES            YES
// outside of function             NO            NO             NO


function hello(){
var a = 10;
console.log(a);

}
hello()

function  bye() {
    let b = 20;
    console.log(b);
  
}
bye()

function tata(){
    const c = 30;
    console.log(c)
}

tata()
  