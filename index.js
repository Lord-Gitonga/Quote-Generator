const quote = document.getElementById('quote')
const author = document.getElementById('author')
const btn = document.getElementById('btn')

const url = "https://api.quotable.io/random";

function displayQuotes(){
    fetch(url)
    .then(resp=>resp.json())
    .then(data=>{
        console.log(data)
        quote.textContent = data.content;
        author.textContent = data.author;
    })
}
btn.addEventListener('click', displayQuotes)
displayQuotes()