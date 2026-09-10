type Id = string | number;

function printid(id: Id) {
  console.log(`this is your id:${id}`);
}
printid(45);

type Rectangle = {
  width:number,
  height:number
}

type Circle = {
  radius:number
}
type Square = {
  length:number
}
type Shape = Rectangle | Circle | Square
function calculateArea(shape:Shape){
    if('radius' in shape){
        return Math.PI*shape.radius
    }
    else if('length' in shape){
      return shape.length*length
    }
}
const square1 : Shape = {
  length:20
}
calculateArea(square1)