async function start(){
    setTimeout(() => {
        console.log("this is settimeout")
    }, 4000);
}
async function main(){

    console.log("first it will execute");
    console.log("second it will execute");
    console.log("then it will execute");
    let data = await start()
    console.log(data);
    console.log("after waiting it will use");
    console.log("end");
}
main()