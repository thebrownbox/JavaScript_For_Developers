process.stdout.write("\033c");
//! ===============================================
const mySet = new Set();
const arr = [1,1,1,2,3,4,4,4,2,2,5,5];

// for (const x of arr) {
//     mySet.add(x);
// }

// console.log(mySet);
// console.log(mySet.has(5));
// console.log(mySet.size);

// mySet.delete(5);
// console.log("--delete--");

// console.log(mySet);
// console.log(mySet.has(5));
// console.log(mySet.size);



var containsDuplicate = function(nums) {
    const mySet = new Set(nums);
    if(mySet.size === nums.length){
        return false;
    }
    return true;
};

const b = [1,2,3];
console.log(containsDuplicate(b));