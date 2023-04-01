// Task 1.1
const number= prompt('Input a number from 0 to 9:');
switch(number) {
    case 0: alert('Special character for this number is )'); break;
    case 1: alert('Special character for this number is !'); break;
    case 2: alert('Special character for this number is @'); break;
    case 3: alert('Special character for this number is #'); break;
    case 4: alert('Special character for this number is $'); break;
    case 5: alert('Special character for this number is %'); break;
    case 6: alert('Special character for this number is ^'); break;
    case 7: alert('Special character for this number is &'); break;
    case 8: alert('Special character for this number is *'); break;
    case 9: alert('Special character for this number is ('); 
}

//Task 1.2
const year = prompt('Input the year:');
if (year%4==0) {
    alert("This year is a leap year!");
} else {
    alert(`${year} isn't a leap year.`)
}

