const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (answer) => {
    // TODO：将答案记录在数据库中。
    let arr = [];
    while (answer.length == 0) {
        if (answer.length < 4) {
            arr.slice(-4);
            answer =
}
    }

    rl.close();
});