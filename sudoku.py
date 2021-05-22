EMPTY = 0

def sudoku(board):
    if is_complete(board):
        return board

    r, c = find_first_empty(board)
    # set r, c to a val from 1 to 9
    for i in range(1, 10):
        board[r][c] = i
        if valid_so_far(board):
            result = sudoku(board)
            if is_complete(result):
                return result
        board[r][c] = EMPTY
    return board

def is_complete(board):
    return all(all(val is not EMPTY for val in row) for row in board)

def find_first_empty(board):
    for i, row in enumerate(board):
        for j, val in enumerate(row):
            if val == EMPTY:
                return i, j
    return False

def valid_so_far(board):
    if not rows_valid(board):
        return False
    if not cols_valid(board):
        return False
    if not blocks_valid(board):
        return False
    return True

def rows_valid(board):
    for row in board:
        if duplicates(row):
            return False
    return True

def cols_valid(board):
    for j in range(len(board[0])):
        if duplicates([board[i][j] for i in range(len(board))]):
            return False
    return True

def blocks_valid(board):
    for i in range(0, 9, 3):
        for j in range(0, 9, 3):
            block = []
            for k in range(3):
                for l in range(3):
                    block.append(board[i + k][j + l])
            if duplicates(block):
                return False
    return True

def duplicates(arr):
    c = {}
    for val in arr:
        if val in c and val is not EMPTY:
            return True
        c[val] = True
    return

board = []
numbers = [0,8,3,6,0,0,0,0,0,2,0,0,0,0,8,9,0,0,4,0,0,0,9,2,0,8,0,0,3,0,1,0,0,0,0,0,0,0,8,0,5,0,7,0,0,0,0,0,0,0,9,0,1,0,0,7,0,3,4,0,0,0,1,0,0,4,7,0,0,0,0,8,0,0,0,0,0,1,4,7,0]
i=0
for r in range(0,9):
    row = []
    board.append(row)
    for c in range(0,9):
        col = numbers[i]
        board[r].append(col)
        i += 1

print(board)

print(sudoku(board))
