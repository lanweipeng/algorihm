function NumberOf1Between1AndN_Solution(n) {
    // write code here
    let sum = 0; let arr = [];
    for (let i = 1; i <= n; i++) {
        if (i.toString().indexOf('1') != -1) {
            arr.push(i)
        }
    }
    arr = arr.join('').split('')
    console.log(arr)
    return sum
}
console.log(NumberOf1Between1AndN_Solution(55))