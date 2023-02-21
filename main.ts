function getGridUnit(size: number, column: number, row: number) {
    const div = document.createElement("div")
    div.className = `grid-unit`
    div.id = column.toString() + "," + row.toString()
    div.setAttribute("data-column", column.toString())
    div.setAttribute("data-row", row.toString())
    div.setAttribute("data-passovers", "0")
    const sizeVh = `${size}vh`
    div.style.width = sizeVh
    div.style.height = sizeVh
    return div
}

function layGrid(size: number) {
    const gridUnitSize = 80 / size
    const pad = document.getElementById("pad")

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            pad.appendChild(getGridUnit(gridUnitSize, j, i))
        }
    }
}

function scaleBetween(unscaledNum, minAllowed, maxAllowed, min, max) {
    return (maxAllowed - minAllowed) * (unscaledNum - min) / (max - min) + minAllowed;
}

function listenForMouse(column: number, row: number) {
    const gridUnit = document.getElementById(column.toString() + "," + row.toString())

    const passover = gridUnit.getAttribute("data-passovers")
    const newPassover = (Number(passover) + 1)
    const newShade = (newPassover > 10 ? 1 : scaleBetween(newPassover, 0, 1, 0, 10 ))
    gridUnit.style.backgroundColor = `rgba(0, 0, 0, ${newShade})`

    gridUnit.setAttribute("data-passovers", newPassover.toString())
    gridUnit.classList.add("selected")
}

function setGridListeners() {
    const gridUnits = document.querySelectorAll(".grid-unit")
    gridUnits.forEach(el => {
        const column = Number(el.getAttribute("data-column"))
        const row = Number(el.getAttribute("data-row"))

        el.addEventListener("mouseover", e => listenForMouse(column, row))
    })
}

function reset(n: number) {
    layGrid(n)
    setGridListeners()
}

reset(20)