function sayHello(name: String): String{
    console.log(`Hello ${name}`);
    return `Hello ${name}`
}

sayHello("Charlie");

interface Dog {
    name:String
    age:number
}

const buddy:Dog = {
    name:"Rocco",
    age: 0
}

class Classroom{
    roomNumber: Number;

    constructor(roomNumber){
        this.roomNumber = roomNumber;
    }
}

const atlas104 = new Classroom(104);
console.log(atlas104.roomNumber)