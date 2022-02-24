process.stdout.write("\033c");
//! ===============================================
function main02(){
    function printNumber(person){
        person.age = 100;
        console.log(person);
    }
    
    const printNumberFn = function(n){
        console.log(n + " - ");
    }
    
    const printNumberCb = (n) => console.log(n + " . ");
    
    
    const arr = [{name: "Cong", age: 10}, {name: "Jim", age: 20}];
    
    arr.forEach(printNumber);
    arr.forEach(printNumberFn);
    arr.forEach(printNumberCb);
    
    console.log(arr);
}

main02();