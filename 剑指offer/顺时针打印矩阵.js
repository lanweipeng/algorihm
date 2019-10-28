//第一版：复杂度过高，结果是对的
function printMatrix1(matrix) {
    // write code here
    let direction = 0;
    let arr = [];
    let row = matrix[0].length;
    let col = matrix.length;
    if (matrix.length == 1) {
        return matrix
    }
    let i = 0;
    while (arr.length < row * col) {
        if (direction == 0) {
            for (let j = 0 + i; j < row - i - 1; j++) {
                arr.push(matrix[i][j]);

            }
            direction = 1;
        } else if (direction == 1) {
            for (let j = 0 + i; j < col - i - 1; j++) {
                arr.push(matrix[j][row - i - 1]);

            }
            direction = 2;
        } else if (direction == 2) {
            for (let j = row - i - 1; j > 0 + i; j--) {
                arr.push(matrix[col - i - 1][j]);

            }
            direction = 3;
        } else if (direction == 3) {
            for (let j = col - i - 1; j > 0 + i; j--) {
                arr.push(matrix[j][i]);

            }
            direction = 0;
            i++;
        }
    }
    console.log(arr)
}
//指针
function printMatrix(matrix) {
    let direction = 0;
    let arr = [];
    let row = matrix[0].length;
    let col = matrix.length;
    let i = 0, j = 0, circle = 0;
    while (arr.length < row * col) {
        switch (direction) {
            case 0:
                if (j < row - circle) {
                    arr.push(matrix[i][j]);
                    j++;
                } else {
                    direction = 1; i++; j--;
                }
                break;
            case 1:
                if (i < col - circle) {
                    arr.push(matrix[i][j]);
                    i++;
                } else {
                    direction = 2; i--; j--;
                }
                break;
            case 2:
                if (j >= 0 + circle) {
                    arr.push(matrix[i][j]);
                    j--;
                } else {
                    j++; i--; direction = 3;
                }
                break;
            case 3:
                if (i > 0 + circle) {
                    arr.push(matrix[i][j]);
                    i--;
                } else {
                    direction = 0; i++; j++; circle++;
                }
                break;
        }
    }
    console.log(arr)
}
printMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])