const ok = document.getElementById("ok");
const name = document.getElementById("name")
const hello = document.querySelector(".hello")
const form = document.querySelector('form')
const body = document.querySelector('body')


ok.addEventListener("click",letsGo)


function letsGo(e) {
    e.preventDefault()
    const greeting = hello.querySelector("h1")

greeting.innerText = `Hello, ${name.value}`
hello.style.display = 'block';
form.style.display = "none"
greeting.classList.add('fade')
setTimeout(displayNav, 4000)
}

function displayNav() {
    const nav = document.querySelector('nav')
    nav.style.display = 'block'
    setTimeout(displayTopcontainer, 100)
    setTimeout(removeHello, 50)
}

function displayTopcontainer() {
    const topcontainer = document.querySelector('.topcontainer')
    topcontainer.style.display = 'block'
   
}

function removeHello(){
    const hello = document.querySelector('h1')
    console.log('hello')
    hello.style.display = 'none'
}
