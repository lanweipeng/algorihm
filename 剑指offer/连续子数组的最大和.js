function FindGreatestSumOfSubArray(array) {
    // write code here
    let arr = [];
    array = array.sort((a, b) => b - a);
    let zheng = [], fu = [];
    array.forEach(item => {
        if (item >= 0) {
            zheng.push(item)
        } else {
            fu.push(item)
        }
    });
    zheng.sort((a, b) => b - a);
    arr = arr.sort((a, b) => b - a);
    fu.sort((a, b) => b - a);
    console.log(zheng, fu[0], zheng.length)
    if (fu.length > 0 && zheng.length != 0) {
        return eval(`${zheng[0]}+${zheng[1]}+${zheng[2]}+${fu[0]}`)
    } else if (zheng.length == 0) {
        return eval(fu[0])
    } else if (fu.length == 0) {
        let sum = 0;
        zheng.forEach(item => {
            sum += item
        })
        return sum
    }

    // let arr = [];
    // let zheng = [], fu = [];
    // array.forEach(item => {
    //     if (item >= 0) {
    //         zheng.push(item)
    //     } else {
    //         fu.push(item)
    //     }
    // });
    // zheng.sort((a, b) => b - a);
    // if (zheng.length >= 4 && fu.length < 0) {
    //     return eval(`${zheng[0]}+${zheng[1]}+${zheng[2]}+${zheng[3]}`)

    // } else if (zheng.length == 3) {
    //     return eval(`${zheng[0]}+${zheng[1]}+${zheng[2]}+${fu[0]}`)

    // } else if (zheng.length == 2) {
    //     return eval(`${zheng[0]}+${zheng[1]}+${fu0[1]}+${fu[0]}`)
    // } else if (zheng.length == 1) {
    //     return eval(`${zheng[0]}+${fu[2]}+${fu0[1]}+${fu[0]}`)

    // } else {
    //     return eval(`${fu[3]}+${fu[2]}+${fu[1]}+${fu[0]}`)
    // }
    // if (fu.length > 0) {
    //     fu.sort((a, b) => b - a);
    //     // console.log(fu)

    // } else {

    // }
}
console.log(FindGreatestSumOfSubArray([2, 8, 1, 5, 9]))