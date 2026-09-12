function getName<T extends {name:string}>(user:T){
    return user.name
}
const myname = getName({name:'Tanvir',age:26,university:'NSU'}) //user could be any object but name property must be there
console.log(myname)
