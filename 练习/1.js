var arr = [1, 5, 6, 3, 3, 78, 65];
var sum = 6;
let obj = {};
arr.forEach((item, index) => {
    if (item in obj) {
        console.log(obj[index], item)
    }
    obj[sum - item] = item;
})
console.log(obj)