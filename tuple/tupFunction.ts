type returnFunctionResult = [number, number];

function divMod(a: number, b: number): returnFunctionResult {
  return [Math.floor(a / b), a % b];
}

const result = divMod(4, 5);
console.log(result);
