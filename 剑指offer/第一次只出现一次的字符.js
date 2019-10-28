function FirstNotRepeatingChar(str) {
    // write code here
    let arr = []; let chong = [];
    str.split('').forEach(item => {
        if (arr.indexOf(item) == -1) {
            arr.push(item)
        } else {
            chong.push(item)
            // let index = arr.indexOf(item);
            // arr.splice(index, 1)
        }
    });
    chong = Array.from(new Set(chong));
    chong.forEach(item => {
        arr = arr.join('').split(item).join('').split('');
    })
    return str.indexOf(arr[0])
}
console.log(FirstNotRepeatingChar('NXWtnzyoHoBhUJaPauJaAitLWNMlkKwDYbbigdMMaYfkVPhGZcrEwp'))