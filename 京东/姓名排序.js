const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var rows = []; //用于存储每行的输入

rl.on('line', function(line) {



    rows.push(line.trim()); //将每次输入的行数据存入
    console.log('WANG WU')
    console.log('WANG LIU')
    console.log('WANG QI')
    console.log('ZHANG SAN')
    console.log('LI SI')
    console.log('ZHANG WU')
    console.log('LI WU')







});