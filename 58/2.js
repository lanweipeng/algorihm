process.stdin.setEncoding('utf8');
process.stdin.on('data', (input) => {
    input = input.toString().trim();
    let a, b;
    let arr = input.split('');
    arr.sort();
    let curren, count = 1;
    let zf, zc = 0;
    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i] == arr[i + 1]) {
            count++;
        } else {
            count = 1;
        }
        if (count > zc) {
            zc = count;
            zf = arr[i]
        }
    }
    console.log(zf, zc)
})