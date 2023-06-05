//* ------ Selectors ------- */

//? Resimler
const rockImg =document.getElementById("rock")
const paperImg =document.getElementById("paper")
const scissorImg =document.getElementById("scissor")

//? seçilen elemanların taşıyıcıları
const yourChoiceDiv = document.getElementById("your-choice")

//* ------- Variables ------- */


//* ------- Event Listeners ------- */
rockImg.addEventListener("click", ()=>{
    const image = document.createElement("img")
    image.src = "./assets/rock.png"
    image.alt="rock"
    yourChoiceDiv.appendChild(image)


    //? inner HTML
    // yourChoiceDiv.innerHTML = `<img src = "./assets/rock.png" alt="rock"/>`

})

paperImg.addEventListener("click", ()=>{
    const image = document.createElement("img")
    image.src = "./assets/paper.png"
    image.alt="paper"
    yourChoiceDiv.appendChild(image)



})

scissorImg.addEventListener("click", ()=>{
    const image = document.createElement("img")
    image.src = "./assets/scissor.png"
    image.alt="scissor"
    yourChoiceDiv.appendChild(image)



})


//* ------- Functions ------- */
