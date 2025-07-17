//console.log(Print "Hello World!" to the console)
console.log("Hello World!");

//console.log(Demonstrate sequential execution);
console.log("Step 1: Start");
console.log("Step 2: Processing...");
console.log("Step 3: End");

//console.log(Datatypes: String, Number, Boolean);
console.log("Hello javascript"); // String
console.log(42); // Number  
console.log(true); // Boolean

//console.log(Variables: Declare and assign values);
const a = 20;
let b= 30;
console.log("a="+a);
console.log("b="+b);
var c = a+b;
console.log("a+b="+c);
b = 50;
console.log("reassigned b="+b);
c=a+b;
console.log("a+b="+c);

//a=100; //will throw an error: TypeError:Assignment to constant variable.
//console.log("reassigned a="+a);

//String concatenation
let firstName = "John"; 
let lastName = "Doe";
console.log("First Name: " + firstName);
console.log("Last Name: " + lastName);
let fullName = firstName + " " + lastName;
console.log("Full Name: " + fullName);

//Demonstrate treats numeric as string if concatenated with a string
let firstName1 = 7; // Numeric value
let lastName1 = "Doe";
console.log("First Name: " + firstName1);
console.log("Last Name: " + lastName1);
let fullName1 = firstName1 + " " + lastName1;
console.log("Full Name: " + fullName1);

//Arrays: Declare and assign values;
let numbers = [1, 2, 3, 4, 5];
console.log("Array of numbers: " + numbers);
let names = ["John", "Jane", "Bob"];
console.log("Array of names: " + names);
let mixed = [1, "Hello", true];
console.log("Array of mixed values: " + mixed);
let arr = [1, 2, "hello", 4, true,[5, 6,[7,9]],11];
console.log("Array of arrays: " + arr);
console.log("Accessing first element: " + arr[0]);
console.log("Accessing second element: " + arr[1]);
console.log("Accessing nested array: " + arr[5][0]);
console.log("Accessing nested array sublevel: " + arr[5][2][0]);

//Objects: Declare and assign values;
let person = {
    name: "John",
    age: 30,
    isStudent: false
};
console.log("Person object: " + person);
console.log("Person name: " + person.name);
console.log("Person age: " + person.age);
console.log("Person is student: " + person.isStudent);

//Functions: Declare and call;
function add(a, b) {
    return a + b;
}
let result = add(2, 3);
console.log("Result of addition: " + result);

//If statement: Demonstrate conditional execution;
//Check if a number is even or odd
function isEvenOrOdd(num) {
    if (num % 2 == 0)
        return "even";
    else
        return "odd";
}

let integer = isEvenOrOdd(7);
console.log(integer);

integer = isEvenOrOdd(8);
console.log(integer);
//Check if a person is eligible to vote based on their input age
function checkVotingEligibility(age) {
    if (age<1)
        console.log("Invalid age");
    else if (age < 18)
        console.log("Not eligible to vote");
    else
        console.log("Eligible to vote");
    
}
checkVotingEligibility(6); //not eligible to vote
checkVotingEligibility(20); //eligible to vote
checkVotingEligibility(-3); //invalid age

//Loops:
arr = [1, 3,6,8,10,13,2];
arr_length = arr.length;
//FOR LOOP: print all even numbers in an array
for (let i = 0; i < arr_length; i++) {
    if (arr[i] % 2 == 0) {
        console.log("Even number: " + arr[i]);
    }
}

//FOR LOOP: print all even numbers in an array
for (let i = 0; i < arr_length; i++) {
    if (arr[i] % 2 == 1) {
        console.log("Even number: " + arr[i]);
    }
}

//WHILE LOOP: print all even numbers in an array
let i=0;
while (i < arr_length) {
    if (arr[i] % 2 == 0) {
        console.log("Even number: " + arr[i]);
    }
    i++;
}
//WHILE LOOP: print all odd numbers in an array
i=0;
while (i < arr_length) {
    if (arr[i] % 2 == 1) {
        console.log("Even number: " + arr[i]);
    }
    i++;
}
//Switch statement: Demonstrate multiple conditions;
//Check if a person is eligible to vote based on their input age
function checkVotingEligibility_switch(age) {
    switch (true) {
        case (age < 18):
            return "Not eligible to vote";
        case (age >= 18 && age < 65):
            return "Eligible to vote";
        case (age >= 65):
            return "Senior citizen, eligible to vote";
        default:
            return "Invalid age";
    }
}
