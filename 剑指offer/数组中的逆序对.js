function InversePairs(data) {
    // write code here
    var copy = data.slice();
    return mergeInversePairs(data, copy, 0, data.length - 1) % 1000000007;
}
function mergeInversePairs(arr, copy, begin, end) {
    if (begin === end) {
        return 0;
    }
    var mid = begin + end >> 1;
    var left = mergeInversePairs(arr, copy, begin, mid);
    var right = mergeInversePairs(arr, copy, mid + 1, end);
    var num = 0, i = mid, j = end, k = end;
    while (i >= begin && j >= mid + 1) {
        if (arr[i] <= arr[j]) {
            copy[k--] = arr[j--];
        } else {
            num += j - mid;
            copy[k--] = arr[i--];
        }
    }
    while (i >= begin) copy[k--] = arr[i--];
    while (j >= mid + 1) copy[k--] = arr[j--];
    for (var s = begin; s <= end; s++) {
        arr[s] = copy[s];
    }
    return num + left + right;
}
console.log(InversePairs([1, 2, 3, 4, 5, 6, 7, 0]))