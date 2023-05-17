document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  }

  document.getElementById("med-cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("med-card")) {
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
  slider.style.transform = 'translateY(-500px)';
});

optionTri.addEventListener('click', function() {
  slider.style.transform = 'translateY(-1000px)';
});


const primaryNav = document.querySelector('.links')
const hamburger = document.querySelector('.hamburger')


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    const visibility = primaryNav.getAttribute('data-visible')

    if (visibility === "false") {
      primaryNav.setAttribute("data-visible", true);
      hamburger.setAttribute("aria-expanded",true);
    } else {
      primaryNav.setAttribute("data-visible", false);
      hamburger.setAttribute("aria-expanded", false);
    }
}) 