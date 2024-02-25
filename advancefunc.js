// //for each 
// let arr = [
//     {
//         "name": "shyam",
//         "age": 32,
//         "r.no": 321
//     },
//     {
//         "name": "kapil",
//         "age": 21,
//         "r.no": 324
//     },
//     {
//         "name": "lion",
//         "age": 43,
//         "r.no": 325
//     }
// ]
// //for each function is callback function and it has 3 parameters value, index, and third one is array itself.and it is generally used in array and it is not using in string.
// arr.forEach((val)=>{
//   console.log(val)
// })

//advance question on for each 
//square of each number

// let num = [1,2,3,4,5]
// num.push(9,8,6,2);
// num.forEach((val)=>{
//    let square = val*val
//    console.log(square)
// })


//Map function 
// it is using for making new Arr it is just like foreach 
// let mapVal = [2,3,4,6,5,8]
// let newArr = mapVal.map((val)=>{
//    return val*val;
// })
// console.log(newArr)
// console.log(mapVal) // in map function it will return new array existing array will remain same as earlier

//filter method 
// let unfilteredArr = [3,2,5,7,8,10,12,14]

// let even = unfilteredArr.filter((val)=>{
//     return val%2==0
   
// })
// console.log(even)
// console.log(unfilteredArr)
 
//Reduce method 
//this method is generally used for getting single value after performing some operation on multiple values like on array and return single value 

//like we have add the sum of array so it will add previous + current value
// let values = [2,4,1,9,7,543,789]
// let output = values.reduce((prev , curr)=>{
// //    return prev + curr
//    return prev>curr ? prev : curr //if i want to know largest value in array
// })
// // console.log("sum of values are :",output);
// console.log("largest value is  :",output);

 //practising question on it 
//  let marks = [90,78,91,93,66,89]
//  let newArr = marks.filter((val)=>{
//     return val>=90
//  })
//  console.log(newArr)

 //Take input from user and do some operations on it
 let n = prompt("Enter the value")
 let arr = []
 for(let i=1; i<=n; i++){
    arr[i-1]=i
 }
 console.log(arr)
 //lets calculate the sum of array
 let sum = arr.reduce((prev, curr)=>{
    return prev + curr
 })
 console.log("sum of the values are",sum)

 //let calculate product of numbers
 let product = arr.reduce((pre, curr)=>{
   return pre*curr
 })  
 console.log("factorial is:",product);