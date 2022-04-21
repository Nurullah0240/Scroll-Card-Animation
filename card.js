


function fordiv() {
    let container = document.getElementById("container")
    for (let x = 0; x < 20; x++) {
        let box = document.createElement("div")
        let headContent = document.createElement("h3")
        headContent.textContent = "Hello my best friend"
        box.insertBefore(headContent, box.firstChild)
        container.appendChild(box).setAttribute("class", "box")
        
    }

}

fordiv()

const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

