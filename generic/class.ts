class Box <T>{
     value:T ;
     constructor(value:T){
        this.value = value
     }
    print():void{
        console.log(this.value)
    }
}

const object_1 = new Box<number>(4);
const object_2 = new Box<string>("tanvir");
object_1.print()
object_2.print()
