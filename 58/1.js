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
    let flag = 0;

    if (arr1.length == 0 && count % 2 == 0) {
        arr.forEach(item => {
            if (item == '(' || item == ')' || item == '"') {
                flag = 1;
            }

        })
    } else
        flag = 0
    if (flag == 0) {
        console.log(false)
    } else {
        console.log(true)
    }
})