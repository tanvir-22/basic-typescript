const order = new Map<string, number>();

function addorder(juice: string) {
  const total = (order.get(juice) ?? 0) + 1; //?? is called nullish coalesing operator
  order.set(juice, total);
}

addorder("lemon");
addorder("lemon");
addorder("mango");
addorder("mango");
addorder("milkshake");
console.log("order map:", order);
