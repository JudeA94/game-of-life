class GameOfLife {

  resetGrid(rows, columns) {
    const blankGrid = new Array(rows);
    for (let i = 0; i < rows; i++) {
      blankGrid[i] = new Array(columns);
      for (let j = 0; j < columns; j++) {
        blankGrid[i][j] = 0;
      }
    }
    return blankGrid
  }

  addPadding(grid) {
    const paddedGrid = new Array(grid.length + 2)
    for (let i = 0; i < paddedGrid.length; i++) {
      paddedGrid[i] = new Array(grid[0].length + 2).fill(0)
    }
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        paddedGrid[i + 1][j + 1] = grid[i][j]
      }
    }
    return paddedGrid
  }

  getNeighbours = (paddedGrid, i, j) => {
    return [
      paddedGrid[i - 1][j - 1],
      paddedGrid[i][j - 1],
      paddedGrid[i + 1][j - 1],
      paddedGrid[i - 1][j],
      paddedGrid[i + 1][j],
      paddedGrid[i - 1][j + 1],
      paddedGrid[i][j + 1],
      paddedGrid[i + 1][j + 1],
    ]
  }

  nextGrid = (grid) => {
    const paddedGrid = this.addPadding(grid)
    const width = grid[0].length
    const height = grid.length
    const nextGrid = Array.from({ length: height }, () => new Array(width))

    for (let i = 1; i <= height; i++) {
      for (let j = 1; j <= width; j++) {
        const neighbours = this.getNeighbours(paddedGrid, i, j)
        const living = neighbours.filter((cell) => cell === 1).length
        if (paddedGrid[i][j] === 0) {
          if(living === 3)
            nextGrid[i-1][j-1] = 1
          else
            nextGrid[i-1][j-1] = 0
        } else {
          if(living === 2 || living === 3)
            nextGrid[i-1][j-1] = 1
          else
            nextGrid[i-1][j-1] = 0
        }
      }
    }
    return nextGrid
  }

}

module.exports = GameOfLife