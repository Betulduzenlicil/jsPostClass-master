// * =======================================================
// *             FOR LOOP
// * =======================================================

console.log(" **** FOR ****");

// for(let i=1;i<4;i++){
//     console.log("Merhaba")
// }
// ?10 kere konsola Merhaba yazdıran uygulamayı for döngüsü ile
// yazınız
// for (let i=1; i<=10;i++){
//     console.log("betül")
// }
// for(let i=1; i<=10;i++){
//     document.getElementById("for").innerHTML+= "<br/>" + "Betül"
// }
// for (let i=1; i<=10;i++){
//        console.log(i,"Merhaba")
//        console.log(`${i}.Merhaba`)
//        console.log(`BETÜL`)
//     }

// //? 100 adet cikti veren kodu yaziniz.

// for (let i = 1; i <= 100; i++) {

//   console.log(`${i}-BAŞARACAĞIM`)
// }
// for (let i = 1; i <= 100; i++) {

//     document.getElementById("for").innerHTML+= "<br/>"+" Başaracağım"
//   }
//   for (let i = 1; i <= 100; ++i) {

//     document.getElementById("for").innerHTML+= "<br/>" + i, " Başaracağım"
//   }
// for (let i=1; i<=5; i++){
//     console.log(i**2)
// }
// console.log(i) // çalışmaz çünkü globalde tanımlı i yok Uncaught ReferenceError: i is not defined

// for (let i = 1; i <= 100; i *= 2) {
//   console.log(`${i}-FS14`)
// }
// 1 - FS14
// 2 - FS14
// 4 - FS14
// 8 - FS14
// 16 - FS14
// 32 - FS14
// 64 - FS14

// //? 1 den n kadar sayilari toplayan kodu yaziniz.

// const n = prompt("Enter your number")
// let sum = 0 //* Global degisken

// for (let i = 1; i <= n; i++) {
//   //! i lokal degiskendir
//   //   sum = sum + i
//   sum += i //* kisa hali
//   console.log(sum)
// }
// // console.log(i)  //! Error
// console.log(`SUM: ${sum}`)
// *örnekler
//?1- 1 den 10 kadar olan sayıların toplamını yazdıran program:

// document.querySelector("#for").innerHTML =

//?2- 1 den n kadar olan sayıların toplamını yazdıran program.
// NOT: n prompt ile dışarıdan girilebilir
// let n = prompt("Bir sayı giriniz")
// let sum=0
// for(let i=1; i<=n; i++){
//     sum +=i
//     console.log(sum)  
// }
// // console.log(sum)
// // document.getElementById("for").innerHTML+= "<br/>" + sum;





//? 3- 0-100 Arasinda n adet rasgele tamsayi sayi ureten kodu
//? for dongusu ile yaziniz..
//? Math.random() => 0 - 1 arasinda rasgele bir sayi üretir.

// let sayı= prompt("sayınızı yazınız")
// for (let i=0; i<=sayı; i++){
//     let newSayı=Math.round(Math.random() *10)
//     console.log(newSayı)
//     document.getElementById("for").innerHTML+= "<br/>" + newSayı;
// }





// const adet = prompt("kac adet sayi uretmek istersiniz:?");

// for (let sayac = 1; sayac <= adet; sayac++) {
//   const rasgeleSayi = Math.round(Math.random() * 100);
//   //   rasgeleSayi++ //*!Uncaught TypeError: Assignment to constant variable.
//   console.log(`${sayac}. sayiniz : ${rasgeleSayi}`);
// }
//* NOT:
//* Math.floor() =>en yakin alt tamsayiya yuvarlar
//* Math.ceil() =>en yaki ust tamsayiya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.

//? ODEV1: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//? for dongulerini kullanarak yaziniz.

//* NOT:
//* 1 ve kendisinden başka böleni olmayan sayılar ASAL sayılardır.
//* Eğer girilen sayı, herhangi bir sayıya tam bölünüyorsa diğer sayıları kontrol etmeye gerek yoktur. ASAL DEĞİL diyebiliriz.
//* break deyimi ile dongu bir koşul gerçekleştiğinde kırılabilir.



// ?1.yol
// let sayi = +prompt("Enter a number");
// let sayac = 0;

// if (sayi == 1) {
//   sayac += 1;
// } else {
//   for (let i = 2; i < sayi; i++) {
//     if (sayi % i == 0) {
//       sayac += 1;
//     } else {
//       sayac = sayac;
//     }
//   }
// }

// console.log(sayac ? "Asal degil" : "Asal");

// ?2.yol

// const sayi = +prompt("Pozitif Bir Sayiyi Giriniz: ");
// let flag = true;

// if (sayi == 1) {
//   flag = false;
// } else {
//   for (let i = 2; i < sayi; i++) {
//     if (sayi % i == 0) {
//       flag = false;
//       break;
//     }
//   }
// }

// console.log(flag ? "Asal" : "Asal degil");

// ?3.yol
// let isPrime = +prompt("Please enter the number");
// let count = 0;
// for (let i = 2; i < isPrime; i++) {
//   if (isPrime % i == 0) {
//     count += 1;
//     break;
//   }
// }
// console.log(
//   isPrime <= 1 ? "Hic Asal değil" : count > 0 ? "Asal degil" : "Asal"
// );


