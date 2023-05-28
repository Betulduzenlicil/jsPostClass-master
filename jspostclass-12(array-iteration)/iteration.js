//* =======================================
//*           FOREACH METHOD
//* =======================================

console.log("****** ITERATION **********")

//? ÖRNEK: DİZİDEKİ HERBİR FİYATI YAZDIRINIZ

//* FOREACH
// const prices = [250, 150, 300, 500]

// prices.forEach((p) => console.log(p));
// console.log("*********")
// prices.forEach((p,i) => console.log(p,i));
// console.log("*********")
// prices.forEach((p, i,a) => console.log("DEGER:", p, "INDIS:", i, "ARRAY:", a,))
// console.log("*********")

//? ÖRNEK: DİZİDEKİ HERBİR FİYATI YAZDIRINIZ

// const deger = [1,2,3,4,5]

// let sonuc = []

// deger.forEach(myfunk)

// function myfunk(value,index){

//     sonuc.push(value+" "+index)
    
// }
// console.log(sonuc);


//* KLASIK FOR şeklinde cozumu

// for (let i = 0; i < prices.length; i++) {
//     console.log(prices[i])
//   }
//   console.log("*********")


//? ÖRNEK: DİZİDEKİ TOPLAM FİYATI  hesaplayınız


//? 1.yol
// const prices = [250, 150, 300, 500]
// let sum =0
// prices.forEach((price)=> (sum+=price))
// console.log("SUM:", sum);


// console.log("*********")

//? 2.yol

// const prices = [250, 150, 300, 500]
// let sum =0
// prices.forEach((price)=> {
//     sum+= price;
//     return sum
// });
// console.log(sum)



//? 3.yol

// const prices = [250, 150, 300, 500]
// let sum =0
// prices.forEach((price)=> console.log(sum+=price)) 
// console.log("SUM:", sum);

//? ÖRNEK: BELİRTİLEN DİZİNİN HERBİR ELEMANINININ 5 KATINI ALARAK AYRI BİZ DİZİDE SAKLAYAN KODU YAZDIRINIZ

//! 1. yol
// const dizi = [-5, 24, -13, 7];
// const myArray=[]

// dizi.forEach((d,i) => (myArray[i] = d*5))
// console.log(myArray)


//! 2. yol

// const dizi = [-5, 24, -13, 7];
// const myArray=[]

// dizi. forEach((d,i)=> myArray.push(d*5))
// console.log(myArray)




//! NOT: forEach metodu void metottur.(Herhangi bir deger dondurmez)
// console.log(prices.forEach((price) => price * 2))

//! Foreach ile dongu icerisinde herhangi bir item okunabilir, listelenbilir veya yazdirilabilir. Ancak bu degeri dondurmek mümkün değildir.

// prices.forEach((price) => console.log(price * 2))

//! Foreach methodu orjinal diziyi değiştirmez

//* =======================================
//*            MAP METHOD
//* =======================================
//?-------------- ÖRNEK -------------------
//? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.

// let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"]

// const upperName = names.map((name)=>name.toLocaleUpperCase())


// console.log(upperName);
// console.log(names);

// //! Orjinal dizi yi modifiye etmek için 3. parametre kullanilabilir.
// names.map((name, i, arr) => {
//     arr[i] = name.toLocaleUpperCase()
//   })
  
//   console.log(names)


//? ÖRNEK: BELİRTİLEN DİZİNİN HERBİR ELEMANINININ 5 KATINI ALARAK AYRI BİZ DİZİDE SAKLAYAN KODU YAZDIRINIZ (MAP METHODU)

//! 1. YOL
// const numbers = [13,5,-20,0,100]
// const newNumbers =[]

// numbers.map((num,i)=> newNumbers[i]= num*5)
// console.log(newNumbers)

//! 2. YOL

// const numbers = [13,5,-20,0,100]
// const newNumbers =[]

// numbers.map((num)=> newNumbers.push(num*5))
// console.log(newNumbers)

//? ÖRNEK: BELİRTİLEN DİZİNİN HERBİR ELEMANINININ KARESİNİ ALARAK AYRI BİZ DİZİDE SAKLAYAN KODU YAZDIRINIZ (MAP METHODU)

// const arr = [8,9,10,2]

// const newArr = arr.map((x)=> x*x)
// console.log(newArr)


//?--------------------------ÖRNEK------------------------
//*TL PRICES dizisindeki rakamların Euro VE DOLAR KARSILIKLARINI HESAPLAYARAK YENİ DİZİLERE KAYDEDİNİZ
//! 1. yol
// const euro = 21.78
// const dolar = 19.8
// const tlPrices = [100, 150, 100, 50, 80] 

