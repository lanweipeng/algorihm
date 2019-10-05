var arr = [1, 5, 6, 46, 97];

function towsearch(arr, item) {
    let low = 0;
    let height = arr.length - 1;
    while (low <= height) {
        let mid = Math.floor((low + height) / 2);

        if (arr[mid] < item) {

            low = mid + 1;

        } else if (arr[mid] > item) {
            height = mid - 1;

        } else {
            return mid
        }
    }
    return -1

}
console.log(towsearch(arr, 5))