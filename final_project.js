const ok = document.getElementById("ok");
const name = document.getElementById("name")
const hello = document.querySelector(".hello")
const form = document.querySelector('form')
const body = document.querySelector('body')


ok.addEventListener("click",letsGo)


function letsGo(e) {
    e.preventDefault()
    const greeting = hello.querySelector("h1")

greeting.innerText = `Welcome, ${name.value}`
hello.style.display = 'block';
form.style.display = "none"
body.style.backgroundImage = 'url("https://images.pexels.com/photos/1038001/pexels-photo-1038001.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load")';
greeting.classList.add('fade')
setTimeout(displayNav, 6000)
}
function displayNav() {
    const nav = document.querySelector('nav')
    nav.style.display = 'block'

}