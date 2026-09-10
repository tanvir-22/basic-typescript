//npx tsx filename
type User = {
  id: number; //you can use id?:number to make it optional instead omit
  name: string;
  email: string;
};

const userArray: User[] = [];
let lastid: number = 0;

function addUser(user: Omit<User, "id">) {
  const newUser = {
    ...user,
    id: lastid++,
  };
  userArray.push(newUser);
  return newUser;
}

addUser({ name: "jamil", email: "jamil123@gmail.com" });
console.log(userArray);
