 //two types - block , global scope
 
/*let a = 300
if (true) {
let a = 10
const b = 20
var c = 30
console.log("INNER:", a);
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}
//
console.log(a);
//console.log(b);
//console.log(c);


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*function one(){
    const username = "vidhi"

    function two(){
        const website = "vstube"
        console.log(username);
    }
    //console.log(website);

    //
    two()
}

one()*/

if (true) {
    const username = "vidhi"
    if (username === "vidhi"){
        const website = "vstube"
        //console.log(username +  website);
    }
    //console.log(website);
}
//console.log(username);

//++++++++++++++++++++++++interesting+++++++++++++++++++++

console.log(addone(5))

function addone(num) {
    return num + 1
    
}
//console.log(addtwo(5))//here it's not work
const addtwo = function(num){
    return num + 2
    
}
console.log(addtwo(5))//working





