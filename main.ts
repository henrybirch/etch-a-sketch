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
