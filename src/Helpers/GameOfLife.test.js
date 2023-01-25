const GameOfLife = require("./gameOfLife")



describe('GameOfLife', () => {
  const grid = [[1,1,1],[1,0,0],[0,1,0]]
  const paddedGrid = [[0,0,0,0,0],[0,1,1,1,0],[0,1,0,0,0],[0,0,1,0,0],[0,0,0,0,0]]
  const nextGrid = [ [ 1, 1, 0 ], [ 1, 0, 1 ], [ 0, 0, 0 ] ]
  const nextNextGrid = [ [ 1, 1, 0 ], [ 1, 0, 0 ], [ 0, 0, 0 ] ]
  it('can add padding of 0s to a given grid', () => {
    const gameOfLife = new GameOfLife()
    expect(gameOfLife.addPadding(grid)).toEqual(paddedGrid)
  })
  it('can get Neighbours of a cell', () => {
    const gameOfLife = new GameOfLife()
    expect(gameOfLife.getNeighbours(paddedGrid,1,1)).toEqual([0,0,0,0,1,0,1,0])
  })
    it('can get the next grid in the game', () => {
    const gameOfLife = new GameOfLife()
    expect(gameOfLife.nextGrid(grid)).toEqual(nextGrid)
  })
  it('can be played muultiple times', () => {
    const gameOfLife = new GameOfLife()
    const next = gameOfLife.nextGrid(grid)
    console.log(nextNextGrid)
    console.log(gameOfLife.nextGrid(next))
    expect(gameOfLife.nextGrid(next)).toEqual(nextNextGrid)
  })
})