//Task 1.1
const km = prompt('Input the value in kilometres:');
alert(`This value in miles: ${km*0.621371} .`);

//Task 1.2
const hours = prompt('Input the current time in hours:');
const minutes = prompt('Then, please, input the current time in minutes:');
alert(`${23-hours} hours and ${60-minutes} minutes are left until the end of the day .`);

// Task 1.3
const number =(prompt('Input the 3-digit number:'));
let backwards =Number(String(number).split('').reverse().join(''));
alert(`That number but backwards now: ${backwards} .`);

