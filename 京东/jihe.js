const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var k = 3; //这里代表题目中设定好的输入的行数
var rows = []; //用于存储每行的输入

rl.on('line', function(line) {
    rows.push(line); //将每次输入的行数据存入

    if (k == rows.length) { //当输入的行数等于设定的k值时，开始逻辑处理
        let str1 = rows[1];
        let arr1 = str1.split(' ');
        let str2 = rows[2];

        let arr2 = str2.split(' ');
        let arr3 = [...arr1, ...arr2];
        let arr4 = Array.from(new Set(arr3)).sort(function(a, b) {
            return a - b
        });

        let str4 = arr4.join(' ')
        console.log(str4)
        rows.length = 0; //状态重置
    }
});