function shuffle(array){
    let currentIndex = arr.length, randomIndex;
    
    while(currentIndex != 0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], currentIndex];
    }
    return array;
}


websiteTypes = ["e-commerce", "portfolio", "blog website", "landing page", "dashboard", "mobile app", "product design"];


var trigger = document.querySelector(".serve-content-type");
var list = document.querySelectorAll(".serve-content-type span");


trigger.addEventListener("click", () => {
    list.forEach((link, index) => {
    })
})

