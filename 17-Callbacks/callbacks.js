process.stdout.write("\033c");
//! ===============================================
const tinhTong = (a, b) => (a + b);
const tinhHieu = (a, b) => (a - b);
const tinhTich = (a, b) => (a * b);
const tinhThuong = (a, b) => (a / b);

const phepToan2SoHang = (phepTinhFunc, a, b) =>{
    const kq = phepTinhFunc(a, b);
    return kq;
}


const a = 1;
const b = 2;
console.log( phepToan2SoHang(tinhTong, a, b) );
console.log( phepToan2SoHang(tinhThuong, a, b) );
console.log( phepToan2SoHang(tinhHieu, a, b) );
