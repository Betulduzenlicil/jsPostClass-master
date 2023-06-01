console.log("***** SELECTORS *****")





// document.title="Dom Dom☎️"; //title bölümünü değiştirdik

// document.body.style.backgroundColor = "aqua";
// document.header.style.color = "blue"; //almıyor burayı

//*===========================================
//*            GETELEMENTBYID()
//*===========================================
// const myHeader= document.getElementById("header")
// console.log(myHeader)
// myHeader.style.backgroundColor = "red"
// myHeader.style.color = "white"
// myHeader.style.border ="1px solid black"


//? ADD BUTTON
// const addButton = document.getElementById("btn")
// console.log(addButton)

// addButton.style.backgroundColor ="#bebe"
// addButton.style.border ="none"
// addButton.style.borderRadius ="10px"
// addButton.style.padding = "0.6rem"



// addButton.value = "Save" //deger atama
// console.log(addButton.value) //deger okuma


//? H1
// const h1 = document.getElementById("heading1")
// console.log(h1)

// h1.textContent = "DOM INTRODUCTION"  //deger atama
// console.log(h1.textContent) // deger okuma
// console.log(h1.innerText) // deger okuma
// console.log(h1.innerHTML) // deger okuma



//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

const myInputs = document.getElementsByTagName("input")
console.log(myInputs) //? [input#input, input#btn, input: input#input, btn: input#btn]


//!HTML Collection ( Array-Like) döndürür
//?====================================
// console.log("SIZE:",myInputs.length)
// console.log(myInputs[0])
// console.log(myInputs[1])
// console.log(document.getElementsByTagName("h3")[0])

//? indis ile erişimin yanısıra item() methodu ile de erişilebilinir
// console.log(myInputs.item(1))

//? Array e cevrilebilir

const myLıst = document.getElementsByTagName("li")
// const myLıstArr = [...myLıst]
// console.log(myLıstArr)

// myLıstArr.forEach((li)=>(li.style.color="red"))

//? ALTERNATİVE wAY

// const myLıstArr1 = Array.from(myLıst)//Array e cevirir
// console.log(myLıstArr1)

// myLıstArr1.map((li)=>(li.style.listStyleType = "none"))


// const myInputsArr = [...myInputs]
// console.log(myInputsArr)

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================
// const lists = document.getElementsByClassName("list")//? HTMLCollection(5) [li.list, li.list, li.list, li.list, li.list]
// console.log(lists)
// const listsArr = [...lists]

// listsArr.forEach((li) => console.log(li));
// listsArr.map((li) => console.log(li));

// lists[2].innerHTML = "JAVASCRİPT LANGUAGE"
// lists[2].innerHTML = `<h1>Javascript</h1>`
// lists[3].innerText = `<h1>React</h1>`
// lists[4].textContent = `<h1>VUE</h1>`

// listsArr.map((li)=>(li.style.listStyleType= "none"))

//* ========================================
//*              QUERYSELECTOR()
//* ========================================

//? id seçildi
// const header = document.querySelector("#header")
// console.log(header)

//? class secildi
// const itemLists = document.querySelector(".list")
// console.log(itemLists)


//? h2 tag ı secilmiş oldu
// const h2 = document.querySelector("h2")
// console.log(h2)


//? CSS DEKİ descendant selectors MANTIĞI KULLANILABİLİR
// const otherH2= document.querySelector("section h2")
// const buton = document.querySelector("section.add-item #btn")
// console.log(buton)



// const react = document.querySelector("section.item-list ul li:nth-child(4)")
// console.log(react)


//* ========================================
//*              QUERYSELECTORALL()
//* ========================================


// const listeler = document.querySelectorAll("ul li")
// console.log(listeler) //? NodeList(5) [li.list, li.list, li.list, li.list, li.list]

// const listemArr=[...listeler]
// listeler.forEach((li)=>console.log(li))


// listemArr.forEach((li)=> console.log(li))
// listemArr.map((li)=> console.log(li))

// //? Alternative way
// for (const liste of listeler.values()){
//     console.log(liste)
// }

// for (const liste of listeler.keys()){
//     console.log(liste)
// }



