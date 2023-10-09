//Bai 1
// let x =+prompt("nhap vao diem vat li");
// let y =+prompt("nhap vao diem hoa" );
// let z =+prompt("nhap vao diem sinh");
// let A,B;
// A=(x+y+z)/3;
// B=x+y+z;
// alert('diem trung binh' +A);
// alert('tong' +B);

//Bai 2
// let C = +prompt("do C");
// F=(C/5)*9+32;
// alert("Do F la :" +F);

//Bai 3
// let r=+prompt("Nhap vao ban kinh :");
// S=r*r*3.14;
// alert("dien tich hinh tron la : " +S);

//Bai 4
// let r=+prompt("Nhap vao ban kinh ");
// C=2*r*3.14;
// alert("chu vi hinh tron la" +C);

//đổi tien
// function Money() {
//  const amount = document.getElementById('Amount').value;
//  const currency_1 = document.getElementById('Currency_1').value;
//  const currency_2 = document.getElementById('Currency_2').value;
//  if (currency_1 === currency_2) {
//   Rates = amount;
//  } else if (currency_1 == "VND" && currency_2 == "USD") {
//   Rates = amount / 24000;
//  } else if (currency_1 == "USD" && currency_2 == "VND") {
//   Rates = amount * 24000;
//  }
//  document.getElementById("result").innerHTML = Rates;
// }

// Máy Tính

function Addition( ) {
    let a=+document.getElementById('1').value;
    let b=+document.getElementById('2').value;

    result='Result Divison : '+ (a+b);
    document.getElementById('Result').innerHTML=result;
}function Subtraction() {
    let a=+document.getElementById('1').value;
    let b=+document.getElementById('2').value;

    result='Result Divison : ' + (a-b);
    document.getElementById('Result').innerHTML=result;
}function Muiltiplication() {
    let a=+document.getElementById('1').value;
    let b=+document.getElementById('2').value;

    result='Result Divison : ' + (a*b);
    document.getElementById('Result').innerHTML=result;
}function Division() {
    let a=+document.getElementById('1').value;
    let b=+document.getElementById('2').value;

    result='Result Divison : ' + (a/b);
    document.getElementById('Result').innerHTML=result;
}
