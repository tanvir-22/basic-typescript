type User = {
    name:string,
    age:number
};
type Product = {
    product_name: string,
    price:number
}

type ResponseTemp<T> = {
    data:T,
    success:boolean
}

const userResponse:ResponseTemp<User> = {
    data:{
        name:"tanvir",
        age:39
    },
    success:true
}
const productResponse:ResponseTemp<Product> = {
    data:{
        product_name:"iphone18",
        price:2000
    },
    success:true
}
console.log(userResponse)
console.log(productResponse)
