const modal = document.querySelector(".modal")

closeX = document.querySelector(".closeX")

closeX.addEventListener("click", () =>{
    modal.style.display = "none"
})

let hasBeenClicked = false;

window.addEventListener("scroll", () => {
 if (window.scrollY > 859 && !hasBeenClicked){
    modal.style.display = "block"
    hasBeenClicked = true
 }
})


