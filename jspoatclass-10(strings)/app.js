// !String yazim sekilleri
// *Örnek
// let str1 = "This is a string"
// let str2 = 'This is a string'
// let str3 = `This is a string`
// let str4 = new String("This is a string")
// console.log(str1);
// console.log(str2);
// console.log(str3);
// console.log(str4);

// !JavaScript Çok Satırlı Dizeler
// ?using the + operator
// const message1 =
//   "This is a long message " +
//   "that spans across multiple lines" +
//   "in the code.";

// console.log(message1);

// // //? using the \ operator
// const message2 =
//     "This is a long message \
// that spans across multiple lines \
// in the code.";
// console.log(message2);

// // //? using the ``
// const message3 = `This is a long message
// that spans across multiple lines
// in the code.`;
// console.log(message3);
// // //? using the `` and \
// const message4 = `This is a long message
// that spans across multiple lines \
// in the code.`;
// console.log(message4);

//!string types
// console.log(typeof str1)
// console.log(typeof str2)
// console.log( str3)
// console.log( str4)

// *örnek
// const a = 'hello';
// const b = new String('hello');

// console.log(a);
// console.log(b);

// console.log(typeof a);
// console.log(typeof b);
// ?Not:string objectleri (Dize nesneleri) kullanmaktan kaçınılması önerilir. Dize nesneleri kullanmak programı yavaşlatır.

//!String(Dize) Karakterlerine Erişim
// *örnek
// ?1.yol
// const str = 'Hello World';

// console.log(str[0])
// console.log(str[-1])
// console.log(str[str.length-1])
// console.log(str[6])
// console.log(str[10])
// console.log(str[11])
//? not:String(Dize) nin boyu Karakter sayisini hesaplama
// console.log(str.length)

// ?2.yol
// console.log(str.charAt(0));
// console.log(str.charAt(1));
// console.log(str.charAt(-1));
// console.log(str.charAt(str.length - 1));
// console.log(str.charAt(10));
// console.log(str.charAt(11));

//?3.yol itere
// ?A
// for (let i=0; i<str.length; i++){
//     console.log(str[i]);
// }
// // ?B
// for (let i = str.length; i > 0; i--){
//     console.log(str[i-1])
//   }

// //?tersten itere
// for(let i = str.length -1   ; i>=0; i--){
//     console.log(str[i])
//   }

//!JavaScript Dizeleri değişmez
// *örnek
// let a = "hello";
// console.log(a);
// a[0] = "H";
// console.log(a);
// a = 'Hello'
// console.log(a);

// *soru: a'nin degerini degeistirmek istersem ne yapmaliyim?
// a = 'Hello'
// console.log(a);

//!JavaScript Büyük/Küçük Harfe Duyarlıdır
// const a = "a";
// const b = "A";
// console.log(a === b);

//!Kaçış Karakterleri
//? Bir string'e(dizeye) özel karakterler eklemek için \ ters eğik çizgi kaçış karakterini kullanabilirsiniz.
// Code	Output
// \0    a gap
// \"	include double quote
// \\	include backslash
// \n	new line
// \r	carriage return
// \v	vertical tab
// \t	horizontal tab
// \b	backspace
// \f	form feed

// *\ 'a örnek
// let str0 = 'I'm a string' //hata verirken
// let str1 = "I'm a string" //hata vermez
// let str2 = 'I\'m a string' //hata vermez
// console.log(str1)
// console.log(str2)

// *\0 'a örnek
// let str2 = "I'm a\0str\0ing\"";
// console.log(str2);

// *\n ' örnek
alert("1- ders \n2-Kayit\n3-pre-cla\bss \t tab örnegi");
console.log("1- ders \n2-Kayit\n3-pre-cla\b ss \t tab örnegi");
// *soru:bunu baska nasil yapabilirdik

// alert(`1- ders
// 2-Kayıt
// 3-pre-class`)
//*----------------------------------------------------------------------------------*//

//concat

// let str1 = "Clarusway";
// let str2 = "Full";
// let str3 = "Stack";
// const result = str1.concat(" ", str2, " ", str3)
// console.log(result)
// console.log(str3)

// let greet = 'Hello'

// console.log(greet.concat(' World'))
// console.log('Hello'.concat(' World'))


// let isim = prompt('İsminiz nedir?')


// console.log('Merhaba '.concat(isim))

// console.log('Merhaba ' + isim)



//includes
// let email=prompt("email giriniz")
// console.log(email.includes("@"));



// let email = prompt("deger giriniz");
// console.log(email.indexOf("@"));

// includes

// let str1 = "Clarusway";

// console.log(str1.includes('l'))
// console.log(str1.includes('l',1)) //1.indexten aramaya başla
// console.log(str1.includes('l',2)) //2. indexten aramaya başla

//indexof
// let str1 = "Clarusway";

// console.log(str1.indexOf('a')) //2
// console.log(str1.indexOf('a',3)) //7
// console.log(str1.indexOf('l',3)) // -1 İçerisinde bulunamadı


//örnek

// let email=prompt("email giriniz")
// console.log(email.includes("@"));

// let email = prompt("Enter your email")

// if (email.indexOf("@") === -1) {
//   console.log("Invalid email")
// } else{
//     console.log('Valid email')
// }

// function findCount(source, search) {
//     let count = 0; // counter will start from 0
//     let position = source.indexOf(search) // first search
  
//     while (position !== -1) {// as long as we find search string, loop will go on 
//       count++ // increase the counter
//       position = source.indexOf(search, ++position) // search again, from where we stop +1
//     }
//     return count
//   }