process.stdout.write("\033c");
//! ===============================================

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.getFullname = function () {
        return this.name + " Hoang";
    };
}

Person.prototype.lastName = "N/A";

const o1 = new Person("Jim", 20);
const o2 = new Person("Jack", 10);

console.log(o1);
console.log(o1.__proto__);
console.log(o2.__proto__);

console.log(o1.lastName);
console.log(o2.lastName);
