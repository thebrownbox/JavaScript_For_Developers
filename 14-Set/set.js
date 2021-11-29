process.stdout.write("\033c");
//! ===============================================
const mySet = new Set();

const a = {
    valueOf() {
        return 1;
    },
};

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(3);
mySet.add(3);
mySet.add(a);
mySet.add(a);

console.log(mySet);
