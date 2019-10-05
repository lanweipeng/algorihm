var arr = [8, 2];
//快排
function quickSort(arr) {
    if (arr.length < 1) {
        return arr
    }
    let left = [];
    let right = [];
    let flag = arr[0];
    arr.forEach(element => {
        if (element < flag) {
            left.push(element)
        }
        if (element > flag) {
            right.push(element)
        }
    });
    return quickSort(left).concat(flag).concat(quickSort(right))

}
// console.log(quickSort(arr))
// 原地快排 改进额外空间的缺点
function quickSort2(arr) {
    console.log(arr)
    if (arr === undefined || arr == [undefined]) {
        return []
    } else if (arr.length == 1) {
        return [...arr]
    }
    let flag = arr[0];
    let i = 1;
    let j = arr.length - 1;

    while (i < j) {
        while (arr[i] <= flag && i < j) {
            i++
        }
        while (arr[j] > flag && i < j) {
            j--
        }
        if (i < j)
            [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    // if (arr[0] > arr[i])
    [arr[0], arr[i]] = [arr[i], arr[0]];
    // console.log(arr[0], i, j);

    // console.log(arr.slice(0, i), flag, arr.slice(i + 1));
    return [].concat(quickSort2(arr.slice(0, i))).concat(flag).concat(quickSort2(arr.slice(i + 1)))
}
console.log(quickSort2(arr))