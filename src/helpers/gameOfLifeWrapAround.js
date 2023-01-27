class GameOfLife {
  resetGrid(rows, columns) {
    const blankGrid = new Array(rows)
    for (let i = 0; i < rows; i++) {
      blankGrid[i] = new Array(columns)
      for (let j = 0; j < columns; j++) {
        blankGrid[i][j] = 0
      }
    }
    return blankGrid
  }

  getNeighbours = (grid, i, j) => {
    const width = grid[0].length
    const height = grid.length
    return [
      grid[(i - 1 + height) % height][(j - 1 + width) % width],
      grid[(i + height) % height][(j - 1 + width) % width],
      grid[(i + 1 + height) % height][(j - 1 + width) % width],
      grid[(i - 1 + height) % height][(j + width) % width],
      grid[(i + 1 + height) % height][(j + width) % width],
      grid[(i - 1 + height) % height][(j + 1 + width) % width],
      grid[(i + height) % height][(j + 1 + width) % width],
      grid[(i + 1 + height) % height][(j + 1 + width) % width],
    ]
  }

  nextGrid = (grid) => {
    const width = grid[0].length
    const height = grid.length
    const nextGrid = Array.from({ length: height }, () => new Array(width))
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        const neighbours = this.getNeighbours(grid, i, j)
        const living = neighbours.filter((cell) => cell === 1).length
        if (grid[i][j] === 0) {
          if (living === 3) nextGrid[i][j] = 1
          else nextGrid[i][j] = 0
        } else {
          if (living === 2 || living === 3) nextGrid[i][j] = 1
          else nextGrid[i][j] = 0
        }
      }
    }
    return nextGrid
  }
}

module.exports = GameOfLife
