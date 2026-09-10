enum Tcolor {
  Red = "red",
  Green = "green",
  Blue = "blue",
}

type Tshirt = {
  id: number;
  color: Tcolor;
};
const tshirt1: Tshirt = {
  id: 40,
  color: Tcolor.Green, //cant assign any color except this three
};
