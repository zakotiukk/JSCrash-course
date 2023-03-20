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
speed=distance/time_having;
console.log(`Your needed speed to arrive on time: ${speed.toFixed(0)} km/hour`);

//Task 4
let dollars=prompt('How much dollars do you want to convert?');
const rate=1.07;
console.log(`Amount of euro: ${dollars*rate}`);

//Task 5
const capacity =prompt("Enter the capacity of a flash drive in GB");
let convert =capacity *1024;
console.log(`The number of files with sixe 820 MB which can be saved on the flash drive: ${parseInt(convert/820)}`);