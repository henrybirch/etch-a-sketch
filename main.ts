function getGridUnit(size: number) {
    const div = document.createElement("div")
    div.className = "grid-unit"
    const sizeVh = `${size}vh`
    div.style.width = sizeVh
    div.style.height = sizeVh
    return div
}
