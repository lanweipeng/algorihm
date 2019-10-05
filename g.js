const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (answer) => {
    // TODO：将答案记录在数据库中。
    let bianhou = answer;
    let max = 0;
    if (answer.length < 4) {
        let oneC = 0;
        for (let i = 0; i < answer.length; i++) {

            if (answer.split('')[i] == 1) {
                oneC++;
            }

        }
        max = oneC
    } else {
        let arr = []
        let string = ''
        while (true) {

            bianhou = bianhou.slice(answer.length - 3, answer.length) + bianhou.slice(0, answer.length - 3)

            // string += bianhou + '#'
            arr.push(bianhou)

            if (answer == bianhou) {
                break;
            }
        }
        string = arr.join('#')
        arr = string.split('')
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == '1') {
                count++;
            }
            if (arr[i] == '#') {
                if (count > max) {
                    max = count;

                }
                count = 0;
            }
        }
        // console.log(string)

    }
    // let oneC = 0;
    // for (let i = 0; i < bianhou.length; i++) {

    //     if (bianhou.split('')[i] == 1) {
    //         oneC++;
    //     }

    // }
    // if (oneC > max) {
    //     max = oneC;
    // }
    console.log(max);

    rl.close();
});