const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var k = 2; //这里代表题目中设定好的输入的行数
var rows = []; //用于存储每行的输入

rl.on('line', function(line) {
    rows.push(line); //将每次输入的行数据存入

    if (k == rows.length) { //当输入的行数等于设定的k值时，开始逻辑处理
        let arr = rows[1].split('');
        // let xiaoxie=true;
        // true=xiaoxie,false=daxie
        let daxiao = 'xiao';
        let cur = 'a';
        let count = 0;
        for (let i = 0; i < arr.length - 1; i++) {
            // if(cur)

            if (daxiaoFn(cur) != daxiaoFn(arr[i]) && daxiaoFn(arr[i] != daxiaoFn(arr[i + 1]))) {
                cur = arr[i]
                count++;
            }
            if (daxiaoFn(cur) != daxiaoFn(arr[i]) && daxiaoFn(arr[i] == daxiaoFn(arr[i + 1]))) {
                cur = arr[i]

                count++;
            }
        }
        count += arr.length;

        function daxiaoFn(char) {
            if (/[A-Z]/.test(char)) {
                return 'da'
            } else {
                return 'xiao'
            }
        }
        console.log(count); //输出结果
        rows.length = 0; //状态重置
    }
});