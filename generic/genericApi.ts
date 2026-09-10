type User1 = {
  id: number;
  name: string;
  email: string;
};
type Product = {
  id: number;
  productname: string;
  isavailable: boolean;
  quantity: number;
  expirydate: Date;
};
type Order = {
  id: number;
  amount: number;
  shiping_status: "placed" | "shiped" | "delivered";
};

async function get<T>(apiendpoint: string): Promise<T> {
  const response = await fetch(apiendpoint);
  return response.json();
}
const order1 = await get<Order[]>("/api/order");
// order1[9].id
