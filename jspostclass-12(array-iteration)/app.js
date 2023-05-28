//* ============================================
//*                FOR LOOP
//* ============================================

console.log("******* LOOPS IN ARRAYS ******")


//?ÖRNEK: bİR DİZİDEKİ RAKAMLARIN TOPLAMINI HESAPLAYAN FOR DÖNGÜSÜ

// const rakamlar= [-5,15,22,-4,45,78,-25]
// let toplam =0;
// for (let i = 0; i < rakamlar.length; i++) {
//     toplam+= rakamlar[i];
    
// }
// console.log(toplam);

//?ÖRNEK:2 bİR DİZİDEKİ  SAYILARIn ortalaması FOR DÖNGÜSÜ

// const grades = [55, 77, 23, 89, 100, 44, 33]
// let sum = 0

// for (let i = 0; i < grades.length; i++) {
    
//     sum+= grades[i]
// console.log(ortalama); // her döngünün sonucunu verir
// }
// console.log((sum/grades.length).toFixed(2));



//?ÖRNEK:3 DİZİDEKİ 50 DEN KÜÇÜK TERİMLERİ BİR DİZİYE 50 DEN BÜYÜKLERİ YENİ DİZİYE ATINIZ

// const grades = [55, 77, 23, 89, 100, 44, 33, 45]

// const small= []
// const big = []
// for (let j = 0; j < grades.length; j++) {
//   if  (grades[j]< 50) {
//     small.push(grades[j])
//   } else{
//     big.push(grades[j])
//   }
        
// }
// console.log(small);
// console.log(big);
// console.log(grades);

//?ÖRNEK:4 DİZİDEKİ 50 DEN KÜÇÜK TERİMLERİ BİR DİZİYE 50 DEN BÜYÜKLERİ YENİ DİZİYE ATINIZ (FOR IN DONGUSU) İLE

// const grades = [55, 77, 23, 89, 100, 44, 33, 45]
// const small= []
// const big = []

// for (let i in grades) {
//     grades[i] <50 ? small.push(grades[i]): big.push(grades[i])
    
// }
// console.log(small);
// console.log(big);
// console.log(grades);



//?ÖRNEK:5 //* SORU: students dizisinde ogrenci isimleri saklanmaktadir. (FOR OF döngüsü)
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu ana programa dondurecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//  const students = ["ahmet", "mehmet", "ismet", "saffet", "ahmet", "saffet"]

//  const findStudent = (name)=> {
// let counter = 0
// for (let student of students) { 
//     if (student===name) {   // aranan dizinin içindeki elemana eşit ise sayacı bir artır
//         counter++
        
//     }
    
// }
// return counter

//  }
// console.log( findStudent("ahmet"));      
// console.log( findStudent("ismet"));      
// console.log( findStudent("alihan"));      



//*2. yol---
// const students = ["ahmet", "mehmet", "ismet", "saffet", "ahmet", "saffet"]

// const findStudent = (name) => {
//   let counter = 0

//   for (let student of students) {
//     student === name.toLowerCase() && counter++ //* aranan, dizinin icindeki elemana esitse
//   }

//   return counter === 0
//     ? `${name} can not be found`
//     : `${name} found ${counter} times`
// }

// console.log(findStudent("Ahmet"))
// console.log(findStudent("AHMET"))
// console.log(findStudent("ismet"))
// console.log(findStudent("Alihan"))



