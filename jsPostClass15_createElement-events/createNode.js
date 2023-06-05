console.log("**** CREATE NODE ****")

//? YENİ BİR ELEMENT OLUŞTURMA

//? örnek 1

// const LangInput = document.querySelector("#input")
// const text1 = document.createTextNode(LangInput.value)
// LangInput.appendChild(text1)
// const h1 = document.querySelector("h1")
// h1.append(LangInput)
//?--------------------------------------------------------


//?örnek:2

//? 1-(create-oluşturur)
const newP = document.createElement("p")

//? 2- eğer text tabanlı bir element ise text düğümünü oluştur
const text = document.createTextNode("Bu bir yeni p elementidir")


//? 3- oluşturulan text düğümünü yeni elemente bağla
newP.appendChild(text)
console.log(newP);

//? 4- Yeni elementin DOM tree ye bağlanması (append)
//* main bölümümnün sonuna p elementini ekler

const main = document.querySelector("main")
console.log(main);
main.appendChild(newP)
 
//?--------------------------------------------------------
//* item-list section un önüne yeni  elementi ekler
//! Element.before()  ve Element.after() appendChild gibi aslında bir elementi DOM treeye bağlar
// const newP1 = document.createElement("p")
// const text2 = document.createTextNode("Bu bir yeni p textidir")
// newP1.appendChild(text2)
const itemListSection= document.querySelector(".item-list")
// itemListSection.before(newP1)
//?_----------------------------------------------------------

//?ÖRNEK:3  Yeni bir H2 elementi oluştur ve header in içine yazdır

// const newH2 = document.createElement("h2")
// const text3= document.createTextNode("yeni bir h2")

// const header = document.querySelector("#header")
// newH2.appendChild(text3)
// header.after(newH2)



//? ÖRNEK:4  Javascriptten sonra listeye kendi adınızı yazdırınız

// const newLi = document.createElement("li") // tag oluştur
// const newText = document.createTextNode("Betül Cil") // tagin içeriğini oluştur
// newLi.appendChild(newText) // içeriği taga bağla
// const yer = document.querySelector(".list:nth-child(3)") // yer tanımla
// yer.appendChild(newLi) // tag ve içeriği yerine bağla

//?--------------------------------------------------------------------
//? ÖRNEK:5  Javascriptten sonra listeye kendi adınızı yazdırınız

// const newTag = document.createElement("span")
// const newTextim = document.createTextNode(": Sen mi büyüksün ben mi?")
// newTag.appendChild(newTextim)
// const konum = document.querySelector(".list:nth-child(4)")
// konum.appendChild(newTag)

//! p blok element olduğundan alta geçti
// const newTag1 = document.createElement("p")
// const newTextim1 = document.createTextNode(": Sen mi büyüksün ben mi?")
// newTag1.appendChild(newTextim1)
// const konum1 = document.querySelector(".list:nth-child(4)")
// konum1.append(newTag1)





//*=============ID CLASS GİBİ ÖZELLİKLER EKLEME============*/

//? 1. Yöntem
newP.id = "paragraf"
newP.className = "par center"
newP.name = "deneme"



//? 2. setAttribute
//?==========================
// newP.setAttribute("id", "new-id")
// newP.setAttribute("class", "new-class")
// newP.setAttribute("name", "new-class")
// newP.setAttribute("type", "button")


//? 3. classList
//?======================
// newP.classList.add("bg-danger", "border", "border-2")
// console.log(newP.classList.contains("new-class")) // içinde new-class var mı

//* classList. contains()
//*===========================
// if(newP.classList.contains("border")){
//     newP.classList.add("border-success")
// }

//*classList.remove  //varsa kaldırır
//*======================
// if(newP.classList.contains("border")){
//     newP.classList.remove("border-2")
// }
// if (newP.classList.contains("new-class")) {
//     newP.classList.remove("new-class")
//   }


//* classList.toogle()(bir class varsa kaldırır yoksa ekler)
//*===========================================================
// newP.classList.toggle("bg-danger")

// if(newP.id.toggle("ali")){
//     newP.id.add("ali");
// }



//*====================ID, CLASS GİBİ ÖZELLİKLERİ OKUMA=================


//? 1) yÖNTEM
console.log(newP.id)
console.log(newP.className)

//? 2) getAttribute
console.log(newP.getAttribute("type"))
console.log(newP.getAttribute("class"))

//*=========YENİ BİR ELEMENT OLUŞTURUP VAR OLANIN ÜZERİNE EKLEME (INNERHTML)==========

// const ul = document.querySelector("ul") // ul lerin bittiği yere ekler
// ul.innerHTML +=`
// <li>C++</li>
// <li>JAVA</li>
// <li>c</li>
// <li>go</li>`

//*===============YENİ BİR ELEMENT OLUŞTURMA (INNERHTML)===============

const newDiv = document.createElement("div") // yeni div oluşturup ona yeni ul ve li ekler
const ul = document.querySelector("ul")
ul.innerHTML +=`
<H2 class = "par center">LANGUAGES</H2>
<ul>
<li>C++</li>
<li>JAVA</li>
<li>C</li>
<li>go</li> </ul>`
newDiv.id= "my-div"

itemListSection.after(newDiv)




