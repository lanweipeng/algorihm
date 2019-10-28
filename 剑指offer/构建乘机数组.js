function multiply(array) {
    // write code here
    let b = [];

    for (let i = 0; i < array.length; i++) {
        let newArr = [...array]
        newArr.splice(i, 1)
        b[i] = mu(newArr);
    }
    return b
}
function mu(arr) {
    let m = 1
    arr.forEach(item => {
        m *= item
    })
    return m
}
console.log(multiply([1, 2, 3, 4, 5]))