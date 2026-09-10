function add(a: number, b: number): number {
  return a + b;
}
function subtract(a: number, b: number): number {
  return a - b;
}
function multiply(a: number, b: number): number {
  return a * b;
}
function divide2(a: number, b: number): number {
  if (b == 0) {
    throw new Error("can't divide by zero");
  }
  return a / b;
}
console.log("add:", add(5, 5));
console.log("sub:", subtract(5, 5));
console.log("mul:", multiply(5, 5));
console.log("div:", divide2(5, 5));
//just command `tsc` to transpile ts to js
//use tsc --watch to update the transpile automatically in ts file
//this also transpile multiple ts files to js files in the same directory
