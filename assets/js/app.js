document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  }

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
