const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var k = -1; //先给行数置-1,表示还没开始读取
var rows = []; //用于存储每行的输入

rl.on('line', function(line) {

    if (k < 0) {
        k = parseInt(line.trim()); //读取第一行，得到接下来输入的行数
    } else {

        rows.push(line.trim()); //将每次输入的行数据存入
        let N, M, a, arr;
        arr = line.split(' ');
        N = arr[0]
        M = arr[1]
        a = arr[2]
        console.log(Math.ceil(N / a) * Math.ceil(M / a))
        if (k == rows.length) { //当输入的行数等于设定的k值时，开始逻辑处理
            rl.close();
            rows.length = 0; //状态重置
            k = -1;
        }

        // console.log(result); //输出结果


    }

});