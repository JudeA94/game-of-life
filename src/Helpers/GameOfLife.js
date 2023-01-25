class GameOfLife {
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

  
}

module.exports = GameOfLife
