// Dot matrix animations Elements
const bars = document.querySelectorAll('.rect')
const fadeBox = document.getElementById('fade-box')
const dotGrid = document.querySelectorAll('.dot-grid')

// Carousel elements
const carousel = document.getElementById('carousel')
const carouselBtnLeft = document.getElementById('carousel-left')
const carouselBtnRight = document.getElementById('carousel-right')

let dotRowCount = 5
let dotColumnCount = 10

let dots = []


const dotInfo = {
    width: 10,
    height: 10,
    offsetX: 30,
    offsetY: 30,
}

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
const carouselBlurbs = document.querySelectorAll('.carousel__blurb')

const changeCarouselInfobox = () => {
    carouselBlurbs.forEach(blurb => {
        blurb.classList.remove('active')
    })
    carouselBlurbs[carouselIndex - 1].classList.add('active')
}

carouselBtnRight.addEventListener('click', () => {
    if (carouselIndex > carouselFlex.children.length -1) {
        carouselFlex.style.transform = `translateX(0%)`
        carouselIndex = 1
    } else {
        carouselFlex.style.transform = `translateX(-${carouselIndex * 100}% )`
        carouselIndex ++
    }

    changeCarouselInfobox()
})

carouselBtnLeft.addEventListener('click', () => {
    if (carouselIndex == 1) {
        carouselFlex.style.transform = `translateX(-${100 * (carouselFlex.children.length -1)}%)`
        carouselIndex = carouselFlex.children.length 
    } else {
        carouselIndex --
        carouselFlex.style.transform = `translateX(-${(carouselIndex - 1) * 100}% )`
    }
    
    changeCarouselInfobox()

})