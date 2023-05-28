/// ? =====================================
// ?              FUNCTIONS
// ? ======================================

console.log("*** ARROW ****")


//? Arrow

// const kareAl = (num) => num * num
// const topla = (s1, s2) => s1 + s2
// const ciktiVer = () => console.log("Merhaba")

// console.log("KARE:", kareAl(4))
// console.log("TOPLA:", topla(4, 5))
// ciktiVer()

//* ORNEK4: 3 sayinin en buyugunu bulan fonks.
//***********************************************/
//! Süslü parantez kullanıldığnda otomatik returning ozelligi kaybolur
// const findBiggest = (n1, n2, n3) => {
//   let biggest = n1

//   if (n2 >= biggest) {
//     biggest = n2
//   }
//   if (n3 >= biggest) {
//     biggest = n3
//   }
//   return biggest
// }

// console.log("BIGGEST:", findBiggest(1, 3, 2))

// //? Alternatif olarak
// const findBiggestShort = (num1, num2, num3) => Math.max(num1, num2, num3)
// console.log("BIGGEST:", findBiggestShort(1, 3, 2))


//?ÖRNEK: DOĞUM TARİHİNİ PARAMETRE OLARAK ALAN VE ANA PROGRAMA AYŞI HRSAPLAYAN FOKSİYONU yazınız

// const calculateAge = (year) => new Date().getFullYear()-year

// console.log(`AGE: ${calculateAge(1990)}`)



// //? SİLİNDİRİN HACMİNİ BULUNUZ
// //? hacim = Pi * r * r * h

// const h = +prompt("yükseliği giriniz")
// const r = +prompt("yarıçapı giriniz")
// const pi = 3.14

// const hacim =(radius, height)=>Math.PI*radius*radius*height


// console.log("HACİM:", hacim(r,h))
// console.log("HACİM:", hacim(r,h).toFixed(2))  //virgülden sonra iki basamak gösterir
// console.log("HACİM:", hacim(r,h).toPrecision(4)) // toplam 4 basamak gösterir

//? toPrecision(5) aldigi parametreye gore bir sayinin tam ve kesir
//? kisimlarinin ne kadarini gosterilecegini belirlemek icin
//? kullanilabilir. 5 degeri tam ve kesir icin toplam 5 basamak kullan demektir.

//* ORNEK: Bir fonksiyon icerisinde baska fonksiyonlar cagrilabilir (Hesap Makinası)
//**************************************************/
const add = (n1,n2) => n1 + n2
const sub = (n1,n2) => n1 - n2
const mul = (n1,n2) => n1 * n2  



// const compute = (n1, n2, operator) => {
//     let result = 0
//     switch (operator) {
//       case "+":
//         //   result = n1 + n2
//         result = add(n1, n2)
//         break
//       case "-":
//         result = sub(n1, n2)
//         break
//       case "*":
//          result = mul(n1, n2)
//          break
//       case "/":
//         result =div(n1,n2)
//         break
  
//       default:
//         break
//     }
//     return result
//   }
  
//   const n1 = +prompt("First Number:")
//   const n2 = +prompt("Second Number:")
//   const operator = prompt("Operator:")
  
//   console.log(compute(n1, n2, operator))
//   console.log(`${n1}${operator}${n2} = ${compute(n1, n2, operator)}`)



  //* ORNEK: Girilen sayinin faktoriyelini hesaplayan programı fonksiyonlar yardımıyla kodlayiniz.
//? FIBONACCI terimleri:  n! = n * (n-1)!
//? Fakto(5) => 5.4.3.2

const faktorıyel =(n)=> {
    let f =1
    for(let i= n; i>1; i--){
        f= f*i

    }
    return f
}
const number =+prompt("enter your number")

number < 0
  ? alert("Number should be bigger than zero")
  : console.log(`Fakto(${number})= ${fakto(number)}`)
