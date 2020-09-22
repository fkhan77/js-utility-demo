console.time("Time to load lodash");
const _ = require("lodash");
console.timeEnd("Time to load lodash");

const myArray = [];
for (let i = 0; i < 1000000; i++) {
  myArray.push(i);
}

// Map
console.log("***********************");
console.time("Native map");
myArray.map((x) => x + 2);
console.timeEnd("Native map");

console.time("Lodash map");
_.map(myArray, (x) => x + 2);
console.timeEnd("Lodash map");

// Find
console.log("***********************");
console.time("Native find");
myArray.find((element) => element === 57623);
console.timeEnd("Native find");

console.time("Lodash find");
_.find(myArray, (element) => element === 57623);
console.timeEnd("Lodash find");

// Filter
console.log("***********************");
console.time("Native filter");
myArray.filter((element) => element % 42 === 0);
console.timeEnd("Native filter");

console.time("Lodash filter");
_.filter(myArray, (element) => element % 42 === 0);
console.timeEnd("Lodash filter");

// Every
console.log("***********************");
console.time("Native every");
myArray.every((element) => element % 2 === 0);
console.timeEnd("Native every");

console.time("Lodash every");
_.find(myArray, (element) => element % 2 === 0);
console.timeEnd("Lodash every");
console.log("***********************");
