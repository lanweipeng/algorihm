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
        let count = 0;
        let daniu = rows[0].split(' '), nandian = rows[1].split(' ');
        daniu = daniu.map(item => parseInt(item));
        nandian = nandian.map(item => parseInt(item));
        daniu = daniu.sort((a, b) => a - b);
        nandian = nandian.sort((a, b) => a - b);
        console.log(daniu, nandian)
        for (let i = 0; i < nandian.length; i++) {
            for (let j = 0; j < daniu.length; j++) {
                if (nandian[i] > daniu[j]) {
                    console.log(nandian[i], daniu[j]);
                    count++; daniu.splice(j, 1); nandian.splice(i, 1); console.log(daniu, nandian); break;
                }
            }

        }
        console.log(count)
        rows.length = 0; //状态重置
    }
});