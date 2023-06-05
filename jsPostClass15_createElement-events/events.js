//* ==============================================
//*                  EVENTS
//* ===============================================

console.log("****** EVENTS *******")

// document.querySelector("header h1").onmouseover = function(){
//     document.querySelector("header h1").style.color = "red"
// }

//? Alternative Way

// const heading1 = document.querySelector("header h1")

// heading1.onmouseover = function () {
//     heading1.style.color = "red"
// }

// heading1.onmouseout = function () {
//     heading1.style.color = "blue"
// }


// const printHello = ()=>{
//     document.write("Hello")
// }




//?ÖRNEK: button bölümünün arkaplanını mouse üzerine gelince değiştir, uzerinden gittiğinde değiştir
// const button = document.querySelector("#btn")
// button.addEventListener("click",(e)=>{
// button.style.backgroundColor = "red"
// button.style.cursor ="pointer"
// button. style.color = "white"
// })


//?ÖRNEK: header bölümünün arkaplanını mouse üzerine gelince değiştir, uzerinden gittiğinde değiştir

// const header= document.querySelector("#header")
// header.addEventListener("mouseover",(e)=>{
// header.style.backgroundColor ="green";
// header.style.color= "white";
// header.style.cursor= "pointer"
// })
// header.addEventListener("mouseout",(e)=>{
//     header.style.backgroundColor ="blue"
//     header.style.color="red"
// })

//?=========================================


//? onload eventi html ve css kodlarının render edilmesi akabinde çalışır

// window.onload = printHello()

// window.addEventListener("load",()=>{
//     document.getElementById("input").focus()
// })

//? ÖRNEK: BUTONU ÇAĞIR TIKLANINCA İNPUTUN İÇİNDEKİ VALUALARI UL OLARAK LİSTELE
// const addBtn =document.querySelector("#btn")

// const ul = document.createElement("ul")
// document.querySelector(".item-list").before(ul)



// addBtn.addEventListener("click", (e)=>{
//     console.log("Btn Clicked")
//     console.log(e)
//     console.log(e.target) //
//     console.log(e.target.value)

//     if(!input.value){
//         alert("please enter a comment")
//     }else{

//     const input = document.querySelector("#input")
//     const li = document.createElement("li")
//     ul.appendChild(li)
//     const textLi = document.createTextNode(input.value)
//     li.appendChild(textLi)
//     input.value =""
//     input.focus()

// }
// })

//? İNPUTUN ÜZERİNDE İKEN BİR KLAVYE TUŞUNA BASILINCA ÇALIŞ
// document.querySelector("#input").addEventListener("keydown", (e)=>{
//     console.log(e.code)
//     console.log(e.keyCode)


//     //?BASILAN TUŞ ENTER İSE
//     if (e.code === "Enter"){
//         addBtn.click() // add butonunun tıklama fonksiyonunu çalıştırırım
//     }
// })
