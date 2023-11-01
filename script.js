"use strict";
//task1
function sum(...numbers) {
  let sum = 0;
  for (let item of numbers) {
    sum += item;
  }
  return sum;
}
let sumResult = sum(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(sumResult);
//task2
let user = {
  firstname: "giorgi",
  lastname: "saakadze",
  age: 32,
  isloggedin: true,
};

let user2 = {
  firstname: "lasha",
  lastname: "smith",
  age: 25,
  isloggedin: true,
};

function printName(obj) {
  if (obj.isloggedin) {
    return `${obj.firstname} ${obj.lastname}`;
  }
  return false;
}

let printNameResult = printName(user);
let printNameResult2 = printName(user2);

console.log(printNameResult2);

//task3
function getMax(...numb) {
  let maxValue = 0;
  for (let item of numb) {
    if (item > maxValue) {
      maxValue = item;
    }
  }
  return maxValue;
}
let getMaxValueResult = getMax(19, 50, 3, 10, 520);
console.log(getMaxValueResult);
//task4
function testFnc(x) {
  if (x % 2 == 0) {
    return "even";
  }
  return "odd";
}

let testFncResult = testFnc(19);
console.log(testFncResult);
//task5
let array = [1, 2, 3, 4, 5];

for (let i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}
//task6
let firstUserAge = (age) => (age > 18 ? 'სრულწლოვანი' : 'არასრულწლოვანი')
let userAge = 25 ;
let result4 = firstUserAge(userAge)
console.log(result4);