//for of loop
// let str = "Tammana" 
// let length = 0;  //for of loop is generally used in string and arrays
// for (const i of str) {
//     console.log(i)
//     length++
// }
// console.log(length);


//for in loop
//this loop is generally used in objects
let Employee = {
    name: "Ajay",
    age: 32,
    isvalid : true,
    company: "TCS"
}

//let run for in loop over this object
for (const key in Employee) {
   console.log("Key of the Employee object",key, "value", Employee.age)
}
