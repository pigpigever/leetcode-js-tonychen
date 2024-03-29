const isValidSudoku = require("./index");

describe('isValidSudoku', () => {
  it('should be true', () => {
    const board = [
      ["5", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ]
    const result = isValidSudoku(board)
    expect(result).toBe(true)
  });

  it('should be false', () => {
    const board = [
      ["8", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ]
    const result = isValidSudoku(board)
    expect(result).toBe(false)
  })

  it('should be false', () => {
    const board = [
      [".",".","4",".",".",".","6","3","."],
      [".",".",".",".",".",".",".",".","."],
      ["5",".",".",".",".",".",".","9","."],
      [".",".",".","5","6",".",".",".","."],
      ["4",".","3",".",".",".",".",".","1"],
      [".",".",".","7",".",".",".",".","."],
      [".",".",".","5",".",".",".",".","."],
      [".",".",".",".",".",".",".",".","."],
      [".",".",".",".",".",".",".",".","."]
    ]
    const result = isValidSudoku(board)
    expect(result).toBe(false)
  })

  it('should be false', ()=> {
    const board = [
      [".",".",".",".","5",".",".","1","."],
      [".","4",".","3",".",".",".",".","."],
      [".",".",".",".",".","3",".",".","1"],
      ["8",".",".",".",".",".",".","2","."],
      [".",".","2",".","7",".",".",".","."],
      [".","1","5",".",".",".",".",".","."],
      [".",".",".",".",".","2",".",".","."],
      [".","2",".","9",".",".",".",".","."],
      [".",".","4",".",".",".",".",".","."]
    ]
    const result = isValidSudoku(board)
    expect(result).toBe(false)
  })

});

