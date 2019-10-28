process.stdin.setEncoding('utf8');
process.stdin.on('data', (input) => {
    input = input.toString().trim();
    let arr = input.split('-');
    arr = arr.map(item => {
        return item.slice(0, 1).toUpperCase() + item.slice(1);
    })
    console.log(arr.join(''))
})