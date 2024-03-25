const name = "vidhi"
const repoCount = 50

//console.log(name + repoCount + "Value");

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 

const gameName = new String('vidhi-s')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(4));
//console.log(gameName.indexOf('d'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-6, 1)
console.log(anotherString);

const newStringOne= "   vidhi   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://vs.com/vidhi0308"

console.log(url.replace('0308','-'))

console.log(url.includes('sharma'))

console.log(gameName.split('-'));


