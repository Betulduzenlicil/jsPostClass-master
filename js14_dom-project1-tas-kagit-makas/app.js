//* ------ Selectors ------- */

//? Resimler
const rockImg =document.getElementById("rock")
const paperImg =document.getElementById("paper")
const scissorImg =document.getElementById("scissor")

//? seçilen elemanların taşıyıcıları
const yourChoiceDiv = document.getElementById("your-choice")

//* ------- Variables ------- */



//* ------- Event Listeners ------- */
selectionArticle.addEventListener('click', (e) => {
    
    if (e.target.id=== "rock"||
        e.target.id=== "paper"||
        e.target.id=== "scissor") {
        Image.src=`./assets/${e.target.id}.png`
        userSelectImg.src = `./assets/${e.target.id}.png`
        userSelectImg.alt = e.target.id
        yourChoiceDiv.appendChild(userSelectImg)
        
    }
});

const createPcSelection =() =>{
    const pcArr = ["rock", "papaer", "scissor"]
    const pcRandom = psArr[Math.floor(Math.random()*3)]
}


//* ------- Functions ------- */


// let image = document.createElement("img")
// rockImg.addEventListener("click", ()=>{
//     const image = document.createElement("img")
//     image.src = "./assets/rock.png"
//     image.alt="rock"
//     yourChoiceDiv.appendChild(image)


    //? inner HTML yolu ile oluşturulabilir
    // yourChoiceDiv.innerHTML = `<img src = "./assets/rock.png" alt="rock"/>`

// })

// paperImg.addEventListener("click", ()=>{
//     const image = document.createElement("img")
//     image.src = "./assets/paper.png"
//     image.alt="paper"
//     yourChoiceDiv.appendChild(image)



// })

// scissorImg.addEventListener("click", ()=>{
//     const image = document.createElement("img")
//     image.src = "./assets/scissor.png"
//     image.alt="scissor"
//     yourChoiceDiv.appendChild(image)



// })