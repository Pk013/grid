class Grid{
    constructor(columnLength, rowLength, parentElement = document.body){
        this.columnLength = columnLength
        this.rowLength = rowLength
        this.parentElement = parentElement
        this.makeGrid()
    }
    makeGrid(){
        const gridContainer = this.makeGridContainer()
        for(let row = 0; row < this.columnLength; row++){
            let rowMaker = this.makeRow(row)
            for(let column = 0; column < this.rowLength; column++){
                let cell = new Cell(row, column)
                rowMaker.appendChild(cell.cellElement)
            }
            gridContainer.appendChild(rowMaker)
        }
        this.parentElement.appendChild(gridContainer)
    }   
    makeGridContainer(){
        const GridContainer = document.createElement("div")
        GridContainer.className = "Grid"
        return GridContainer
    }
    makeRow(rowIndex){
        const rowCreator = document.createElement("div")
        rowCreator.className = "row"
        rowCreator.dataset.rowIndex = rowIndex
        return rowCreator
    }
}