// const dolarPrices = tlPrices.map((tl)=>(tl / dolar).toFixed(2))
// const euroPrices = tlPrices.map((tl)=>(tl / euro).toFixed(2))


// console.log(dolarPrices);
// console.log(euroPrices);
// console.log(tlPrices);

//! 2.yol
// const euro = 21.78
// const dolar = 19.8
// const tlPrices = [100, 150, 100, 50, 80] 

// const dolarPrices = tlPrices.map((tl)=>Number((tl / dolar).toFixed(2)))
// const euroPrices = tlPrices.map((tl)=>Number((tl / euro).toFixed(2)))


// console.log(dolarPrices);
// console.log(euroPrices);
// console.log(tlPrices);



//* =======================================
//*             FILTER METHOD
//* =======================================

//?-------------- ÖRNEK -------------------
//?ÖRNEK:  Maasi 10000'den buyuk olanlari ayri bir diziye saklayalim
// const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000]

// const biggerThan = salaries.filter((salary) => salary >= 10000)
// console.log(biggerThan)
// console.log(salaries)

// const range = salaries.filter((salary) => salary >= 8000 && salary <= 10000)
// console.log(range)


//?ÖRNEK: NOTU 50'den buyuk olanlari ayri bir diziye 50 den küçük olanları ayrı bir diziye saklayalim

// const grades =[55,23,44,48,50,90]
// let biggerGrades=grades.filter((g)=>g>=50)
// console.log(biggerGrades)

// let smallGrades = grades.filter((g)=>g<50)
// console.log(smallGrades)



// //* =======================================
// //*          CHAINING (PIPELINE)
// //* =======================================
// //? Maasi 9000'den az olanlara %10 zam yaparak bu degerleri
// //? yeni diziye saklayalim.

// const biggerThan9000 = salaries
//   .filter((s) => s < 9000)
//   .map((s) => Number((s * 1.1).toFixed(2)))

// console.log(biggerThan9000)

// salaries
//   .filter((s) => s < 9000)
//   .map((s) => Number((s * 1.1).toFixed(2)))
//   .forEach((s) => console.log(s)) //? Consuming



//* =======================================
//*             REDUCE METHOD
//* =======================================
//?ÖRNEK:1

// const array = [4,3,2,1];
// console.log(array.reduce((sum,val) => sum + val)); 


// //?ÖRNEK:2
// const arr = [4,3,2,1]
// const result = arr.reduce((mul, val) => mul * val,1)
// sondaki 1 çarpmanın etkisiz elemanıdır 1 den başla çarp der
// console.log(result);

// //?ÖRNEK:3

// const maaşlar = [5500, 8000, 6500, 9000, 10000, 15000, 25000]
// const toplamMaaş = maaşlar.reduce((toplam, deger)=>toplam  + deger, 0)
//sondaki sıfır toplamanın etkisiz elemanıdır 0 dan başla topla der
// console.log("TOPLAM MAAŞ:", toplamMaaş)


//?ÖRNEK:4   MAAŞI 6000 İLE 10000 ARASI OLAN KİŞİLERE %10 ZAM YAPILIP ZAM YAPILANLARIN TOPLAM MAAŞLARININ KAÇ TL OLDUĞUNU HESAPLAYINIZ

const maaşlar = [5500, 8000, 6500, 9000, 10000, 15000, 25000]

const zamliMaaşToplami =maaşlar
.filter((m)=>m>=6000 && m<=10000)
.map((m) => m*1.1)
.reduce((t,m)=> t + m,0)

console.log("ZAMLI MAAŞ:",zamliMaaşToplami)

//* =======================================
//*               OTHERS
//* =======================================

//************************/ every()***********************
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.


// const ages = [18, 22, 78, 34, 78, 79, 15]
// const check = ages.every((age) => age >= 18)
// check ? console.log("All ages are over 18") : console.log("Sum are under 18")

//*************************/ some()*****************
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.


// const ages = [18, 22, 78, 34, 78, 79, 15]
// const over80 = ages.some((a) => a >= 80)
// console.log(over80) //? false


//* **********find(), findLast()**************************
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk ve son elemani yazdirin

// const ages = [18, 22, 78, 34, 78, 79, 15]
// const ageBigThan30First = ages.find((age) => age >= 30)
// const ageBigThan30Last = ages.findLast((age) => age >= 30)
// console.log(ageBigThan30First, ageBigThan30Last)

// console.log(ages.find((age) => age >= 80)) //? undefined


//* ********************findIndex()****************************
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemanin indexini yazdirin
// const ages = [18, 22, 78, 34, 78, 79, 15]
// const foundIndex = ages.findIndex((age) => age > 18)
// console.log(foundIndex) //? 1

// const foundIndex = ages.findIndex((age) => age > 88)
// console.log(foundIndex) //? -1













