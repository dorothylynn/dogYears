// My current age
const myAge = 30;

// First stage of life
var earlyYears = 2;

earlyYears = earlyYears *= 10.5;

// Knocking off first couple years
var laterYears = myAge -2;

// Dog years per human years
laterYears *= 4;

// console.log(earlyYears);
//console.log(laterYears);

// Adding it all together
var myAgeInDogYears = earlyYears + laterYears;

// Writing my name in all lowercase
const nameOfMe = 'Dorothy';
const myName = nameOfMe.toLowerCase();

// Putting it all together
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
