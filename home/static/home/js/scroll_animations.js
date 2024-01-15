// Nav Elements
const nav = document.getElementById('nav')
const navbar = document.getElementById('navbar')
const navBtn = document.getElementById('navbar-toggler')
const navCloseBtn = document.getElementById('nav-close-btn')



// Alerts
const alerts = document.getElementById('alerts');

setTimeout(() => {
    alerts?.classList.add('hide-alerts');
}, 4000);


// Expanded nav JS

const navSlideDown = [
    { transform: "translateY(0)" },
    { transform: "translateY(1000%)" },
  ];

navBtn.addEventListener('click', () => {
    nav.classList.toggle('hide')
    nav.classList.add('animate')
    navCloseBtn.style.visibility = 'visible'
    navCloseBtn.style.opacity = 1
    navbar.animate(navSlideDown, {duration: 500});
})

navCloseBtn.addEventListener('click', () => {
    nav.classList.toggle('hide')
    navCloseBtn.style.visibility = 'hidden'
    navCloseBtn.style.opacity = 0
})

for(const link of nav.getElementsByTagName('a')) {
    link.onmousemove = (e) => {
        const rect = link.getBoundingClientRect()
        img = link.querySelector("img")

        img.style.left = `${e.clientX - rect.left}px`
        img.style.top = `${e.clientY - rect.top}px`
    }
}

window.onmousemove = e => {
    const percent = e.clientY / window.innerHeight;
    
    nav.animate({
      transform: `translateY(${(percent * nav.offsetHeight /2) * -1}px)`
    }, {
      fill: "forwards",
      duration: 4000
    })
  }

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        navbar.classList.add('navbar-dark')
    } else {
        navbar.classList.remove('navbar-dark')
    }
})







