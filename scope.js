function acess(){          //nested function
   const username = "hitesh"
   function two(){
    const lastname = "choudhary"
    console.log(username);
   }
//    two()
//    console.log(lastname)
}
// acess()

/////////////////////////////
function add(num){
    return num+1
}
// console.log(add(5))
 

//this function and arrow function
const user = {
    username : "Ajay",
    welcomemsg: function(){
       console.log(`hey user are log value is ,${this.username}`);
    }
}
// user.welcomemsg()



  