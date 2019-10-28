function LastRemaining_Solution(n, m) {
    // write code here
    if (n == 0) {
        return -1
    }
    if (n == 1) {
        return 0
    }
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = i;
    }
    let index = 0;
    while (arr.length != 1) {
        index = (index + m - 1) % arr.length;
        arr.splice(index, 1);
    }
    return arr[0]
}
console.log(LastRemaining_Solution(6, 7))