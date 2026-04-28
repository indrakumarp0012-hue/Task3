// Task 1: Student Form Function
function studentForm(name, age, course) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Course:", course);
}

// Function call
studentForm("Indra Kumar", 22, "MERN");

// Task 2: Calculator Function
function calc(a, b) {
    console.log("Addition:", a + b);
    console.log("Subtraction:", a - b);
    console.log("Multiplication:", a * b);
}

// Function call
calc(10, 5);

// Task 3: Reusable Greeting
function greet(name) {
    console.log("Hello", name);
}

// Calling same function for 3 users
greet("Kamal");
greet("Praveen");
greet("Sai");

// Task 4: Return Value
function square(num) {
    return num * num;
}

// Example usage
console.log(square(5)); // 25

// Task 5: Scope Check 
function showSecret() {
    let secret = "javascript";
    console.log("Inside function:", secret);
}

showSecret();

// Trying to access outside
console.log("Outside function:", );

// Task 6: Merge Arrays
let boys = ["car", "bike"];
let girls = ["doll", "teddy"];

// Merge using spread operator
let result = [...boys, ...girls];

console.log(result);

// Task 7: Unlimited Numbers
function sumAll(...nums) {
    let total = 0;

    for (let num of nums) {
        total += num;
    }

    return total;
}

// Function call
console.log(sumAll(10, 20, 30, 40));

// Task 8: Array Destructuring
let colors = ["red", "green", "blue"];

// Destructuring
let [c1, c2, c3] = colors;

// Print values
console.log(c1, c2, c3);

// Task 9: Object Destructuring
let emp = {
    name: "Indra",
    role: "Developer",
    salary: "6LPA"
};

// Destructuring
let { name, role } = emp;

// Print values
console.log(name, role);

// Task 10: Offer Generator
function* offerGenerator() {
    yield "10% cashback";
    yield "20% cashback";
    yield "50% cashback";
    yield "Try again";
    return "No more offers";
}

// Create generator object
let offers = offerGenerator();

// Calling next()
console.log(offers.next().value); 
console.log(offers.next().value); 
console.log(offers.next().value); 
console.log(offers.next().value); 
console.log(offers.next().value); 
console.log(offers.next().value); 

// Task 11: Curry Function
function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

// Function call
console.log(add(10)(20)(30)); // 60

// Task 12: Student Marks Analyzer
function marks(...nums) {
    let total = 0;

    for (let num of nums) {
        total += num;
    }

    let average = total / nums.length;

    console.log("Total =", total);
    console.log("Average =", average);
}

// Function call
marks(80, 90, 70, 60);

//Challenge Task (Real Company Level)
function register(name, role, ...skills) {
    console.log("Name:", name);
    console.log("Role:", role);
    console.log("Skills:", skills.join(" "));
}

// Function call
register("Indra Kumar", "Frontend", "HTML", "CSS", "JS", "React");