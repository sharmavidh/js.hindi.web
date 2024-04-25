//Immediately Invoked Function Expressions(IIFE)

(function chai() {
    //named IIFE
    console.log(`DB CONNECTED`);

})();
//unnamed IIFE
( (name) => {
    console.log(`DB CONNECTED 2 ${name}`);
    
})('vidhi')
/*(function aurcode() {
    console.log(`DB CONNECTED TWO`);
    
})()*/

