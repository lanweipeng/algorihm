process.stdin.setEncoding('utf8');
process.stdin.on('data', (input) => {
    input = input.toString().trim();
    let a, b;
    let arr = input.split(' ');
    a = arr[0].split('').reverse();
    b = arr[1].split('').reverse();
    let count;
    let ncount;
    a.length > b.length ? count = b.length : count = a.length;
    a.length > b.length ? ncount = a.length : ncount = b.length;
    let arr1
    if (a.length > b.length) {
        arr1 = a
    } else {
        arr1 = b
    }
    let jin = 0;
    let current = 0;
    let result = [];
    let yu;
    for (let i = 0; i < count; i++) {
        // yu = jin + yu;
        // current += jin;
        let an = parseInt(a[i]);
        let bn = parseInt(b[i])
        if (an + bn >= 10) {
            yu = (an + bn) - 10 + jin
            jin = 1
        } else {
            yu = an + bn + jin
            jin = 0
        }
        current += yu;
        result.push(yu)
        yu = 0;
        curren = 0
    }
    console.log(count, arr1[count])
    for (let i = count; i < ncount; i++) {
        console.log(i)
        if (i == count) {
            console.log(arr1[i])
            result.push(jin + parseInt(arr1[i]))
        } else {
            result.push(arr1[i])
        }
    }
    console.log(result.reverse().join(''))
})