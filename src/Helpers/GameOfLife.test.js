const GameOfLife = require("./gameOfLife")



describe('GameOfLife', () => {
  const grid = [[1,1,1],[1,0,0],[0,1,0]]
  const paddedGrid = [[0,0,0,0,0],[0,1,1,1,0],[0,1,0,0,0],[0,0,1,0,0],[0,0,0,0,0]]
  const nextGrid = [ [ 1, 1, 1 ], [ 1, 0, 0 ], [ 0, 1, 0 ] ]
  const nextNextGrid = [ [ 1, 1, 1 ], [ 1, 0, 0 ], [ 0, 1, 0 ] ]
  it('can add padding of 0s to a given grid', () => {
    const gameOfLife = new GameOfLife()
    expect(gameOfLife.addPadding(grid)).toEqual(paddedGrid)
  })
})