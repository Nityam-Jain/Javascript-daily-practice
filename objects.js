//this is normal object but it is nested
let userInfo = {
     email: "some@gmail.com",
     userFullname: {
        userFLname:{
            firstname:"Sam",
            lastname: "altman"
        }
     }
}
// console.log(userInfo.userFullname.userFLname.lastname);


//merging objects
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

let combinedObj = Object.assign(obj1,obj2,obj3) //(target,source)
//we also can use spread operator there 
let object = {...obj1,...obj2}
console.log(object);
