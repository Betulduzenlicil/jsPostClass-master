console.log("**** CREATE NODE ****")

const LangInput = document.querySelector("#input")

//? 1-(create)
const newP = document.createElement("p")

//? 2- eğer text tabanlı bir element ise text düğümünü oluştur
const text = document.createTextNode("Bu bir yeni p elementidir")
const text1 = document.createTextNode(LangInput.value)


//? 3- oluşturulan text düğümünü yeni elemente bağla
newP.appendChild(text1)

console.log(newP);

//? 4- Yeni elementin DOM tree ye bağlanması (append)

//* main bölümümnün sonuna p elementini ekler
const main = document.querySelector("main")
console.log(main);
main.appendChild(newP)


//* item-list section un önüne yeni  elementi ekler
//! Element.before()  ve Element.after() appendChild gibi aslında bir elementi DOM treeye bağlar

const itemListSection= document.querySelector(".item-list")
itemListSection.before(newP)


//*=============ID CLASS============*/

//? 1. Yöntem

newP.id = "paragraf"
newP.className = "par center"
newP.name = "deneme"

//? 2. setAttribute
//?==========================
newP.setAttribute("id", "new-id")
newP.setAttribute("class", "new-class")


//? 3. classList
//?======================
newP.classList.add("bg-danger", "border", "border-2")
console.log(newP.classList.contains("new-class"))

//* classList. contains()
//*===========================
if(newP.classList.contains("border")){
    newP.classList.add("border-success")
}

//*clasList.remove
//*======================
if(newP.classList.contains("border")){
    newP.classList.remove("border-2")
}


//* classList.toogle()(bir class varsa kaldırır yoksa ekler)
//*===========================================================
newP.classList.toggle("bg-danger")



//*====================ID, CLASS GİBİ ÖZELLİKLERİ OKUMA=================


//? 1) yÖNTEM
console.log(newP.id)
console.log(newP.className)

//? 2) getAttribute
console.log(newP.getAttribute("type"))
console.log(newP.getAttribute("class"))

//*=========YENİ BİR ELEMENT OLUŞTURUP VAR OLANIN ÜZERİNE EKLEME (INNERHTML)==========

const ul = document.querySelector("ul")
ul.innerHTML +=`
<li>C++</li>
<li>JAVA</li>
<li>c</li>
<li>go</li>
`

//*===============YENİ BİR ELEMENT OLUŞTURMA (INNERHTML)===============

const newDiv = document.createElement("div")
newDiv.id= "my-div"
itemListSection.after(newDiv)

newDiv.innerHTML += `
<h2 class = "par center">Languages</h2>
<ul>
<li>C++</li>
<li>JAVA</li>
<li>c</li>
<li>go</li>
</ul>`
