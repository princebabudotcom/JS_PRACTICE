console.log("Global execution context starts");

var globalVariable = "I am a global variable";

// full body of globalFunction
console.log(globalVariable);
globalFunction(); // create a function local execution context
// try to call undefined

console.log("Global execution context ends");

var globalFunction = function globalFunction() {
  console.log("Inside global function");
};
