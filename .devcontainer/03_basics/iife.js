//Immediately Invoked Function Expressions(IIFE)

(function chai() {
    //named IIFE
    console.log(`DB CONNECTED`);

})();//NOTE YADI 2 IIFE EK SATH LIKHNE H TO FIRST KE BAD SEMICOLON LGANA JARURI H NHI TO 2 RUN NHI KREGA
//unnamed IIFE
( (name) => {
    console.log(`DB CONNECTED 2 ${name}`);
    
})('vidhi')
/*(function aurcode() {
    console.log(`DB CONNECTED TWO`);
    
})()*/

//+++++++++++++++++++++++++++++++++++++++++JAVASRIPT EXECUTION CONTEXT++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*{}=GLOBAL E C = 3 types
Global execution Context
Function execution Context
Eval execution Context
{}= Memory creation phase
     Exection 
     


     
/*