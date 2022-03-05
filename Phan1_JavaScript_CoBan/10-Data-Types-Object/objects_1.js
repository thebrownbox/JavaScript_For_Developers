process.stdout.write("\033c");

//! ===============================================
const myObject = {
    lastName: "Hoang",
    firstName: "Cong",
    dob: 1992,

    getFullName() {
        return this.firstName + " " + this.lastName;
    },
    getAge() {
        return 2021 - this.dob;
    },
};

console.log(myObject);
console.log(myObject.getFullName());
console.log(myObject.getAge());

//! ===============================================
const anotherObject = {};

anotherObject.dob = 1992;
anotherObject.getAge = function () {
    return 2021 - this.dob;
};

console.log(anotherObject);
console.log(anotherObject.dob);
console.log(anotherObject.getAge());
