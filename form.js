let form = document.querySelector(".frmsbmt")
let email = document.querySelector("#Email")
let password = document.querySelector("#Pass")
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(email.value)
    console.log(password.value)
})
