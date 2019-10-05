function FindNumbersWithSum(array, sum) {
    // write code here
    let arr = [];

    array.forEach(item => {
        let last = sum - item;
        let index = array.indexOf(item);
        let left = array.slice(0, index);
        let right = array.slice(index + 1);
        lastArr = [...left, ...right];
        if (lastArr.indexOf(last) !== -1 && last !== 0) {
            arr.push([item, last])
        }
    })
    if (arr.length == 0) {
        return []
    }
    arr.sort((a, b) => {
        let am = a[0] * a[1],
            bm = b[0] * b[1];
        if (am > bm) {
            return a;
        } else {
            return b;
        }
    })
    return arr[0]

}
console.log(FindNumbersWithSum([1, 2, 4, 7, 11, 16], 10))