document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  }

const slider = document.querySelector('.slides');
const optionOne = document.querySelector('.option-1');
const optionTwo = document.querySelector('.option-2');
const optionTri = document.querySelector('.option-3');

var sectionIndex = 0;

optionOne.addEventListener('click', function() {
  slider.style.transform = 'translateY(0%)';
});


optionTwo.addEventListener('click', function() {
  slider.style.transform = 'translateY(-60.5%)';
});

optionTri.addEventListener('click', function() {
  slider.style.transform = 'translateY(-120.9%)';
});

// const hamburger = document.querySelector('.hamburger')
// const navUl = document.querySelector('.nav-ul')
// const arrow = document.querySelector('.arrow')

// hamburger.addEventListener('click', function() {
//     hamburger.classList.toggle('active')
//     navUl.classList.toggle('active')
//     arrow.classList.toggle('active')
// }) 

// document.querySelector('.nav-a').forEach(n => n.addEventListener('click', function() {
//     hamburger.classList.remove('active');
//     navUl.classList.toggle('active');
// }))
