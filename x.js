let arr = [1, 2, 3, 4]
let item = 3

function indexOf(arr, item) {
    let res = -1;
    arr.map((i, index) => {
        console.log(i, item, index)
        if (i == item)
            res = index
    })
    return res
}
console.log(indexOf(arr, item))