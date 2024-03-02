
//this is normal function 
// function printit(){
//     console.log("make it like a function")

// }
// printit()

//with input of function
// function parameter(msg){  //parameter input
//     console.log(msg);
// }
// parameter("this is argument")  //this is argument 

// function sum(a,b){  //this is parameter
//     return a+b;
// }
// console.log(sum(80,70)); //argument for adding
 
//arrow function
// let multiplication = (c,d)=>{
//     return c*d
// }
// console.log(multiplication(10,32))

//practising que on functions
let countVowel = (str)=>{
    let count = 0;
   for (const char of str) {
     if(char ==="a" || char === "e" || char === "i" || char === "o"  || char === "u"){
       count++;
     }
   }    
   console.log(count)
}    
countVowel("this is the question ")