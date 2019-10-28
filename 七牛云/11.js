const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (answer) => {
    // TODO：将答案记录在数据库中。
    let arr = answer.split('-');
    arr = arr.map(item => {
        return item.slice(0, 1).toUpperCase() + item.slice(1);
    })
    console.log(arr.join(''))

    rl.close();
});