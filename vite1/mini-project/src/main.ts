import * as z from "zod";
const BookSchema = z.object({
  id: z.number(),
  title: z.string(),
  author: z.string(),
  category: z.string(),
  price: z.number(),
});
const BooksSchema = z.array(BookSchema);
type Book = z.infer<typeof BookSchema>;
const header = document.getElementById("viteheader") as HTMLHeadElement;
const btn = document.getElementById("mybtn") as HTMLHeadElement;

let data: any = [];

btn.addEventListener("click", async () => {
  const response = await fetch("https://tsapidemo.lwhh.org/api/v2/books");
  const result = await response.json();
  const zodresult = BooksSchema.safeParse(result);
  if(!zodresult.success){
    console.error(zodresult.error.issues);
    return
  }
  data = result;
  header.innerText = "api called";
  printData(data[0]);
});

function printData(book : Book) {
  console.log("id: ", book.id);
  console.log("title: ", book.title);
  console.log("author: ", book.author);
  console.log("category: ", book.category);
  console.log("price: ", book.price);
}
