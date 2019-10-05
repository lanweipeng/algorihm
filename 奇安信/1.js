// function number_of_1(n) {

//     // console.log(arr)
//     let count;
//     if (n < 0) {
//         count = shushu(yuanma(-n), 0) + 1
//     } else {
//         count = shushu(yuanma(n), 1)
//     }
//     return count
//         // console.log(count)
// }【
// function shushu(arr, n) {
//     let count = 0
//     arr.map(item => {

//         if (item == n) {
//             count++
//         }
//     })
//     return count;
// }

// function yuanma(n) {
//     let arr = [];
//     while (true) {
//         let yu = (n % 2);
//         // console.log(yu)
//         arr.push(yu)
//         n /= 2;
//         n = Math.floor(n)

//         // if (yu == 1)
//         // count++;
//         if (n == 0) {
//             break;
//         }
//     }
//     // console.log(arr)
//     return arr.reverse()
// }
// console.log(number_of_1(-7))
class LPromise {
    constructor(fn) {
        this.cb = null;
        var self = this;
        fn(function(a) {
            self.cb(a)
        })
    }
    then(cb) {
        cb = this.cb
    }
}
//cb
function sum(a, b, cb) {
    setTimeout(() => {
        cb(a + b);
    }, 1000);
}
sum(4, 7, s => {
    console.log(s);
    sum(2, 3, (s) => {
        console.log(s)
    })
});
//promise
function sum(a, b) {
    return new LPromise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 1000);
    })
}
let s = sum(4, 6).then((s) => {
    console.log(s);
    return sum(1, 2)
}).then((s) => {
    console.log(s)
})