// const hamburger = document.querySelector('.hamburger')
// const navUl = document.querySelector('.nav-ul')

// hamburger.addEventListener('click', function() {
//     hamburger.classList.toggle('active')
//     navUl.classList.toggle('active')
// }) 

// document.querySelector('.nav-a').forEach(n => n.addEventListener('click', function() {
//     hamburger.classList.remove('active');
//     navUl.classList.toggle('active');
// }))


const hamburger = document.querySelector('.hamburger')
const navUl = document.querySelector('.nav-ul')
const arrow = document.querySelector('.arrow')

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active')
    navUl.classList.toggle('active')
    arrow.classList.toggle('active')
}) 

document.querySelector('.nav-a').forEach(n => n.addEventListener('click', function() {
    hamburger.classList.remove('active');
    navUl.classList.toggle('active');
}))
