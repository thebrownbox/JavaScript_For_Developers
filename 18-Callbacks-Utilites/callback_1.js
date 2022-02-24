process.stdout.write("\033c");
//! ===============================================
function main01(){
    const arr = [1, 2, 3, 4, 5, 6];

    function printNumber(n){
        console.log(n);
    }
    
    const printNumberFn = function(n){
        console.log(n + " - ");
    }
    
    const printNumberCb = (n) => console.log(n + " . ");
    
    
    
    for (const key of object) {
        
    }
    
    arr.forEach(printNumber);
    arr.forEach(printNumberFn);
    arr.forEach(printNumberCb);
    arr.forEach((n) => console.log(n + " x "));
}

main01();