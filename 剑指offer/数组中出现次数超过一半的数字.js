function MoreThanHalfNum_Solution(numbers) {
    // write code here
    let obj = {};
    numbers.forEach(item => {
        if (!obj[item]) {
            obj[item] = 1
        } else {
            obj[item]++;
        }
    });
    let res = 0;
    Object.keys(obj).forEach(function (key) {
        console.log(obj[key], numbers.length / 2)
        if (obj[key] > numbers.length / 2) {
            res = key
        }
    })
    return res
    // console.log(obj)


}
console.log(MoreThanHalfNum_Solution([1, 2, 3, 2, 2, 2, 5, 4, 2]))