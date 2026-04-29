/* 
 
    Data Types: what type of value holds and store and operation can perform on it .
      Primitives: Are immutable and are stored directly in the location that the variable accesses. They include:
        - String
        - Number
        - Boolean
        - Null
        - Undefined
        - Symbol (ES6)
        - BigInt

        Non-Primitives:Reference Types: Are mutable and are stored as a reference to the location in memory where the data is stored. They include:
        - Object
        - Array
        - Function


 */

// immutable data types (primitives)
let a = 10; // Number
let b = a;

b = 20;

console.log(a); // Output: 10
console.log(b); // Output: 20

// mutable data types (objects)
let obj1 = { name: "Alice" }; // Object
let obj2 = obj1;

obj2.name = "Bob";

console.log(obj1); // Output: { name: "Bob" }
console.log(obj2);

let arr = [1, 2, 3]; // Array
let arr2 = arr;

arr2.push(4);

console.log(arr); // Output: [1, 2, 3, 4]

// difference between null and undefined
let x; // undefined => variable declared but not assigned a value
let y = null; // null => explicitly assigned to indicate no value or empty value

// type of x is undefined , which means that the variable has been declared but has not been assigned a value. It is a primitive data type in JavaScript and represents the absence of a value or an uninitialized variable.
// type of y is object, which is a historical bug in JavaScript, but it is still used to represent the absence of any object value.

console.log(x); // Output: undefined
console.log(y); // Output: null

// coercion
let num = 5; // Number
let str = "5"; // String

console.log(num == str); // Output: true (loose equality, type coercion occurs)
console.log(num === str); // Output: false (strict equality, no type coercion)
console.log(num + str); // Output: "55" (number is coerced to a string and concatenated)
console.log(str + num);
console.log(num - str); // Output: 0 (string is coerced to a number and subtraction is performed)

// == vs ===
// == check value equality with type coercion, meaning it converts the operands to the same type before making the comparison.
// === check both value and type equality without performing type coercion. It returns true only if both the value and the type are the same.

// NaN (Not a Number) is a special value in JavaScript that represents an invalid number.

console.log(NaN == NaN); // Output: false (NaN is not equal to itself)
console.log(NaN === NaN); // Output: false (NaN is not equal to itself)

console.log(isNaN(NaN)); // Output: true (isNaN function checks if the value is NaN)
console.log(isNaN(5)); // Output: false (5 is a valid number)
console.log(isNaN("hey")); // Output: true (hey is not a number)
console.log(Number.isNaN(5)); //

// type of : return a string identifing the type

console.log(typeof null);
console.log(typeof function () {});
console.log(typeof []); //

// true and false

// let vs var vs const

// var : var is a function scoped and can we re-declared .
// let : blcok scoped and can we re-assign new value and cannot be re-declared TDZ (Temporal Dead Zone) .
// const : block and cannot re-assign and cannot be re-declared .

// declare
let n;
// assign
n = 100;
// intilization
let m = 20;
// re-assign
n = 50;
