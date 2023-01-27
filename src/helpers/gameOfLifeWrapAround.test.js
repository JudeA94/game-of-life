const GameOfLife = require("./gameOfLife")


describe('GameOfLife', () => {
  const grid = [[1,1,1],[1,0,0],[0,1,0]]
  const nextGrid = [ [ 1, 1, 0 ], [ 1, 0, 1 ], [ 0, 0, 0 ] ]
  const nextNextGrid = [ [ 1, 1, 0 ], [ 1, 0, 0 ], [ 0, 0, 0 ] ]
  const blankGrid = [[0,0,0],[0,0,0],[0,0,0]]
  it('can get the next grid in the game with wrap-around', () => {
    const gameOfLife = new GameOfLife()
    expect(gameOfLife.nextGrid(grid)).toEqual(nextGrid)
  })
  it('can be played multiple times with wrap-around', () => {
    const gameOfLife = new GameOfLife()
    const next = gameOfLife.nextGrid(grid)
    expect(gameOfLife.nextGrid(next)).toEqual(nextNextGrid)
  })
  it('can reset the grid with wrap-around', () => {
    const gameOfLife = new GameOfLife()
    const next = gameOfLife.nextGrid(grid)
    expect(gameOfLife.nextGrid(next)).toEqual(nextNextGrid)
    expect(gameOfLife.resetGrid(3,3)).toEqual(blankGrid)
  })
  const grid2 = [[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]]
  const nextGrid2 = [[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]]
  it('second test case for nextgrid with wrap-around', () => {
    const gameOfLife = new GameOfLife()
    expect(gameOfLife.nextGrid(grid2)).toEqual(nextGrid2)
  })
  const grid3 = [[1,1,1,1],[1,1,1,1],[1,1,1,1]]
  const nextGrid3 = [[1,0,0,1],[0,0,0,0],[1,0,0,1]]
  it('third test case for nextgrid with wrap-around', () => {
    const gameOfLife = new GameOfLife()
    expect(gameOfLife.nextGrid(grid3)).toEqual(nextGrid3)
  })
})