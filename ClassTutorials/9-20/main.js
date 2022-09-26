// const jackRabbit = {
//     name: 'Jack',
//     height: "Very Tall"
// }

// const peterRabbit = {
//     name: 'Peter',
//     height: "Kinda Tall"
// }

// console.log(`Hello, my name is ${jackRabbit.name} and I am ${jackRabbit.height}`)
// console.log(`Hello, my name is ${peterRabbit.name} and I am ${peterRabbit.height}`)
// const rabbitProto ={
//     name: "",
//     height:"",
//     sayHello: function(){
//         console.log(`Hello, my name is ${this.name} and I am ${this.height}`);

//     },
// }

// const jackRabbit = Object.create(rabbitProto);
// const peterRabbit = Object.create(rabbitProto);

// jackRabbit.name = "Jack";
// jackRabbit.height="Very Tall";

// peterRabbit.name = "Peter";
// peterRabbit.height = "Kinda Tall";

// jackRabbit.sayHello();
// peterRabbit.sayHello();

// function createRabbit(name, height){
//     const rabbitProto ={
//         name: "",
//         height:"",
//         sayHello: function(){
//             console.log(`Hello, my name is ${this.name} and I am ${this.height}`);

//         },
//     }      
//     const rabbit = Object.create(rabbitProto);
//     rabbit.name = name;
//     rabbit.height = height;
//     return rabbit
// }

// const jackRabbit = createRabbit("Jack", "Very Tall");
// const peterRabbit = createRabbit("Peter", "Kinda Tall");

class Rabbit {
    constructor(name, height){
        this.name = name;
        this.height = height
    }

    sayHello(){
        console.log(`Hello, my name is ${this.name} and I am ${this.height}`);
    }
}

const jackRabbit = new Rabbit("Jack", "Very Tall");
const peterRabbit = new Rabbit("Peter", "Kinda Tall");

jackRabbit.sayHello();
peterRabbit.sayHello();