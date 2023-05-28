// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================
//! --------- WHILE -----------

// ?10 kere konsola Merhaba yazdıran uygulamayı while döngüsü ile yazınız


console.log("****** WHILE *******");
// ##
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// console.log("BYE");


// let i= 0;
// while(i<10){
//   console.log("Merhaba"); i++;
 
// }

//* Kalvyeden Q KARAKTERİ GİRİLENE KADAR NOT GİRİŞİ YAPAN DÖNGÜYÜ KURUNUZ


// let harf;
// while(harf!="q"){
//   harf = prompt("Lütfen karakter giriniz").toLowerCase();
// }
// console.log("Doğru karakteri buldunuz")


//? Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.


// let num =+prompt("Enter your number (0-100)")
// while (num <0 || num>100){
//   console.log(`${num} lütfen geçerli aralıkta sayı giriniz`);
//   num= +prompt("Başka sayı giriniz")  
//   }
// console.log("Başardınız")


//! ------  DO - WHILE -------
// let not2;
// do {
//   not2 = prompt("Lütfen 0-100 arasinda bir not giriniz:");
//   // if (not < 0 || not > 100) {
//   //   alert("Not 0'dan küçük veya 100'den büyük olamaz")
//   // }
//   console.log(not2);
// } while (not2 < 0 || not2 > 100);

// console.log("Notunuz:", not2);

// //! ------  FOR -------
// let not3 = prompt("Lütfen 0-100 arasinda bir not giriniz:");
// for (; not3 < 0 || not3 > 100; ) {
//   alert("Not 0'dan küçük veya 100'den büyük olamaz");
//   not = prompt("Lütfen 0-100 arasinda bir not giriniz:");
// }

// console.log("Notunuz:", not3);


// * ============================================
// *            Tahmin oyunu-1.yol
// * ============================================

// console.log("OYUN");

// let devam;
// do {
//   let hak = 3;
//   const rasgeleSayi = console.log(rasgeleSayi); //Math.floor(Math.random() * 100 + 1);

//   do {
//     const tahmin = Number(prompt("Lütfen 0-100 arasında bir sayi giriniz:"));
//     hak -= 1;
//     if (tahmin === rasgeleSayi) {
//       console.log(`Tebrikler ${3 - hak}. denemede bildiniz.🥳`);
//       break;
//     } else {
//       console.log(`Dikkat ${hak} hakkınız kaldı`);
//       if (tahmin < rasgeleSayi) {
//         console.log("ARTTIR ⬆️");
//       } else {
//         console.log("AZALT ⬇️");
//       }
//     }
//   } while (hak > 0);

//   if (hak === 0) {
//     console.log("Üzgünüz oyunu kaybettiniz 😔");
//   }

//   devam = prompt("Yeniden oynamak ister misiniz e/h?");
// } while (devam == "e" || devam == "E");

// console.log("Yine bekleriz");

// * ============================================
// *            Tahmin oyunu .yol
// * ============================================

// let answer;
// let i=0;
// let computer=Math.round(Math.random()*100);
// while (true){
//     while (i<7){
//         let user=+prompt("Please enter  a number between 0-100");
//         if (computer===user){
//             console.log("Mastermind")
//             break
//         } else if (user<computer){
//             console.log("Your number is lower than computer, increase your number")
//             i++
//             continue
//         } else {
//             console.log("Your number is greater than computer, decrease your number")
//             i++
//             continue
//         }
//     }
//     if (i<7) {
//         console.log("You have found secret number ")
//         answer=prompt("Do you wanna play agein 'Y' or 'N'").toUpperCase()
//         if (answer==="Y") {
//             console.log("Great")
//             computer=Math.round(Math.random()*100);
//             i=0;
//             continue
//         } else {
//             console.log("Have a nice day")
//             break
//         }
//     }else {
//             console.log(` You have lost . computer's number ${computer}`)
//             answer=prompt("Do you wanna play agein'Y' or 'N' ").toUpperCase()
//         if (answer==="Y") {
//             console.log("Great")
//             computer=Math.round(Math.random()*100);
//             i=0;
//             continue
//         } else {
//             console.log("Have a nice day")
//             break
//         }
//     }









//! ------  FOR -------




//*FİBONACCİ DİZİSİ*//
//? 1. yol

// let kacinci = + prompt(" sayı giriniz")
// while(kacinci<=0){
//   kacinci =+prompt("pozitif giriniz")
// }
// let kücükSayi =0;
// let büyükSayi =1;
// let toplamSayi ;

// for (let i =1; i <= kacinci; i++){
//   if(i==kacinci) {
//     console.log(`${kacinci}.sayi ${kücükSayi}`);
//   }

//   toplamSayi = kücükSayi + büyükSayi;
//   kücükSayi =büyükSayi;
//   büyükSayi= toplamSayi;
// }


//? 2. yol
// const number = parseInt(prompt('Enter the number of terms: '));
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;

//? 3.yol
// let number = +prompt("Bulmak istediğiniz Fibonacci sayısını yazınız:");
// let sayı1 = 0;
// let sayı2 = 1;
// let sayı3;
// ​
// if (number == 0) {
//   alert(`${number}. fibonacci sayısı ${sayı1}`);
// } else if (number == 1) {
//   alert(`${number}. fibonacci sayısı ${sayı2}`);
// } else {
//   for (let i = 3; i <= number + 1; i++) {
//     sayı3 = sayı1 + sayı2;
//     sayı1 = sayı2;
//     sayı2 = sayı3;
//   }
//   alert(`${number}. fibonacci sayısı ${sayı3}`);
// }


//? 4. yol
// const n = +prompt("Sayi Gir:")
// let n1 = 0;
// let n2 = 1;
// let n3;
// if(n === 0){
//     n3 = 0;
// }else if(n === 1){
// n3 = 0;
// }
// for(let i = 2 ; i <= n ; i++){
// n3 = n1 + n2
// n1 = n2
// n2 = n3
// }
// console.log(n3)