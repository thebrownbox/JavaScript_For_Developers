process.stdout.write("\033c");
//! ===============================================

function main0() {
    const arr = [1, 2, 3, 4, 5, 6];
    arr.sort((a,b) => b-a);
    console.log(arr);
}

main0();
