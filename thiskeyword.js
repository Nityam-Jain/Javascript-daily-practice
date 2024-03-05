

//objects using this keyword and tking things from inside the objects and 
let airplane = {
    airline : "Air India",
    code: 987322,
    bookings: [],
    book: function(flightnum,name){
      console.log(`${name} booked flight on ${this.airline} with ${this.code} and flightNumber ${flightnum}`)

      this.bookings.push({flightName: `${this.airline}` , PassengerName :`${name}`})
    }
}
// airplane.book( 88667,"john")
// airplane.book( 23322,"Ajay")
// console.log(airplane);


//bind method 
function greet(){
    console.log(`${this.fname}  is the friend of ${this.frndname}`)
}
greet()

let user ={
    fname: "Nityam",
    frndname: "Arpit"
}
//bind method for using it
let greets = greet.bind(user)
greets() 