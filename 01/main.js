//Task 1
const year =prompt("Enter your birth year, please");
console.log(`Your age is ${2023-year}`);

//Task 2
let radius = prompt('What is the radius of your circle?');
let area = 3.14 *(radius**2);
console.log(`Area of circle with radius ${radius} is ${area}`);

//Task 3
const distance = prompt('What is the distance in km between two sities?');
const time_having = prompt('What is the amount of time in hours you have to reach your destination?');
console.log(`Your needed speed to arrive on time: ${distance/time_having} km/hour`);

//Task 4
let dollars=prompt('How much dollars do you want to convert?');
const rate=1.07;
console.log(`Amount of euro: ${dollars*rate}`);

//Task 5
const capacity =prompt("Enter the capacity of a flash drive in GB");
convert =capacity *1024;
res= convert/820;
//console.log(res.toFixed(0));
console.log(`The number of files with sixe 820 MB which can be saved on the flash drive: ${convert/820}`)