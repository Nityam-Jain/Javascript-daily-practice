let obj = 
[
{
    carName: "Nano",
    model: 2012
},
{
    carName: "Safari",
    model : 2018
}
]
console.log(obj);
let stringifyData = JSON.stringify(obj)
console.log(stringifyData);
localStorage.setItem("vehicle",stringifyData)
console.log(localStorage);


//get data from localstorage
let storedData = localStorage.getItem("vehicle")
let objdata = JSON.parse(storedData)
console.log(objdata);