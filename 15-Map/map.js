process.stdout.write("\033c");
//! ===============================================

var majorityElement = function(nums) {
    const myMap = new Map();

    let result = nums[0];
    myMap.set(result, 0);
    
    for (const x of nums) {
        if(myMap.has(x) === false){
            myMap.set(x, 1);
        }else{
            const lastValue = myMap.get(x);
            myMap.set(x, lastValue+1);
        }

        if(myMap.get(x) > myMap.get(result)){
            result = x;
        }
    }

    return result;
};

const m = new Map();
m.set("", {});
m.set({}, "");
console.log(m);