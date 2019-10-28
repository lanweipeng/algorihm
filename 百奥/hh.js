// //我是前端岗，我使用js进行作答
// function findOne(str) {
//     let arr1 = [], arr2 = [], arr3 = [];
//     str.split('').forEach(item => {
//         if (arr1.indexOf(item) == -1) {
//             //把只出现一次的放进数组1
//             arr1.push(item)
//         } else {
//             //出现第二次放进数组2
//             arr2.push(item)
//         }
//     })
//     console.log(arr1, arr2)
//     arr2 = Array.from(new Set(arr2))
//     //数组1-数组2就是只出现一次
//     arr1.forEach(item => {
//         if (arr2.indexOf(item) == -1) {
//             arr3.push(item)
//         }
//     })
//     console.log(arr3)
//     return arr3[0]
// }
// console.log(findOne('hhdjdiengv'))