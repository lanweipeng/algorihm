const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var k = 2; //这里代表题目中设定好的输入的行数
var rows = []; //用于存储每行的输入

rl.on('line', function(line) {
    rows.push(line); //将每次输入的行数据存入

    if (1 == rows.length) { //当输入的行数等于设定的k值时，开始逻辑处理
        line1 = line
    }
    if (k == rows.length) { //当输入的行数等于设定的k值时，开始逻辑处理
        let line1 = rows[0]
        let line2 = rows[1];
        let arr = line2.split(' ');
        arr = arr.sort(function(a, b) {
            return b - a
        });
        let n = line1.split(' ')[0];
        let m = line1.split(' ')[1];
        if (n > m) n = m
        let max = 0;
        let index = 0;
        for (let i = 0; i < n; i++) {

            let sum = (i + 1) * arr[i];

            if (sum > max) {
                max = sum;
                index = arr[i]
            }
        }
        console.log(index)
        rl.close();
        rows.length = 0; //状态重置
    }
});