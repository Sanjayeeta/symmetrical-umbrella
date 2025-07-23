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

//PROBLEM1
// Write a function that checks if an element is present in an array and returns the corresponding index.
//if the element is not found, return -1.
function test_problem1(arr, ele)
{
    let l = arr.length;
    for (let i = 0; i < l; i++)
    {
        if (arr[i] == ele)
        {
            return i;
        }
    }
    return -1;
}

//PROBLEM1: Test Cases:
let test_res = test_problem1([1, 2, 4, 5, 18, 7], 5);
console.log(test_res);
test_res = test_problem1([1, 2, 4, 5, 18, 7], 10);
console.log(test_res);

//PROBLEM2
// Write a function that takes an array of numbers and returns the count of all negative numbers in it.

function test_problem2(arr)
{
    let count = 0;
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] < 0)
        {
            count=count+1;
        }
    }
    return count;
}

//Test Cases:
a = test_problem2([1, -2, 4, 5, -18, 7]);
console.log(a);
a = test_problem2([1, 2, 4, 5, -18, 7]);
console.log(a);

//PROBLEM3
// Write a function that takes an array of numbers and returns largest number in it.
function test_problem3(arr)
{
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] > largest)
        {
            largest = arr[i];
        }
    }
    return largest;
}

//Test Cases:
a = test_problem3([1, -2, 18, 5, -18, 7]);
console.log(a);
a = test_problem3([1, 2, 4, 5, -18, 7]);
console.log(a);
a = test_problem3([-11, -2, -4, -5, -18, -7]);
console.log(a);


//PROBLEM4
// Write a function that takes an array of numbers and returns smallest number in it.

function test_problem4(arr)
{
    let s = arr[0];
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] < s)
        {
            s = arr[i];
        }
    }
    return s;
}

//Test Cases:
a = test_problem4([1, -2, 18, 5, -18, 7]);
console.log(a);
a = test_problem4([1, 2, 4, 5, -98, 7]);
console.log(a);
a = test_problem4([-11, -2, -4, -5, -18, -7]);
console.log(a);

//PROBLEM: 
//Write a function that returns the second largest number in an array of numbers.
//LOGIC:
//When we find a new largest, the previous largest becomes the second largest.
//Update second largest when there is an element that is not more than the largest but is greater than second largest
function secondLargest(arr) {
    if (arr.length < 2)
        return -1;
    let l = arr[0];
    let s = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > l) {
            s = l;
            l = arr[i];
        }
        else if (arr[i] > s && arr[i] != l) {
            s = arr[i];
        }
    }
    return s;
}

//Test Cases:
//EDGE CASES:
//1. Empty Array
//2. Array with 1 element
//3. Array with negative elements
//4. Array with duplicates
a = secondLargest([1,18, -2, 18, 5, -18, 7]); //check for duplicates and negative numbers
console.log(a);
a = secondLargest([]); //Check empty array
console.log(a);
a = secondLargest([8]); // check single element array
console.log(a);
a = secondLargest([1, 2, 4, 5, 7]);
console.log(a);
a = secondLargest([-11, -2, -4, -5, -18, -7]); //Check naegative
console.log(a);

/*******
 * LOOP IN LOOP *
 * STAR PATTERNS *
*******/

let n = 4;

//Star Pattern 1
console.log("STAR PATTERN 1")
for (let i = 0; i < n; i++) {
    let s = "";
    for (let j = 0; j < n; j++) {
        s = s + "*"
    }
    console.log(s);
}

console.log("--------------------------")

console.log("STAR PATTERN 2")
for (let i = 0; i < n; i++) {
    let s = "";
    for (let j = 0; j <= i; j++) {
        s = s + "*"
    }
    console.log(s);
}

console.log("--------------------------")

n = 5
console.log("STAR PATTERN 3")
for (let i = 1; i <= n; i++) {
    let s = "";
    for (let j = 1; j <= i; j++) {
        s = s + j;
    }
    console.log(s);
}

console.log("--------------------------")

n = 5
console.log("STAR PATTERN 4")
for (let i = 1; i <= n; i++) {
    let s = "";
    for (let j = 1; j <= i; j++) {
        s = s + i;
    }
    console.log(s);
}

console.log("--------------------------")

n = 5
console.log("STAR PATTERN 5 - 1st Way")
for (let i = 1; i <= n; i++) {
    let s = "";
    for (let j = n; j >= i; j--) {
        s = s + (n - j + 1);
    }
    console.log(s);
}

console.log("--------------------------")

n = 5
console.log("STAR PATTERN 5 - 2nd Way")
for (let i = n; i >= 1; i--) {
    let s = "";
    for (let j = 1; j <= i; j++) {
        s = s + j;
    }
    console.log(s);
}

console.log("--------------------------")

n = 5
console.log("STAR PATTERN 6 - 1st Way")
for (let i = 1; i <= n; i++) {
    let s = "";
    for (let j = n; j >= i; j--) {
        s = s + '*';
    }
    console.log(s);
}

console.log("--------------------------")

n = 5
console.log("STAR PATTERN 6 - 2nd Way")
for (let i = n; i >= 1; i--) {
    let s = "";
    for (let j = 1; j <= i; j++) {
        s = s + '*';
    }
    console.log(s);
}

console.log("--------------------------")

n = 5
console.log("STAR PATTERN 7 - 1st Way")
for (let i = n; i >= 1; i--) {
    let s = "";
    for (let j = 1; j <= n; j++) {
        if (j < i) {
            s = s + " ";
        }
        else {
            s = s + "*";
        }
    }
    console.log(s);
}

console.log("--------------------------")

n = 5
console.log("STAR PATTERN 7 - 2nd Way")
for (let i = 0; i < n; i++) {
    let s = "";
    for (let j = 0; j < n - i + 1; j++) {
        s = s + " ";
    }
    for (let j = 0; j < i + 1; j++) {
        s = s + "*";
    }
    console.log(s);
}

console.log("--------------------------")

n = 6
console.log("STAR PATTERN 8 - Way 1")
for (let i = 1; i <= n; i++) {
    let s = "";
    for (let j = 1; j <= i; j++) {
        if (j % 2 == 0)
        {
            s = s + '0';
        }        
        else {
            s = s + '1';
        }
    }
    console.log(s);
}

console.log("--------------------------")

n = 6
console.log("STAR PATTERN 8 - Way 2")
for (let i = 1; i <= n; i++) {
    let s = "";
    let toggle = 1;
    for (let j = 1; j <= i; j++) {
        s = s + toggle;
        if (toggle == 0)
        {
            toggle = 1;
        }
        else
        {
            toggle = 0;
        }
    }
    console.log(s);
}

console.log("--------------------------")

n = 5
console.log("STAR PATTERN 9")
let toggle = 1;
for (let i = 1; i <= n; i++) {
    let s = "";
    for (let j = 1; j <= i; j++) {
        s = s + toggle;
        if (toggle == 0) {
            toggle = 1;
        }
        else {
            toggle = 0;
        }
    }
    console.log(s);
}