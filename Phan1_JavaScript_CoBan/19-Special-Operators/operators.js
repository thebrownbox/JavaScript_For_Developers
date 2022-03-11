process.stdout.write("\033c");
//! ===============================================
function doubleNot() {
    console.log("" == false);
    console.log("" === false);
    console.log(!"" === true);
    console.log(!!"" === false);
    console.log(!!"" === false);
}

function andOperator() {
    const x = 1 && 2 && 3;
    console.log(x);
}

function orOperator() {
    // const x = 0 ||  1  ||  2;
    const x = 0 || null || undefined || "";
    console.log(x);
}

function nullishOperator() {
    const k = NaN;
    console.log(k ?? "N/A");
}

function optionalChaining() {
    const thao = {
        name: "Thao",
        age: 18,
        address: {
            street: "Tran Duy Hung",
        },
    };

    const cong = {
        name: "Cong",
        age: 30,
        sayHi: function () {
            console.log(this.name + " say Hi!");
        },
    };

    console.log(thao.address?.street);
    console.log(cong.address?.street);
    cong.sayHi?.();
    thao.sayHi?.();
}

function spreadSyntax() {
    const a = [3, 2, 1, 9];
    console.log(Math.max(1, 2, 3));
    console.log(Math.max(...a));
    console.log("x", 1, 2, 3);

    const cong = {
        name: "Cong",
        age: 10,
        address: "Tran Duy  Hung",
    };
    const cuong = { ...cong, name: "Cuong" };
    console.log(cong);
    console.log(cuong);
}

function destructuringAssignment() {
    const cong = {
        name: "Cong",
        age: 10,
        address: "Tran Duy Hung",
    };

    const { name, age, abc, ...info } = cong;
    console.log(name, age, abc, info);

    const arr = [2, 4, 6, 8];
    const [first, second, ...theRest] = arr;
    console.log(first, second, theRest);
}

destructuringAssignment();
