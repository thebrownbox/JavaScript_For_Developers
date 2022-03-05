process.stdout.write("\033c");
// const arr = [1, 2, 3, "Bon", "Num", {}];
// console.log(arr);
// console.log(arr.length);

// arr[100] = 100;
// console.log(arr);
// console.log(arr.length);

// //! Property
// arr.name = "Danh Sach";
// console.log(arr);
// console.log(arr.length);

// arr["initTime"] = "2000";
// console.log(arr);
// console.log(arr.length);

// //! const
// const a = [];
// a[1] = 0;
// console.log(a);
// console.log(Array.isArray(a));

//! For-of loop
// const arr = [1, 2, 3, "Bon"];
// for (const x of arr) {
//   console.log(typeof x);
// }

// //! For-in loop
// for (const index in arr) {
//   console.log(arr[index]);
// }

//! forEach callback
// arr.forEach((e) => {
//   console.log(e);
// });

//! Stack
// const arr = [];
// arr.push(1);
// arr.push(2);
// arr.push(3);
// while (arr.length > 0) {
//   const removedE = arr.pop();
//   console.log(removedE);
// }

//! Queue
// const arr = [];
// arr.push(1);
// arr.push(2);
// arr.push(3);
// while (arr.length > 0) {
//   const removedE = arr.shift();
//   console.log(removedE);
// }

//! Splice
const arr = [1, 2, 3];
// arr.splice(1, 2);
// console.log(arr);

// arr.splice(1, 2, "Hai", "Ba");
// console.log(arr);

//! slice - subString
// const fixedArr = arr.slice(1, 3);
// console.log(arr);
// console.log(fixedArr);

const arr2 = [4, 5, 6];
const mergeArr = arr.concat(arr2);
console.log(arr);
console.log(arr2);
console.log(mergeArr);
