"use strict";

// task_1
function sum(...numbers) {
  let sum = 0;
  for (let item of numbers) {
    sum += item;
  }
  return sum;
}
let result = sum(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(result);

// task_2
let user = {
  firstname: "giorgi",
  lastname: "saakadze",
  age: 32,
  isloggedin: true,
};

function userStatus(object) {
  if (object.isloggedin) {
    return `${object.firstname} ${object.lastname}`;
  }
  {
    return "false";
  }
}

let theResult1 = userStatus(user);
console.log(theResult1);

// task_3
function maxNumber(numbers2) {
  let maxValue = 0;
  for (let element of numbers2) {
    if (element > maxValue) {
      maxValue = element;
    }
  }
  return maxValue;
}
let result2 = maxNumber([2, 6, 10, 100, 9, -1, -15]);
console.log(result2);

// task_4
function oddOrEven(x) {
  if (x % 2 == 1) {
    return "this number is odd";
  }
  return "this number is even";
}

console.log(oddOrEven(5));

// task_5
let array = [1, 2, 3, 4, 5];
let reversedArray = [];

for (let i = array.length - 1; i >= 0; i--) {
  reversedArray.push(array[i]);
}

console.log(reversedArray);

// task_6
let firstuserage = (age) => (age > 18 ? "სრულწლოვანი" : "არასრულწლოვანი");

let userage = 23;
let result3 = firstuserage(userage);
console.log(result3);
