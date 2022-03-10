//? This challenge is a little bit more complex
//? Write a function that takes a number (a) as argument
//? If a is prime, return a
//? If not, return the next higher prime number

function myFunction(a) {
    const isPrime = (a) => {
        for (let i = 2; i < a; i++) {
            if (a % i === 0) {
                return false;
            }
        }
        return true;
    };

    if (isPrime(a)) {
        return a;
    }
    while (!isPrime(a)) {
        a++;
    }
    return a;
}

console.log(myFunction(38)); //* 41
console.log(myFunction(7)); //* 7
console.log(myFunction(115)); //* 127
console.log(myFunction(2000)); //* 2003
