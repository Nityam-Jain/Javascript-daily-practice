//Immediately invoked function expression (IIFE)
(function run(){
     console.log("IIFE")
})();

(()=>{
    console.log("this will happen")
})
();
