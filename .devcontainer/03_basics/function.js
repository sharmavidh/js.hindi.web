function sayMyName(){
console.log("v");
console.log("i");
console.log("d");
console.log("h");
console.log("i");
}

//sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
    
// }
//addTwoNumbers(3 ,"4")
//addTwoNumbers(3 , null)
function addTwoNumbers(number1, number2) {
let result = number1 + number2
//console.log("vidhi");
return result
//console.log("vidhi");
    
}
const result = addTwoNumbers( 3 , 5)
//console.log("Result:", result);

function loginUserMessage(username= "vs") {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return '${username} just logged in'
    
}
//console.log(loginUserMessage("vidhi"))
//console.log(loginUserMessage);






