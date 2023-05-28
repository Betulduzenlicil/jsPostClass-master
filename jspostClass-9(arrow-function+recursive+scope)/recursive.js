// ? ========================================
// ?             RECURSION
// ? ========================================

//* Kendi kendi cagiran fonksiyona recursive fonksiyon denilir.
//* Ozellikle karmasik matematiksel hesaplamalarin kodlamasini
//* kolaylaştirmak icin kullanilir.
//* Ancak, dikkatli kullanmak gerekir. Yoksa stack overflow hatasi alinabilir.

console.log("*** RECURSION ***")

//* ORNEK: Girilen sayinin faktoriyelini hesaplayan programi
//* recursive fonksiyonlar yardımıyla kodlayiniz.
//? FIBONACCI terimleri:  n! = n * (n-1)!
//? Fakto(5) => 5.4.3.2

// const fakto = (n) => {
//   if (n <= 1) {
//     return 1;
//   } else {
//     return n * fakto(n - 1)
//   }
// }

// const number = +prompt("n:")

// number < 0
//   ? alert("Number should be bigger than zero")
//   : console.log(`Fakto(${number})= ${fakto(number)}`)


 //! ITERASYON YONTEMI ILE
// const fakto = (n) => {
//   let f = 1;
//   for (let i = n; i > 1; i--) {
//     f = f * i;
//   }
//   return f;

//   //   for (let i = 2; i <= n; i++) {}
// };

// const number = +prompt("n:");

// number < 0
//   ? alert("Number should be bigger than zero")
//   : console.log(`Fakto(${number})= ${fakto(number)}`);


 //? ÖRNEK: BİR FONKSİYONUN İÇERİSİNDE BAŞKA FONKSİYON OLUŞTURMA (HESAP MAKİNESİ)

 const num1= +prompt("first number")
 const num2 = +prompt("second number")
 const operator = prompt("enter operator")

 const add = (num1,num2)=> num1 + num2;
 const sub = (num1,num2)=> num1 - num2;
 const mult = (num1,num2)=> num1 * num2;
 const div = (num1,num2)=> num1 / num2;

 const comment= (num1, num2, operator)=>{
 let result=0;
 switch (operator){
  case "+":
    // result =num1 + num2;
    result = add(num1, num2);
    break;
  case "-":
    // result =num1 - num2;
    result = sub(num1, num2);
    break;
  case "*":
    // result =num1 * num2;
    result = mult(num1, num2);
    break;
  case "/":
    // result =num1 / num2;
    result = div(num1, num2);
    break;
  default:
    alert("yanlış operator girdiniz");
    // result = "error";
    result="";
    break;
  

 }
 return result
}
 console.log(`${num1} ${operator} ${num2} = ${result}`)


