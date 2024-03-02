function addCartPrice(...price){   //spread operator is using for multiple values
   return price
}
// console.log(addCartPrice(234,543,556))

//function with array 
let marksArray = [233,455,400,789]

function getArray(secondArr){
    return secondArr
}
// console.log(getArray(marksArray[1])) 





//function with objects
let userObj ={
    name: "Vijay",
    city: "Agra"
}

function getUserDet(getCity){ 
   return getCity
}   
console.log(getUserDet(userObj.city));
