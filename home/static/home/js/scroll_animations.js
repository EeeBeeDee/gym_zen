const nav = document.getElementById('nav')
const navCloseBtn = document.getElementById('nav-close-btn')
const navbar = document.getElementById('navbar')
const bars = document.querySelectorAll('.rect')
const fadeBox = document.getElementById('fade-box')
const dotGrid = document.querySelectorAll('.dot-grid')

navCloseBtn.addEventListener('click', () => {
    nav.classList.toggle('hide')
    navCloseBtn.style.display = 'none'
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
      transform: `translateY(${percent * nav.offsetHeight * -1}px)`
    }, {
      fill: "forwards",
      duration: 4000
    })
  }

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 300) {
//         navbar.classList.add('navbar-dark')
//     } else {
//         navbar.classList.remove('navbar-dark')
//     }
// })

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 400) {
//         bars.forEach(bar => {
//             bar.classList.add('stretch')
//         })
//     } 
// })

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

console.log('hello')



