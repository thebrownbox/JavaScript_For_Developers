process.stdout.write("\033c");
//! ===============================================
// function inRaSo(x){
//     console.log((x+1));
// }

// const inRaVoiDauPhay = function(x){
//     console.log(x + " - ");
// }

const doubleValue = (x) => {
    x = x * 2;
};

function main01() {
    const arr = [1, 2, 3, 4, 5, 6];

    arr.forEach((soHienTai, viTriHienTai, mangHienTai) => {
        arr[viTriHienTai] = soHienTai * 2;
        console.log({ soHienTai, viTriHienTai, mangHienTai });
        console.log();
    });

    console.log(arr);
}

function suDungMap() {
    const arr = [1, 2, 3, 4, 5, 6];

    const doubleArr = arr.map((x) => 2 * x + 1);

    console.log(arr);
    console.log(doubleArr);
}

function suDungFilter() {
    const arr = [1, 2, 3, 4, 5, 6];
    // const soLeArr = [];
    // arr.forEach((x) => {
    //     if (x % 2 == 1) {
    //         soLeArr.push(x);
    //     }
    // });

    // console.log(arr);
    // console.log(soLeArr);

    const soLeArr = arr.filter(x => x % 2 == 1);

    console.log(arr);
    console.log(soLeArr);

}


function suDungFind(){
    const arr = [1, 2, 3, 4, 5, 6];
    // let foundItem = -1;
    // for (const x of arr) {
    //     if(x > 3){
    //         foundItem = x;
    //         break;
    //     }
    // }
    // console.log(foundItem);

    const foundIndex = arr.findIndex(x => {
        if(x > 3){
            return true;
        }
        return false;
    });

    console.log(foundIndex);
}

function suDungSort(){
    const arr = [10, 2, 7, 1, 15, 0];
    arr.sort((a,b) => a-b);
    console.log(arr);
    arr.sort((a,b) => b-a);
    console.log(arr);
}

suDungSort();