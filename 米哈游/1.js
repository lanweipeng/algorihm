const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var k = 2; //这里代表题目中设定好的输入的行数
var rows = []; //用于存储每行的输入

rl.on('line', function (line) {
    rows.push(line); //将每次输入的行数据存入

    if (k == rows.length) { //当输入的行数等于设定的k值时，开始逻辑处理
        let arr = rows[1].split(' ').sort((a, b) => {
            return parseInt(a) - parseInt(b)
        });
        let flag = true;
        console.log(arr)
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] + 1 != arr[i + 1]) {
                flag = false;
            }
        }
        if (flag == true) {
            console.log('YES+0')
        } else {
            console.log('NO+0')
        }
        rows.length = 0; //状态重置
    }
});