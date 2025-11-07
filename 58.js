// try ....catch...finally 

// it is a way to handle error in javaScript so yor program desent match


// syntax

// try{
//     // code thart might cause error
// } catch(error){
//     // code that runs "if " an error happesns
// } finaly{
//     // code that always run (error or not)
// }


try {
    let output=10/0;
    console.log(output);
    console.log(output +a);
}catch (error){
    console.log("error");
    console.log(error.name, error.message);
}finally{
    console.log("hello i ll be there");
}