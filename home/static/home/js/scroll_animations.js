const navbar = document.getElementById('navbar')
const bars = document.querySelectorAll('.rect')
const fadeBox = document.getElementById('fade-box')
const dotGrid = document.querySelectorAll('.dot-grid')

console.log(dotGrid)

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



