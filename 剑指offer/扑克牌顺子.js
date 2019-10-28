function hh(numbers) {
    // write code here
    let zero = [], arr = [];
    //查重

    arr = numbers.filter(item => item != 0);
    if (arr.length != Array.from(new Set(arr)).length) {
        return false;
    }
    arr = arr.sort((a, b) => a - b);
    if (arr.length == 1) {
        return true;
    }
    if (arr[arr.length - 1] - arr[0] == arr.length - 1 + (numbers.length - arr.length)) {
        return true
    } else {
        return false;
    }
}
console.log(hh([1, 3, 0, 5, 0]))