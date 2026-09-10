// use node "filename.ts" to run
function divide(num1: number, num2: number): number {
  //use void if the function return nothing
  if (num2 == 0) {
    throw new Error("can't divide by zero");
  }
  return num1 / num2;
}

const result = divide(5, 2);
const result2 = divide("x", 2); //if type not mentioned NaN
console.log(result2);
console.log(result.toFixed(4)); //only shows the method related to type of result
