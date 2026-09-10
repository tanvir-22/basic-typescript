const user: {
  id: number;
  fullname: string;
} = {
  id: 3,
  fullname: "john",
};
user.id = "s"; //cant assign string in id property

const stud: {
  id: number;
  fullname: string;
} = {
  id: 5,
  fullname: "doe",
};
stud.fullname = "jane";

/*
so everytime we are repeating this : {
   id: number;
   fullname: string;
}
*/

type UserTemplate = {
  //use the first letter capital
  //also you can use interface instead of type(dont use `=` then)
  id: number; //instead comma you can use `;`
  name: string;
};

const person1: UserTemplate = {
  //now just use that type as new type of object
  id: 10,
  name: "kamal",
};
person1.name = 45;
