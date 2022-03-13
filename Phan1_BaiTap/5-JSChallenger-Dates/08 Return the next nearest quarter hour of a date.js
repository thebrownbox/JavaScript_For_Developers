//? Write a function that takes a Date instance as argument
//? It should return the next nearest quarter hour in minutes
//? For example, if the given date has
//? the time 10:01
//? the function should return 15
//? 16 => 30, 31 => 45, 45 => 0

function myFunction(date = new Date()) {
    // const min = date.getMinutes();
    // if (min < 15) return 15;
    // if (min < 30) return 30;
    // if (min < 45) return 45;
    // return 0;

    const k = Math.floor(date.getMinutes() / 15);
    const nextMin = (k + 1) * 15;
    // return nextMin === 60 ? 0 : nextMin;
    const diffMin = nextMin - date.getMinutes();
    date.setTime(date.getTime() + diffMin * 60 * 1000);
    return date.getMinutes();
}

console.log(myFunction(new Date(2021, 8, 10, 15, 14, 00)));
//* 15
console.log(myFunction(new Date(2021, 8, 10, 15, 31, 00)));
//* 45
console.log(myFunction(new Date(2021, 8, 10, 15, 22, 00)));
//* 30
console.log(myFunction(new Date(2021, 8, 10, 15, 46, 00)));
//* 0
