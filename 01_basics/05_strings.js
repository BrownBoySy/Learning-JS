const name = "Satyam"
const repoCount = 40

// console.log(name + repoCount + " Value");

console.log(`Hello my name id ${name} and my repo county is ${repoCount}`);

const gameName = new String('Satyam-yt-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(5));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(-7, 5)
console.log(anotherString);

const newStringOne = "   satyam   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://satyam.com/satyam%20Sharma"

console.log(url.replace('%20', '-'));

console.log(url.includes('puneet'));

console.log(gameName.split('-'));