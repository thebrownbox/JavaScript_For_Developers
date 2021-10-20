process.stdout.write("\33c");
// ?======== integer / float ========
// const a = 1;
// console.log(typeof a);
// const b = Number("1");
// console.log("b = " + b);
// console.log(typeof b);

//?======== range ========
// const MY_MAX = 2 ** 53 - 1;
// console.log("MY_MAX = " + MY_MAX);
// console.log("MAX_SAFE_INTEGER = " + Number.MAX_SAFE_INTEGER);

// const x1 = 0.1;
// const x2 = 0.2;
// const sum = x1 + x2;
// console.log("sum = " + sum);

//?======== check integer ========
// console.log("MY_MAX isSave: " + Number.isSafeInteger(MY_MAX));

//?======== value out of range ========
// let x = MY_MAX + 1;
// console.log("x isSave: " + Number.isSafeInteger(x));
// console.log("x = " + x);

// x++;
// console.log("x isSave: " + Number.isSafeInteger(x));
// console.log("x = " + x);

// console.log("MY_MAX + 1:  " + Number.isSafeInteger(MY_MAX + 1));

//?======== special values ========
// const INF = -1 / 0;
// console.log(INF);

// const MAX = 2 ** 53 - 1;
// let x = MAX;
// while (x != Infinity) {
//   x = x * 2;
//   console.log(x);
// }

// NaN = not a number
// const input = "10c";
// const x = Number(input);
// console.log(x + " : " + typeof x);
// console.log("isNaN(x): " + isNaN(x));
// console.log("Number.isNaN(x): " + Number.isNaN(x));

// console.log("\n" + input + " : " + typeof input);
// console.log("isNaN(x): " + isNaN(input));
// console.log("Number.isNaN(x): " + Number.isNaN(input));

// console.log("\n");
// console.log(1 / "a");
// console.log("a" * "b");

// console.log(NaN == NaN);
// console.log(Infinity == Infinity);

//?======== helper function: Number, Math ========
console.log(Math.max(1, 2));

//?======== number object ========
const x = 10;
const y = new Number(10);

console.log(typeof x);
console.log(typeof y);
