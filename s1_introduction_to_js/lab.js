//Lab 1: Viết hàm trả về tuổi khi biết năm sinh

function calculateAge(year){
    if(year<=0) return -1;
    const age=2020-year;
    return age;
}
const myAge=calculateAge(1999);
console.log('My age',myAge);

//Lab 2: Viết hàm tinh chu vi p và diện tích s hình tròn biết bán kính

function tinhChuViHinhTon(r){
    if(r<=0) return -1;
    const P=2*r*Math.PI;
    return P;
}

function tinhDienTichHinhTron(r){
    if(r<=0) return -1;
    const S=r*r*Math.PI;
    return S;
}

console.log('Chu vi hình tròn:',tinhChuViHinhTon(5));
console.log('Diện tích hình tròn: ',tinhDienTichHinhTron(5));

//Lab 3: Hàm dưới đây in ra gì

function printNumber(number){
    if(number>0){
        console.log('Positive');
    }
    console.log('Negative');
}
printNumber(20);