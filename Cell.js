class Cell{
    constructor(rowIndex, columnIndex){
        this.rowIndex = rowIndex
        this.columnIndex = columnIndex
        this.cellElement = this.createElement()
    }
    createElement(){
        const cellElement = document.createElement("div")
        cellElement.className = "cell"
        cellElement.dataset.rowIndex = this.rowIndex
        cellElement.dataset.columnIndex = this.columnIndex
        return cellElement
    }
}