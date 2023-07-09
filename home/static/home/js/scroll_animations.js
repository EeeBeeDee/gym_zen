// Nav Elements
const nav = document.getElementById('nav')
const navbar = document.getElementById('navbar')
const navBtn = document.getElementById('navbar-toggler')
const navCloseBtn = document.getElementById('nav-close-btn')

// Dot matrix animations Elements
const bars = document.querySelectorAll('.rect')
const fadeBox = document.getElementById('fade-box')
const dotGrid = document.querySelectorAll('.dot-grid')

// Carousel elements
const carousel = document.getElementById('carousel')
const carouselBtnLeft = document.getElementById('carousel-left')
const carouselBtnRight = document.getElementById('carousel-right')


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
    if (window.scrollY > 300) {
        navbar.classList.add('navbar-dark')
    } else {
        navbar.classList.remove('navbar-dark')
    }
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        bars.forEach(bar => {
            bar.classList.add('stretch')
        })
    } 
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        fadeBox.classList.add('faded')
    } 
})

let dotRowCount = 5
let dotColumnCount = 10

let dots = []


const dotInfo = {
    width: 10,
    height: 10,
    offsetX: 30,
    offsetY: 30,
}

for (let i = 0; i < dotRowCount; i++) {
    dots[i] = []
    for (let j = 0; j < dotColumnCount; j++) {
        x = i * dotInfo.offsetX
        y = j * dotInfo.offsetY
        dots[i][j] = {x, y, i, j, ...dotInfo}
    }
}
let alreadyScrolled1 = false
let alreadyScrolled2 = false

// Dot matrix animations event listeners

window.addEventListener('scroll', () => {
    if (alreadyScrolled1 === false) {
        if (window.scrollY > 350) {
            alreadyScrolled1 = true
            dots.forEach(column => {
                column.forEach(brick => {
                    let dot = document.createElement('div')
                    dot.className = 'dot'
                    dot.style.top = `${brick.y}px`
                    dot.style.left = `${brick.x}px`
                    dotGrid[0].appendChild(dot)
                    setTimeout(() => {
                        dot.style.opacity = 1
                    }, ((brick.i * brick.offsetX) + (brick.j * brick.offsetY) * 2)  + 1000)
            
                })
            })
        } 
    }
} )
window.addEventListener('scroll', () => {
    if (alreadyScrolled2 === false) {
        if (window.scrollY > 700) {
            alreadyScrolled2 = true
            dots.forEach(column => {
                column.forEach(brick => {
                    let dot = document.createElement('div')
                    dot.className = 'dot'
                    dot.style.top = `${brick.y}px`
                    dot.style.left = `${brick.x}px`
                    if ( brick.y > 90 ) {
                        dot.style.backgroundColor = '#fff'
                    } 
                    dotGrid[1].appendChild(dot)
                    setTimeout(() => {
                        dot.style.opacity = 1
                    }, ((brick.i * brick.offsetX) + (brick.j * brick.offsetY) * 2)  + 1000)
            
                })
            })
        } 
    }
} )


//  Carousel JS

let carouselIndex = 1
const carouselFlex = document.getElementById('carousel-flex')
let imgArr = carouselFlex.querySelectorAll('img')

carouselBtnRight.addEventListener('click', () => {
    if (carouselIndex > carouselFlex.children.length -1) {
        carouselFlex.style.transform = `translateX(0%)`
        carouselIndex = 1
    } else {
        carouselFlex.style.transform = `translateX(-${carouselIndex * 100}% )`
        carouselIndex ++
    }
    console.log(carouselIndex)
})

carouselBtnLeft.addEventListener('click', () => {
    if (carouselIndex == 1) {
        carouselFlex.style.transform = `translateX(-${100 * (carouselFlex.children.length -1)}%)`
        carouselIndex = carouselFlex.children.length 
    } else {
        carouselIndex --
        carouselFlex.style.transform = `translateX(-${(carouselIndex - 1) * 100}% )`
    }
    console.log(carouselIndex)
    
})



