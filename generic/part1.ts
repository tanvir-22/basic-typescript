const fruits: string[] = ["Apple", "mango", "orange"];
const roll: number[] = [1, 3, 4, 5];

function getFirstItem<T>(items: T[]): T {
  return items[0];
}

const result = getFirstItem(fruits);
console.log(result.toUpperCase());
