

var button = document.querySelector("#generateButton");

button.addEventListener('click', generateQuote)

function generateQuote() {

    fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => {
        document.querySelector(".animeName").innerHTML = quote.anime
        document.querySelector(".animeQuote").innerHTML = quote.quote
        document.querySelector(".animeCharacter").innerHTML = "- " + quote.character
        }
    ).then(leftover => {
        let quoteBox = document.getElementById("quoteBox");
        // console.log(quoteBox.className)
        if (quoteBox.className === "hidden"){
            quoteBox.classList.toggle("hidden");
        }
    })
   
};