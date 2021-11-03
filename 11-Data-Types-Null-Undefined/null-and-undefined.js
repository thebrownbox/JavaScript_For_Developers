process.stdout.write("\033c");

function f(a) {
  console.log("a = " + a);
}

function f(a, b) {
  console.log("a = " + a);
  console.log("b = " + b);
}

const a = 1;

f(a);
