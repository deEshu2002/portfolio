let plus = document.querySelector(".plus-minus-toggle");
let navLinks = document.querySelectorAll(".nav-links li");

plus.addEventListener("click", function() {
    plus.classList.toggle("collapsed");

    navLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = "";
        } else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/10 +0.5}s`;
        }
    }) 

})
