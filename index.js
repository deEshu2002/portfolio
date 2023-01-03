let plus = document.querySelector(".plus-minus-toggle");
let navLinks = document.querySelectorAll(".nav-links li");

plus.addEventListener("click", function() {
    plus.classList.toggle("collapsed");

    navLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = "";
        } else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/10 +0.1}s`;
        }
    }) 

})


let selectButton = document.querySelector(".select-button");
let currentGenre = document.querySelectorAll(".options li");

let genre = document.getElementsByTagName("p")[0].innerHTML;
console.log(genre);


selectButton.addEventListener("click", () => {
    currentGenre.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = "";
        } else{
            link.style.animation = `navLinkFade 0.5s ease forwards  0.2s`;
        }
    })
})


