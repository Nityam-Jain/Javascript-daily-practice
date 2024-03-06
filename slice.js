//slice method 
let array = [9,2,1,5,4,8]
let extractArr = array.slice(0,3) //last index is excluded
let strSlice = "WebDeveloper"
let extractStr = strSlice.slice(0,3)

console.log(array);  //but in slice method original array will not change 
console.log(extractArr);
console.log(strSlice);
console.log(extractStr);