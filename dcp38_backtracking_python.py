def n_queens(n, board=[]):
    if n == len(board):
        return 1

    count = 0
    for col in range(n):
        board.append(col)
        print('board after append: {}'.format(board))
        if is_valid(board):
            count += n_queens(n, board)
            print('------------- is valid ----------------- count {}'.format(count))
        board.pop()
        print('board after pop: {}'.format(board))
    return count

def is_valid(board):
    print('len(board) {}, board[-1] {}, board[:-1] {}'.format(len(board),board[-1],board[:-1]))

    current_queen_row, current_queen_col = len(board) - 1, board[-1]

    print('current_queen_row {},current_queen_col {}'.format(current_queen_row,current_queen_col))

    # Check if any queens can attack the last queen.
    for row, col in enumerate(board[:-1]):
        print('row {}, col {}'.format(row,col))
        diff = abs(current_queen_col - col)
        if diff == 0 or diff == current_queen_row - row:
            return False
    return True

# for i in range(10):
#    print(n_queens(i))
print(n_queens(4))