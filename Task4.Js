// Task 1: Array Basics
let arr = [10, 20, 30, 40, 50];

// First element
console.log("First element:", arr[0]);

// Last element
console.log("Last element:", arr[arr.length - 1]);

// Total length
console.log("Total length:", arr.length);

// Task 2: Push & Pop
 {
  let arr = [1, 2, 3];

  arr.push(4, 5);
  arr.pop();

  console.log(arr);
}

//Task 3: Includes Check
 arr = ["html", "css", "javascript", "react"];

// Check if "javascript" exists
let exists = arr.includes("javascript");

console.log(exists);

//Task 4: Filter Salaries
let emp = [
  { name: "A", salary: 10000 },
  { name: "B", salary: 50000 },
  { name: "C", salary: 30000 }
];

//  Filter Salaries (> 20000)
let filtered = emp.filter(e => e.salary > 20000);
console.log("Filtered:", filtered);

//  Task 5: Map Names
let names = emp.map(e => e.name);
console.log("Names:", names);

//  Task 6: Reduce Sum (Total Salary)
let totalSalary = emp.reduce((sum, e) => sum + e.salary, 0);
console.log("Total Salary:", totalSalary);

// Task 7: Remove Duplicates
let arr1 = [1, 2, 2, 3, 4, 4, 5];

// Using Set
let unique = [...new Set(arr1)];

console.log(unique);

// Task 8: Find Largest Number
let arr2 = [10, 200, 5, 90];

let largest = arr2.reduce((max, num) => num > max ? num : max);

console.log(largest);

// Task 9: Reverse String WITHOUT reverse
let str = "hello";

let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}

console.log(reversed);

// Task 10: Group by Salary
let emp1 = [
  { name: "A", salary: 10000 },
  { name: "B", salary: 50000 },
  { name: "C", salary: 10000 }
];

let grouped = emp.reduce((acc, e) => {
  if (!acc[e.salary]) {
    acc[e.salary] = [];
  }
  acc[e.salary].push(e.name);
  return acc;
}, {});

console.log(grouped);

//  Task 11: Flatten Array 
let nestedArr = [1, [2, [3, [4]]]];

function flatten(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flatten(nestedArr));

// Task 12: Custom Sort 
let numbers = [5, 2, 9, 1];

numbers.sort((a, b) => b - a);

console.log(numbers);

// Task 13: Find Second Largest
let Arr1 = [10, 50, 20, 40];

let first = -Infinity;
let second = -Infinity;

for (let num of arr1) {
  if (num > first) {
    second = first;
    first = num;
  } else if (num > second && num !== first) {
    second = num;
  }
}

console.log(second);

// Task 14: Count Characters
let String = "aabbccdde";

let count = {};

for (let ch of String) {
  count[ch] = (count[ch] || 0) + 1;
}

console.log(count);








   












