process.stdout.write("\033c");
//! ===============================================

console.log("-- Begin --");
setTimeout(
    () => console.log("Goodbye!"),
    2000
);
console.log("-- End --");
