enum Status {
  draft, //its value is 0 by default
  private, //0+1
  public  //0+2
}

type ArticleTemplate = {
  id: number;
  title: string;
  status: Status;
};
const article1: ArticleTemplate = {
  id: 1,
  title: "Job nai",
  status: Status.private,
};
console.log(article1);
