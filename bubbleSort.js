// 冒泡排序
// 每次把最大的数排在最后面
// 1, 4, 8, 2, 9, 23, 5, 2
// 第一趟：
// 1 和4比， 大的放后面
// 1, 4
// 4 和8比， 大的放后面
// 1, 4, 8
// 8 和2比， 大的放后面
// 1, 4, 2, 8
// 8 和9比， 大的放后面
// 1, 4, 2, 8, 9
// 9 和23比， 大的放后面
// 1, 4, 2, 8, 9, 23
// 23 和5比， 大的放后面
// 1, 4, 2, 8, 9, 5, 23
// 23 和2比， 大的放后面
// 1, 4, 2, 8, 9, 5, 2, 23
// 第一趟结束，最大的数放在最后面，23不用动，对1, 4, 2, 8, 9, 5, 2进行操作，以此类推
// 时间复杂度O(N^2)，额外空间复杂度（1）
let bubbleSort = (arr) => {
    // 不是数组或长度小于2，无需排序
    if (!(arr instanceof Array) || arr.length < 2) {
        return;
    }
    for (let end = arr.length - 1; end > 0; end--) {
        for (let i = 0; i < end; i++) {
            // 相邻两位数两两比较，大的往后排
            if (arr[i] > arr[i + 1]) {
                // es6解构赋值
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        }
    }
    return arr
};
// test
// 1绝对正确的方法
let comparator = (arr) => {
    return arr.sort((a, b) => (a - b))
};
// 2，实现一个随机样本产生器
let generateRandomArray = (maxSize, maxValue) => {
    let arr = [];
    arr.length = Math.floor((maxSize + 1) * Math.random())
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.floor((maxValue + 1) * Math.random()) - Math.floor(maxValue * Math.random());
    }
    return arr
}
let copyArray = (arr) => {
    if (arr == null) return null;
    let res = [];
    res.length = arr.length;
    for (let i = 0; i < arr.length; i++) {
        res[i] = arr[i]
    }
    return res
}
let isEqual = (arr1, arr2) => {
    if ((arr1 == null && arr2 != null) || (arr1 != null && arr2 == null)) {
        return false;
    }
    if (arr1 == null && arr2 == null) {
        return true;
    }
    if (arr1.length != arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            return false;
        }
    }
    return true;
}
let prletArray = (arr) => {
    if (arr == null) {
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        process.stdout.write(arr[i] + " ");
    }
}
let main = () => {
    let testTime = 500000;
    let maxSize = 100;
    let maxValue = 100;
    let succeed = true;
    for (let i = 0; i < testTime; i++) {
        let arr1 = generateRandomArray(maxSize, maxValue);
        let arr2 = copyArray(arr1);
        bubbleSort(arr1);
        comparator(arr2);
        if (!isEqual(arr1, arr2)) {
            succeed = false;
            break;
        }
    }
    console.log(succeed ? "Nice!" : "Fucking fucked!");

    let arr = generateRandomArray(maxSize, maxValue);
    prletArray(arr);
    bubbleSort(arr);
    prletArray(arr);
}

main()
    // console.log(bubbleSort([1, 4, 8, 2, 9, 23, 5, 2]))
    // console.log(prletArray([1, 4, 8, 2, 9, 23, 5, 2]))
    // console.log(prletArray([1, 4, 8, 2, 9, 23, 5, 2]))