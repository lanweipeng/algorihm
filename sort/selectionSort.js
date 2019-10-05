// 与冒泡排序正好相反，找到最小的数放在最前面
// 每次循环找到最小的下标，与最前面的位置互换(第一次0是最前面，第二次1是最前面)
// 时间复杂度O(N^2)，额外空间复杂度（1）
let selectionSort = (arr) => {
    // 不是数组或长度小于2，无需排序
    if (!(arr instanceof Array) || arr.length < 2) {
        return;
    }
    for (let i = 0; i < arr.length - 1; i++) {
        //找出最小的下标
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            // console.log(arr[minIndex], arr[j])
            if (arr[minIndex] > arr[j])
                minIndex = j;
        }
        // es6解构赋值 最小的数与最前面的数互换
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

console.log(selectionSort([1, 4, 8, 2, 9, 23, 5, 2]));