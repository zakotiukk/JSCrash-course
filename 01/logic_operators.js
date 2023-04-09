// Task 1.1
const number= prompt('Input a number from 0 to 9:');
switch(number) {
    case 0: console.log('Special character for this number is )'); break;
    case 1: console.log('Special character for this number is !'); break;
    case 2: console.log('Special character for this number is @'); break;
    case 3: console.log('Special character for this number is #'); break;
    case 4: console.log('Special character for this number is $'); break;
    case 5: console.log('Special character for this number is %'); break;
    case 6: console.log('Special character for this number is ^'); break;
    case 7: console.log('Special character for this number is &'); break;
    case 8: console.log('Special character for this number is *'); break;
    case 9: console.log('Special character for this number is ('); 
}

//Task 1.2
const year = prompt('Input the year:');
if (year%4==0) {
    console.log("This year is a leap year!");
} else {
    console.log(`${year} isn't a leap year.`)
}

//Task 1.3


//Task 2.1
let start_range=parseInt(prompt("Write the start of the range:"));
const end_range=parseInt(prompt("Write the last number of the range:"))
let sum=0;
while (start_range<end_range){
    sum += start_range;
    start_range+=1;
}
console.log(`Summary of entered numbers : ${sum}`);

//Task 2.2
let num = parseInt(prompt("Input the number:"));
let i=0;
while (num>0){
    num=Math.floor(num/10);
    i++;
}
console.log(`The number of digits in the entered number is : ${i}`);

//Task 2.3
let positive = 0;
let negative = 0;
let zeroes = 0;
let even = 0;
let odd = 0;
for (let i = 0; i < 10; i++){
    const n=Number(prompt(`Enter number ${i+1} :`));
    if (n > 0) {positive++;}
    else if (n < 0) {negative++;}
    else if (n == 0) {zeroes++;}
    if (n % 2 == 0) {even++;}
    else {odd++;}
}
console.log(`Positive numbers: ${positive}`);
console.log(`Negative numbers: ${negative}`);
console.log(`Zero numbers: ${zeroes}`);
console.log(`Even numbers: ${even}`);
console.log(`Odd numbers: ${odd}`);

//Task 2.4
const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let currentIndex = 0;
let input = "";

do {
const currentDay = daysOfWeek[currentIndex];
input = prompt(`${currentDay}. Do you want to see the next day?`);
currentIndex = (currentIndex + 1) % 7;
} while (input !== null);

