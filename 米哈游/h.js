let arr = rows.sort((a, b) => {
    return parseInt(a) - parseInt(b)
});
let flag = true;
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