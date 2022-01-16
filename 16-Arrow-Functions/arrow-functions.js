process.stdout.write("\033c");
//! ===============================================


const sayHello = function (name){
    console.log("Hello " + name);
}

const sayGoodbye = name => {
    console.log("Goodbye " + name);
}

const sayHi = () => {
    console.log("Hi!");
}

const sayHi2 = () => console.log("Hi2!");

let saySomething = sayHello;
saySomething("Cong")
saySomething = sayGoodbye;
saySomething("Cong")

sayHi();
console.log(sayHi2());


const sum = (a,b) => a + b;

console.log(sum(1,2));
     
const getStudent = (n, a) => ({
    name: n,
    age: a
})
    


console.log(getStudent("Cong", "19"))