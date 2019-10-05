process.stdin.setEncoding('utf8');
process.stdin.on('data', (input) => {
    input = input.toString().trim();
    let a, b;
    let arr = input.split('');
    let arr1 = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '(') {
            arr1.push(arr[i])
        }
        if (arr[i] == ')') {
            arr1.pop()
        }
        if (arr[i] == '\"') {
            count++;
        }
    }
    if (arr1.length == 0 && count % 2 == 0) {

        console.log(true);


    } else
        console.log(false);

})