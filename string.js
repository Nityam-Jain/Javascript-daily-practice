//String slice method 
let string = "Nityam"
let newChar = string.slice(0,3)  //the last index will not include
// console.log(newChar);
//string split method 
let str = "Coding"
let newStr = str.split(",")
// console.log(newStr);

//string slice method 
let stre = "programmer"
let newStre = stre.slice(0,5)  //5th index is excluded  
// console.log(newStre);

//includes method
let have = "nityamjain@gmail.com"
let result = have.includes("@") //case sensative
let result1 = have.indexOf("i")   //case sensative
console.log(result);
// console.log(result1);

//strings are immutable  
let string1 = "coding"
string1[0] = "j"
string1[1] = "p"
// console.log(string1);  //it will not change 
