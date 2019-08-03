process.on('exit', function(code) { console.log(code) });
process.stdin.setEncoding('utf8');

process.stdout.write("......\n");
process.stdout.write("确认执行吗(y/n)？");
process.stdin.on('data', (input) => {
    input = input.toString().trim();
    console.log(input)
        // if (['Y', 'y', 'YES', 'yes'].indexOf(input) > -1) Todo something;
        // if (['N', 'n', 'NO', 'no'].indexOf(input) > -1) process.exit(0);

})