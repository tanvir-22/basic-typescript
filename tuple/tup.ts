type rollmark = [number, number]; //a tuple type use when fixed array data is expected

const student1: rollmark = [1, 100];
const student2: rollmark = [2, 98];
console.log(student1);

type player = [string, string, number]; //name,country,jersey

// const player1: player[] = [
//   ["ronaldo", "portugal", 7],
//   ["messi", "argentina"], //must need the three values
// ];
type product = readonly [number, number]; //id and quantity

const product1: product = [1, 10];
product1.push(3); //can mutate without readonly
product1.push(45);
console.log(product1);
